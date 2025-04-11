<?php
/*
Plugin Name: Brain Reaper’s Bounty
Description: Your website’s been infected by a digital plague, and the undead are clawing their way out of the code! As a hard-bitten bounty hunter hired by a shadowy council, your screen’s now a post-apocalyptic wasteland teeming with pixelated zombie horrors. Click the button, and they swarm—relentless "Jiangshi" hopping straight from Chinese folklore, eerie "Draugar" with Norse-born brute force, and more global ghouls itching to overrun the last outpost of your browser. Blast their heads with your cursor-turned-crosshair, racking up points as you harvest their glitching, decayed brains for trophies. Act fast—miss a shot, and their infectious bites might crash your tab! This quick-fire shooter embeds the apocalypse right into your site, daring you to clean up the mess one splattered skull at a time. Add [shoot-the-zombie] to your page to start hunting!
Version: 1.2
Author: WPProAtoZ.com / John Overall (Forked from Axel Jacobs 2014)
Requires at least: 6.0
Requires PHP: 8.0
License: GPLv2 or later
Author URI: https://wpproatoz.com
Plugin URI: https://wpproatoz.com/wp-pro-a-to-z-plugins-available/
Text Domain: wpproatoz-shoot-the-zombie
Update URI: https://github.com/Ahkonsu/wpproatoz-shoot-the-zombie/releases
GitHub Plugin URI: https://github.com/Ahkonsu/wpproatoz-shoot-the-zombie/releases
GitHub Branch: main
Forked From: Shoot the Zombie
*/

defined('ABSPATH') or die("No script kiddies please!");

define('STZ_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('STZ_PLUGIN_URL', plugin_dir_url(__FILE__));

// Plugin Update Checker
require 'plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$myUpdateChecker = PucFactory::buildUpdateChecker(
    'https://github.com/Ahkonsu/wpproatoz-shoot-the-zombie',
    __FILE__,
    'wpproatoz-shoot-the-zombie'
);
$myUpdateChecker->setBranch('main');

// Include the class file
require_once(STZ_PLUGIN_DIR . 'class.shootthezombie.php');

// Enqueue scripts and styles
function stz_enqueue_assets() {
    wp_enqueue_script(
        'brain-reapers-bounty-scripts',
        STZ_PLUGIN_URL . 'scripts.js',
        ['jquery'],
        '1.2',
        true
    );

    // Localize script with essentials
    wp_localize_script(
        'brain-reapers-bounty-scripts',
        'stz_vars',
        [
            'shot_sound' => STZ_PLUGIN_URL . 'assets/shot.mp3',
            'zombie_images' => [
                'standard' => STZ_PLUGIN_URL . 'images/zombie1.png',
                'jiangshi' => STZ_PLUGIN_URL . 'images/jiangshi.png',
                'draugar' => STZ_PLUGIN_URL . 'images/draugar.png',
            ]
        ]
    );
}
add_action('wp_enqueue_scripts', 'stz_enqueue_assets');

// Shortcode to add the game button
function stz_shortcode() {
    return '<button id="shootthezombie" class="brain-reapers-button">Hunt the Zombies!</button>';
}
add_shortcode('shoot-the-zombie', 'stz_shortcode');

// Instantiate the class
$dts = new Shootthezombie();