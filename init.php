<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define ( 'YM_MEETING_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define ( 'YM_MEETING_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

add_action( 'admin_enqueue_scripts', 'load_scripts' );
function load_scripts() {
    wp_enqueue_script( 'wp-react-kickoff', YM_MEETING_URL . 'build/index.js', [ 'jquery', 'wp-element' ], wp_rand(), true );
    wp_localize_script( 'wp-react-kickoff', 'appLocalizer', [
        'apiUrl' => home_url( '/wp-json' ),
        'nonce' => wp_create_nonce( 'wp_rest' ),
    ] );
}

require_once YM_MEETING_PATH . 'classes/class-create-admin-menu.php';