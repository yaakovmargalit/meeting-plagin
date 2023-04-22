<?php
if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

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

new Create_front_app();
