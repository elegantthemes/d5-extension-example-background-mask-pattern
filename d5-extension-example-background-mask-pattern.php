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

use ET\Builder\Framework\Utility\Filesystem;

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

if ( ! function_exists( 'd5_extension_example_background_mask_pattern_add_masks' ) ) :
/**
 * Add custom background masks.
 *
 * Collects all the masks from the plugin and adds them to the existing masks
 * using the `et_mask_style_list` filter.
 *
 * @since ??
 *
 * @param array $masks The existing masks.
 *
 * @throws Exception Throw error when the mask json file does not exist.
 *
 * @return array The existing masks combined with the custom masks.
 */
	/**
	 * @throws Exception
	 */
	function d5_extension_example_background_mask_pattern_add_masks( $masks ) {
	$filesystem = Filesystem::get();

	// Define the path to our additional mask SVG files.
	$base_dir = plugin_dir_path( __FILE__ ) . 'src/components/mask-svg/components/';

	// Define the masks we want to add.
	$map = [ 'mask-example-1', 'mask-example-2' ];

	// Initialize the custom masks array.
	$custom_mask_style_list = [];

	foreach ( $map as $json ) {
		$json_file = "{$base_dir}/$json.json";

		if ( ! file_exists( $json_file ) ) {
			throw new Exception( 'File does not exist: ' . $json_file, 1 );
		}

		$json_data = json_decode( $filesystem->get_contents( $json_file ), true );

		$custom_mask_style_list[ $json ] = $json_data;
	}

	return array_merge( $masks, $custom_mask_style_list );
}
add_filter( 'divi_mask_and_pattern_library_mask', 'd5_extension_example_background_mask_pattern_add_masks' );
endif;

if ( ! function_exists( 'd5_extension_example_background_mask_pattern_add_patterns' ) ) :
/**
 * Add custom background patterns.
 *
 * Collects all the patterns from the plugin and adds them to the existing
 * patterns using the `et_pattern_style_list` filter.
 *
 * @since ??
 *
 * @param array $patterns The existing patterns.
 *
 * @throws Exception Throw error when the mask json file does not exist.
 *
 * @return array The existing patterns combined with the custom patterns.
 */
	/**
	 * @throws Exception
	 */
	function d5_extension_example_background_mask_pattern_add_patterns( $patterns ) {
	$filesystem = Filesystem::get();

	// Define the path to our additional mask SVG files.
	$base_dir = plugin_dir_path( __FILE__ ) . 'src/components/pattern-svg/components/';

	// Define the masks we want to add.
	$map = [ 'pattern-example-1', 'pattern-example-2' ];

	// Initialize the custom masks array.
	$custom_pattern_style_list = [];

	foreach ( $map as $json ) {
		$json_file = "{$base_dir}/$json.json";

		if ( ! file_exists( $json_file ) ) {
			throw new Exception( 'File does not exist: ' . $json_file, 1 );
		}

		$json_data = json_decode( $filesystem->get_contents( $json_file ), true );

		$custom_pattern_style_list[ $json ] = $json_data;
	}

	return array_merge( $patterns, $custom_pattern_style_list );
}
add_filter( 'divi_mask_and_pattern_library_pattern', 'd5_extension_example_background_mask_pattern_add_patterns' );
endif;
