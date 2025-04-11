jQuery(document).ready(function ($) {
    // Wait for DOM to fully load and check for the button
    if (!$('#shootthezombie').length) {
        console.log('Shoot the Zombie button not found, game disabled');
        return;
    }
    console.log('Shoot the Zombie button found, game enabled');

    var shootAudio = new Audio(stz_vars.shot_sound);
    var bodycount = 0;
    var shotsFired = 0;
    var score = 0;
    var level = 1;
    var killsNeeded = 5;

    // Inject CSS for splatters and HUD
    $('<style>').text(`
        .splatter {
            position: absolute;
            pointer-events: none;
            z-index: 9999;
        }
        .splatter-hit {
            background: radial-gradient(circle, rgba(255, 0, 0, 0.8), rgba(139, 0, 0, 0.2));
            border-radius: 40% 60% 50% 70%;
            width: 40px;
            height: 40px;
            transform: translate(-50%, -50%) scale(0.2);
            animation: burstFade 0.4s ease-out forwards;
        }
        .splatter-hit-mini {
            background: radial-gradient(circle, rgba(255, 0, 0, 0.7), rgba(139, 0, 0, 0.1));
            border-radius: 50% 60% 40% 70%;
            width: 15px;
            height: 15px;
            transform: translate(-50%, -50%) scale(0.1);
            animation: burstFadeMini 0.3s ease-out forwards;
        }
        .splatter-miss {
            background: radial-gradient(circle, rgba(0, 0, 0, 0.7), rgba(50, 50, 50, 0.3));
            border-radius: 50%;
            width: 20px;
            height: 20px;
            transform: translate(-50%, -50%) scale(0.3);
            animation: splatterFade 0.5s ease-out forwards;
        }
        @keyframes burstFade {
            0% { transform: translate(-50%, -50%) scale(0.2); opacity: 1; }
            50% { transform: translate(-50%, -50%) scale(2); opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
        @keyframes burstFadeMini {
            0% { transform: translate(-50%, -50%) scale(0.1); opacity: 0.9; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        @keyframes splatterFade {
            0% { transform: translate(-50%, -50%) scale(0.3); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        #score-tracker {
            position: fixed;
            top: 150px;
            left: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            z-index: 10001;
            display: none;
        }
        #game-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(139, 0, 0, 0.9);
            color: #fff;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            z-index: 10002;
            display: none;
        }
        #game-message button {
            background: #fff;
            color: #000;
            border: none;
            padding: 10px 20px;
            margin-top: 10px;
            cursor: pointer;
            border-radius: 5px;
        }
    `).appendTo('head');

    // Add score tracker HUD
    $('body').append(`
        <div id="score-tracker">
            Score: <span id="score">0</span><br>
            Zombies Killed: <span id="kills">0</span><br>
            Shots Fired: <span id="shots">0</span><br>
            Accuracy: <span id="accuracy">0%</span><br>
            Level: <span id="level">1</span>
        </div>
        <div id="game-message">
            <div id="message-text"></div>
            <button id="continue-game">Continue</button>
        </div>
    `);

    // Array of zombie types
    const zombieTypes = [
        {
            name: 'Standard Zombie',
            image: stz_vars.zombie_images.standard
        },
        {
            name: 'Jiangshi',
            image: stz_vars.zombie_images.jiangshi
        },
        {
            name: 'Draugar',
            image: stz_vars.zombie_images.draugar
        }
    ];

    $('#shootthezombie').on('click', function (e) {
        e.stopPropagation();
        $('#zombie').remove();
        $(document).off('click.shoot');
        $('#score-tracker').show();
        $('body').css('cursor', 'crosshair');
        spawnZombie();
    });

    function spawnZombie() {
        var height = Math.floor(Math.random() * 400) + 400;
        var top = Math.floor(Math.random() * (window.innerHeight - 100 - height));
        var speed = Math.floor(Math.random() * 8000) + 2000 - (level * 500);
        speed = Math.max(speed, 1000);

        var zombie = zombieTypes[Math.floor(Math.random() * zombieTypes.length)];

        $('body').append(
            `<div id="zombie" style="position:absolute; top:${top}px; left:-500px; z-index:10000;">
                <img height="${height}" src="${zombie.image}" alt="${zombie.name}">
            </div>`
        );

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = zombie.image + '?t=' + new Date().getTime();

        var isCanvasReady = false;

        img.onload = function () {
            canvas.width = img.naturalWidth * (height / img.naturalHeight);
            canvas.height = height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            isCanvasReady = true;
        };

        img.onerror = function () {
            console.error(`Failed to load image: ${zombie.image}`);
        };

        $(document).on('click.shoot', function (e) {
            if (!$(e.target).closest('#zombie img').length) {
                shotsFired++;
                shootAudio.currentTime = 0;
                shootAudio.play();
                $('body').append(
                    `<div class="splatter splatter-miss" style="left:${e.clientX}px; top:${e.clientY}px;"></div>`
                );
                $('.splatter-miss').last().delay(500).queue(function () { $(this).remove(); });
                updateScoreTracker();
            }
        });

        $('#zombie img').on('click', function (e) {
            e.stopPropagation();
            if (!isCanvasReady) {
                console.log('Canvas not ready yet');
                return;
            }

            var $img = $(this);
            var rect = $img[0].getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;

            var canvasX = (x / rect.width) * canvas.width;
            var canvasY = (y / rect.height) * canvas.height;

            canvasX = Math.max(0, Math.min(canvas.width - 1, canvasX));
            canvasY = Math.max(0, Math.min(canvas.height - 1, canvasY));

            var pixel = ctx.getImageData(canvasX, canvasY, 1, 1).data;

            if (pixel[3] > 0) {
                bodycount++;
                shotsFired++;
                score += 100 + (level * 50);
                shootAudio.currentTime = 0;
                shootAudio.play();

                $('body').append(
                    `<div class="splatter splatter-hit" style="left:${e.clientX}px; top:${e.clientY}px;"></div>`
                );
                $('.splatter-hit').last().delay(400).queue(function () { $(this).remove(); });

                for (let i = 0; i < 3; i++) {
                    let offsetX = (Math.random() - 0.5) * 30;
                    let offsetY = (Math.random() - 0.5) * 30;
                    $('body').append(
                        `<div class="splatter splatter-hit-mini" style="left:${e.clientX + offsetX}px; top:${e.clientY + offsetY}px;"></div>`
                    );
                    $('.splatter-hit-mini').last().delay(300).queue(function () { $(this).remove(); });
                }

                $('#zombie').stop().animate(
                    { opacity: 0, right: '300px' },
                    300,
                    function () {
                        $(this).remove();
                        updateScoreTracker();
                        checkLevelProgress();
                    }
                );
                $(this).off('click');
            } else {
                shotsFired++;
                shootAudio.currentTime = 0;
                shootAudio.play();
                $('body').append(
                    `<div class="splatter splatter-miss" style="left:${e.clientX}px; top:${e.clientY}px;"></div>`
                );
                $('.splatter-miss').last().delay(500).queue(function () { $(this).remove(); });
                updateScoreTracker();
            }
        });

        $('#zombie').animate(
            { left: window.innerWidth + 'px' },
            speed,
            function () {
                $(this).remove();
                endGame(`The ${zombie.name} escaped! Try again.`);
            }
        );
    }

    function updateScoreTracker() {
        var accuracy = shotsFired > 0 ? Math.floor((bodycount / shotsFired) * 100) : 0;
        $('#score').text(score);
        $('#kills').text(bodycount);
        $('#shots').text(shotsFired);
        $('#accuracy').text(accuracy + '%');
        $('#level').text(level);
    }

    function checkLevelProgress() {
        if (bodycount >= killsNeeded) {
            level++;
            killsNeeded += 5;
            score += level * 100;
            $('#game-message').show().find('#message-text').text(`Level ${level} Reached! Get ready for tougher zombies.`);
            $('#continue-game').one('click', function () {
                $('#game-message').hide();
                bodycount = 0;
                shotsFired = 0;
                updateScoreTracker();
                spawnZombie();
            });
        } else {
            spawnZombie();
        }
    }

    function endGame(message) {
        $('body').css('cursor', 'default');
        $(document).off('click.shoot');
        $('#score-tracker').hide();
        $('#game-message').show().find('#message-text').text(`${message}\nFinal Score: ${score}`);
        $('#continue-game').text('Restart').one('click', function () {
            $('#game-message').hide();
            score = 0;
            bodycount = 0;
            shotsFired = 0;
            level = 1;
            killsNeeded = 5;
            updateScoreTracker();
            $('#shootthezombie').trigger('click');
        });
    }
});