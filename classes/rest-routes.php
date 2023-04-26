<?php

class YmMeettingRestRoutes
{


    public function __construct()
    {
        add_action('rest_api_init', array($this, 'ym_meeting_rest_service'));
    }

    function ym_meeting_rest_service()
    {
        register_rest_route(
            'ym-meeting/v1',
            '/settings',
            [
                'methods' => 'GET',
                'callback' => [$this, 'get_settings'],
                'permission_callback' => [$this, 'get_settings_permission']
            ]
        );
    }


    public function get_settings()
    {
        global $wpdb;
        $availabilitys = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}ym_meeting_availability", OBJECT );
        $response = [
            'availabilitys' => $availabilitys
        ];

        return rest_ensure_response($response);
    }

    public function get_settings_permission()
    {
        return current_user_can('publish_posts');
        // return true;
    }

}


new YmMeettingRestRoutes();