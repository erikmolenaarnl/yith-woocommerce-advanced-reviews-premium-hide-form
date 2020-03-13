<?php
/**
 * Plugin Name: YITH WooCommerce Advanced Reviews Premium - Hide Form
 * Description: This plugin adds JS to hide the comment form until user selects a rating
 * Version:     1.0
 * Author:      Francisco (YITH Support Team)
 * Author URI:  https://yithemes.com
 */


if ( ! defined ( 'ABSPATH' ) ) exit;

add_action ( 'wp_enqueue_scripts', 'yith_ywar_hide_form_enqueue_script', 99 );
function yith_ywar_hide_form_enqueue_script() {

	if ( function_exists ( 'yith_ywar_premium_init' ) ) {

		wp_register_script ( 'yith-ywar-hide-form', plugins_url ( '/js/yith_ywar_hide_form.js', __FILE__ ), array (
			'jquery',
			'jquery-ui-sortable'
		), '1.0.1', true );
	
		wp_enqueue_script ( 'yith-ywar-hide-form' );

	}

}
	   
