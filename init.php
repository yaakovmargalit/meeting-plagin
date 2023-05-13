<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Create_front_app
{

    function __construct()
    {
        add_action('init', array($this, 'front_app_load'));
    }


    function front_app_load()
    {
        register_block_type(__DIR__,  array(
            'render_callback' => array($this, 'front_html')
          ));
    }

    function front_html($attributes)
    {
        ob_start(); ?>
            <div class="ym-meeting-front-app"></div>

    <?php return ob_get_clean();
    }
}



define ( 'YM_MEETING_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define ( 'YM_MEETING_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

add_action( 'admin_enqueue_scripts', 'load_scripts');



function load_scripts() {
    global $current_screen;
    wp_enqueue_script( 'wp-react-kickoff', YM_MEETING_URL . 'build/admin-page.js', [ 'jquery', 'wp-element' ], wp_rand(), true );
	wp_enqueue_style( 'ymMeetingAdminStyle', YM_MEETING_URL . 'build/admin-page.css' );
    wp_localize_script( 'wp-react-kickoff', 'appLocalizer', [
        'apiUrl' => home_url( '/wp-json' ),
        'nonce' => wp_create_nonce( 'wp_rest' ),
    ] );
}
new Create_front_app();
require_once YM_MEETING_PATH . 'classes/class-create-admin-menu.php';
require_once YM_MEETING_PATH . 'classes/rest-routes.php';