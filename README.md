# Brain Reaper’s Bounty

![Plugin Version](https://img.shields.io/badge/version-1.2-blue.svg) ![WordPress](https://img.shields.io/badge/WordPress-6.0%2B-blue.svg) ![PHP](https://img.shields.io/badge/PHP-8.0%2B-blue.svg) ![License](https://img.shields.io/badge/license-GPLv2-green.svg)

A thrilling zombie-shooting game plugin for WordPress! Hunt undead horrors with a click and rack up points in a post-apocalyptic wasteland.

---

## Overview

**Brain Reaper’s Bounty** transforms your WordPress site into a zombie-infested battlefield. As a bounty hunter hired by a shadowy council, your mission is to blast through pixelated undead—relentless "Jiangshi" from Chinese folklore, eerie Norse "Draugar," and classic shamblers. Use your cursor as a crosshair to pop their heads, earn points, and advance through increasingly tough levels. Add the shortcode `[shoot-the-zombie]` to any page and start the apocalypse!

Forked from Axel Jacobs’ "Shoot the Zombie" (2014), this version by WPProAtoZ.com adds levels, a score tracker HUD, multiple zombie types, and pixel-perfect hit detection with canvas technology. It’s lightweight, fun, and perfect for engaging visitors or adding a quirky twist to your site.

For more information, visit: [https://wpproatoz.com/wp-pro-a-to-z-plugins-available/](https://wpproatoz.com/wp-pro-a-to-z-plugins-available/)

### Key Features

- **Interactive Gameplay**: Click to shoot zombies with red splatter bursts for hits, black for misses.
- **Levels**: Advance every 5 kills; zombies speed up each level.
- **Score Tracker HUD**: Displays score, kills, shots, accuracy, and level on-screen.
- **Multiple Zombies**: Features Standard Zombies, Jiangshi, and Draugar with unique images.
- **Pixel-Perfect Hits**: Canvas-based detection ensures only headshots count.
- **Shortcode Activation**: Use `[shoot-the-zombie]` to embed the game anywhere.
- **Elementor Compatible**: Works seamlessly with Elementor’s shortcode widget.

## Installation

1. Download the plugin ZIP from the [releases page](https://github.com/Ahkonsu/wpproatoz-shoot-the-zombie/releases).
2. Upload it via **Plugins > Add New > Upload Plugin** in your WordPress admin.
3. Activate the plugin through the **Plugins** menu.
4. Add `[shoot-the-zombie]` to any page or post (e.g., via Elementor).

## Usage

1. Insert `[shoot-the-zombie]` into your page (e.g., Elementor shortcode widget).
2. Load the page and click "Hunt the Zombies!":
   - Aim at zombie heads for kills (red splatter burst).
   - Misses show black splatters.
   - Track progress in the HUD (150px from top).
3. Kill 5 zombies to level up; speed increases each level.
4. Restart if a zombie escapes via the "Restart" button.

## Screenshots

1. **Game in Action** - Zombies swarm with splatters and HUD visible.  
   ![screenshot1](screenshot1.png)
2. **Level Up** - The "Level Reached" message with continue button.  
   ![screenshot2](screenshot2.png)

*(Note: Add `screenshot1.png` and `screenshot2.png` to your repo for these to display.)*

## Frequently Asked Questions

**How do I start the game?**  
Add `[shoot-the-zombie]` to a page and click the "Hunt the Zombies!" button.

**What’s the goal?**  
Kill zombies by clicking their heads to earn points and advance levels. Don’t let them escape!

**Why does it only load on pages with the shortcode?**  
It checks for the `#shootthezombie` button in the DOM to run only where intended.

**Can I add more zombies?**  
Yes! Add PNGs to `images/` and update `zombie_images` in `shoot-the-zombie.php`.

**Does it work with page builders?**  
Yes, tested with Elementor’s shortcode widget and compatible with others.

## Changelog

### 1.2
- Added levels (5 kills to advance, faster zombies each level).
- Introduced on-screen score tracker HUD (score, kills, shots, accuracy, level).
- Enhanced visuals with bursting red splatters for hits, black for misses.
- Switched to canvas-based pixel detection for precise hits.
- Fixed shortcode to `[shoot-the-zombie]` (previously misidentified as `[brain_reapers_bounty]`).
- Improved Elementor compatibility with client-side button detection.
- Updated to version 1.2 with xAI’s Grok assistance.

### 1.1
- Forked from "Shoot the Zombie" by Axel Jacobs (2014).
- Added multiple zombie types (Standard, Jiangshi, Draugar).
- Initial enhancements with splatters and basic scoring.

### 1.0 (Original by Axel Jacobs)
- Basic zombie-shooting game with a single zombie type.

## Upgrade Notice

### 1.2
Major update! Enjoy levels, a score HUD, and precise hit detection. Ensure your shortcode is `[shoot-the-zombie]`—update if you used `[brain_reapers_bounty]` by mistake.

## License

This plugin is licensed under the [GPLv2 or later](https://www.gnu.org/licenses/gpl-2.0.html). You are free to use, modify, and distribute it under the license terms.

## Contributing

Contributions are welcome! Fork the repo, submit issues, or create pull requests on [GitHub](https://github.com/Ahkonsu/wpproatoz-shoot-the-zombie).

## Credits

Developed with assistance from xAI’s Grok for debugging, feature development, and optimization.