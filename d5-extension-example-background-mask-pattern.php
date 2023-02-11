<?php
/*
Plugin Name: D5 Extension Example: Background Mask and Pattern
Plugin URI:  https://github.com/elegantthemes/d5-extension-example-background-mask-pattern
Description: Adds Custom Background Masks and Background Patterns
Version:     0.1.3
Author:      Elegant Themes
Author URI:  https://elegantthemes.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: d5-extension-example-background-mask-pattern
Domain Path: /languages

D5 Extension Example: Background Mask and Pattern is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

D5 Extension Example: Background Mask and Pattern is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with D5 Extension Example: Background Mask and Pattern. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

/**
 * Enqueue style and scripts.
 *
 * @since ??
 */
function d5_extension_example_background_mask_pattern_enqueue_scripts() {
	if ( function_exists( 'et_builder_d5_enabled' ) && et_builder_d5_enabled() && et_core_is_fb_enabled() ) {
		$plugin_dir_url = plugin_dir_url( __FILE__ );

		wp_enqueue_script(
			'd5-extension-example-background-mask-pattern-bundle-script',
			"{$plugin_dir_url}scripts/bundle.js",
			array( 'divi-mask-and-pattern-library' ),
			'0.1.3-alpha',
			true
		);
	}
}
add_action( 'et_vb_assets_after_enqueue_package_script', 'd5_extension_example_background_mask_pattern_enqueue_scripts' );

