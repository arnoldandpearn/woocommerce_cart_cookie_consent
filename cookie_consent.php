<?php
/*
Plugin Name: Woocommerce Cookie Cart Consent
Plugin URI: http://arnoldandpearn.com
Description: Prompts user to accept cookie before adding to cart.
Version: 1.0
Author: Matt Goodall
Author URI: http://arnoldandpearn.com
License: GPLv2
*/

function cookie_consent_script() {
    wp_enqueue_script( 'cookie_cart_alert', plugin_dir_url( __FILE__ ) . '/cookie_cart_alert.js', array( 'jquery' ), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'cookie_consent_script' );