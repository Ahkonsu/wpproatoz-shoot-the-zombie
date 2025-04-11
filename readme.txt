
        ___  _     _                         
       / _ \| |   | |                        
      / /_\ \ |__ | | _____  _ __  ___ _   _ 
     |  _  | '_ \| |/ / _ \| '_ \/ __| | | |
     | | | | | | |   < (_) | | | \__ \ |_| |
     \_| |_/_| |_|_|\_\___/|_| |_|___/\__,_|
                                           
                                     
        
        
        \||/
                |  @___oo
      /\  /\   / (__,,,,|
     ) /^\) ^\/ _)
     )   /^\/   _)
     )   _ /  / _)
 /\  )/\/ ||  | )_)
<  >      |(,,) )__)
 ||      /    \)___)\
 | \____(      )___) )___
  \______(_______;;; __;;;

=== Brain Reaper’s Bounty ===
Contributors: wpproatoz, johnoverall
Tags: game, zombie, shooter, fun, interactive
Requires at least: 6.0
Tested up to: 6.4
Requires PHP: 8.0
Stable tag: 1.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A thrilling zombie-shooting game for your WordPress site! Hunt undead horrors with a click and rack up points in a post-apocalyptic wasteland.

== Description ==

**Brain Reaper’s Bounty** turns your website into a zombie-infested battlefield! As a bounty hunter hired by a shadowy council, your mission is to blast through hordes of pixelated undead—relentless "Jiangshi" from Chinese folklore, eerie Norse "Draugar," and classic shamblers. Click the button to unleash the chaos, aim your cursor-crosshair at their heads, and collect decayed brain trophies while dodging infectious bites that could crash your tab. This lightweight shooter embeds apocalyptic fun right into your site with a simple shortcode: `[shoot-the-zombie]`.

Originally forked from Axel Jacobs’ "Shoot the Zombie" (2014), this version by WPProAtoZ.com adds levels, a score tracker, multiple zombie types, and pixel-perfect hit detection. Perfect for engaging visitors or adding a quirky twist to your site!

For more info, visit: [https://wpproatoz.com/wp-pro-a-to-z-plugins-available/](https://wpproatoz.com/wp-pro-a-to-z-plugins-available/)

== Installation ==

1. Download the plugin ZIP from the [GitHub releases page](https://github.com/Ahkonsu/wpproatoz-shoot-the-zombie/releases).
2. Upload it via **Plugins > Add New > Upload Plugin** in your WordPress admin.
3. Activate the plugin through the **Plugins** menu.
4. Add the shortcode `[shoot-the-zombie]` to any page or post (works with Elementor and other builders).

== Usage ==

1. Insert `[shoot-the-zombie]` in your page content (e.g., via Elementor’s shortcode widget).
2. Load the page, click "Hunt the Zombies!", and start shooting:
   - Aim at zombie heads for kills (red splatter burst).
   - Misses leave black splatters.
   - Track your score, kills, shots, accuracy, and level in the HUD (150px from top).
3. Advance through levels (5 kills per level) with increasing difficulty.
4. Restart if a zombie escapes!

== Frequently Asked Questions ==

= How do I start the game? =
Add `[shoot-the-zombie]` to a page and click the "Hunt the Zombies!" button.

= What’s the goal? =
Kill zombies by clicking their heads to earn points and advance levels. Don’t let them escape!

= Why does it only load on pages with the shortcode? =
The plugin checks for the `#shootthezombie` button in the DOM to ensure it runs only where intended.

= Can I add more zombies? =
Yes! Add new PNGs to the `images/` folder and update `zombie_images` in `shoot-the-zombie.php`.

= Does it work with page builders? =
Yes, tested with Elementor’s shortcode widget and should work with others.

== Screenshots ==

1. **Game in Action** - Zombies swarm the screen with splatters and HUD visible.
   (Add screenshot1.png to your repo)
2. **Level Up** - The "Level Reached" message with continue button.
   (Add screenshot2.png to your repo)

== Changelog ==

= 1.2 =
- Added levels (5 kills to advance, faster zombies each level).
- Introduced on-screen score tracker HUD (score, kills, shots, accuracy, level).
- Enhanced visuals with bursting red splatters for hits, black for misses.
- Switched to canvas-based pixel detection for precise zombie hits.
- Fixed shortcode to `[shoot-the-zombie]` (was incorrectly `[brain_reapers_bounty]`).
- Improved compatibility with Elementor via client-side button detection.
- Updated to version 1.2 with xAI’s Grok assistance.

= 1.1 =
- Forked from "Shoot the Zombie" by Axel Jacobs (2014).
- Added multiple zombie types (Standard, Jiangshi, Draugar).
- Initial enhancements with splatters and basic scoring.

= 1.0 (Original by Axel Jacobs) =
- Basic zombie-shooting game with a single zombie type.

== Upgrade Notice ==

= 1.2 =
Major update! Enjoy levels, a score HUD, and pixel-perfect hits. Now uses `[shoot-the-zombie]`—update your shortcodes if you used `[brain_reapers_bounty]` by mistake.

== License ==

This plugin is licensed under the GPLv2 or later. See [http://www.gnu.org/licenses/gpl-2.0.html](http://www.gnu.org/licenses/gpl-2.0.html).