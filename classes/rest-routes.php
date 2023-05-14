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

        register_rest_route(
            'ym-meeting/v1',
            '/settings/availability',
            [
                'methods' => 'POST',
                'callback' => [$this, 'add_availability'],
                'permission_callback' => [$this, 'get_settings_permission']
            ]
        );
        register_rest_route(
            'ym-meeting/v1',
            '/settings/availability',
            [
                'methods' => 'DELETE',
                'callback' => [$this, 'delete_availability'],
                'permission_callback' => [$this, 'get_settings_permission']
            ]
        );
        register_rest_route(
            'ym-meeting/v1',
            '/app/availabDays',
            [
                'methods' => 'GET',
                'callback' => [$this, 'get_availab_days'],
                'permission_callback' => [$this, 'pront_permission']
            ]
        );
    }


    public function get_settings()
    {
        global $wpdb;
        $availabilitys = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}ym_meeting_availability", OBJECT);
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
    public function pront_permission()
    {
        // return current_user_can('publish_posts');
        return true;
    }


    public function add_availability($req)
    {
        global $wpdb;
        $tablename = $wpdb->prefix . "ym_meeting_availability";

        if ($wpdb->get_var("SHOW TABLES LIKE '$tablename'") != $tablename) {
            return new WP_Error('rest_error', esc_html__('טבלה לא קיימת, יש להפעיל מחדש את הפלאגין.', 'my-text-domain'), array('status' => 500));
        }

        $wpdb->insert(
            $tablename,
            [
                'startTime' => $req['startTime'],
                'endTime' => $req['endTime'],
                'meetingLength' => $req['meetingLength'],
                'dayRef' => $req['dayRef'],
            ],
            [
                '%s',
                '%s',
                '%d',
                '%d',
            ]
        );
        return rest_ensure_response('success');
    }
    public function delete_availability($req)
    {
        global $wpdb;
        $tablename = $wpdb->prefix . "ym_meeting_availability";

        if ($wpdb->get_var("SHOW TABLES LIKE '$tablename'") != $tablename) {
            return new WP_Error('rest_error', esc_html__('טבלה לא קיימת, יש להפעיל מחדש את הפלאגין.', 'my-text-domain'), array('status' => 500));
        }

        $id = $req['id'];
        $wpdb->delete($tablename, array('id' => $id));


        return rest_ensure_response('success');
    }
    public function get_availab_days()
    {
        global $wpdb;
        $tablename = $wpdb->prefix . "ym_meeting_availability";

        if ($wpdb->get_var("SHOW TABLES LIKE '$tablename'") != $tablename) {
            return new WP_Error('rest_error', esc_html__('טבלה לא קיימת, יש להפעיל מחדש את הפלאגין.', 'my-text-domain'), array('status' => 500));
        }

        $aval= $wpdb->get_results("SELECT * FROM {$wpdb->prefix}ym_meeting_availability", OBJECT);

        $availaDays = array();

        foreach($aval as $object) {
            // בדיקה אם הערך של dayref קיים במערך צדדי
            if(!in_array($object->dayRef, $availaDays)) {
                // אם הערך לא קיים, הוספתו למערך צדדי
                $availaDays[] = $object->dayRef;
            }
        }
        $response = [
            'availaDays' => $availaDays
        ];

        return rest_ensure_response($response);
    }

}


new YmMeettingRestRoutes();