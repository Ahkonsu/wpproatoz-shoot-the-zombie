jQuery(document).ready(function () {
	
	var shootAudio = document.createElement('audio');
    shootAudio.setAttribute('src', '/wp-content/plugins/shoot-the-zombie/assets/shot.mp3');
	var bodycount = 0;
	var shotsFired = 0;
	//test

    jQuery("#shootthezombie").click(function () {
		shotsFired--;
		jQuery(document).on( "click", "#zombie img", function(){
			bodycount++;
			jQuery("#zombie").stop();
			jQuery("#zombie").animate({
			  opacity: 0,
			  right:'300px'
			},300,function() {
				jQuery("body").css("cursor","default");
				jQuery( "div" ).remove( "#zombie" );
				jQuery(document).off('click');
			 });
		} );
		
		jQuery("body").css("cursor","crosshair");
		
		jQuery(document).click(function () {
			shootAudio.Stop;
			shootAudio.play();
			shotsFired++;
		});

		
		var height = Math.floor((Math.random() * 400) + 400);
		var top = Math.floor((Math.random() * (screen.height-100-height)) + 0);
		var speed = Math.floor((Math.random() * 8000) + 2000);
		
		jQuery('body').append('<div id="zombie" style="position:absolute; top:0; left:-500px;z-index:10000"><img height="'+height+'" src="/wp-content/plugins/shoot-the-zombie/images/zombie1.png"></div>');
		
		

        jQuery("#zombie").animate({
		 left: screen.width+'px'
		 
		},speed,function() {
    		jQuery("body").css("cursor","default");
			jQuery( "div" ).remove( "#zombie" );
			alert("The zombie ate you. You are dead.\nZombies shot = "+bodycount+"\nShots fired = "+shotsFired+"\nKill Accuracy = "+Math.floor(100-(((shotsFired-bodycount)/shotsFired)*100))+"%");
			jQuery(document).off('click');
			bodycount = 0;
			shotsFired = 0;
		 });	
		
    });
	
	
	
	
	
	
});