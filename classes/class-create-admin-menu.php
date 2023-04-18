<?php
/**
 * This file will create admin menu page.
 */

class YM_MEETING_Create_Admin_Page {

    public function __construct() {
        add_action( 'admin_menu', [ $this, 'create_admin_menu' ] );
    }

    public function create_admin_menu() {
        $capability = 'manage_options';
        $slug = 'ym-meeting-settings';

        add_menu_page(
            __( 'קביעת תורים', 'wp-react-kickoff' ),
            __( 'קביעת תורים', 'wp-react-kickoff' ),
            $capability,
            $slug,
            [ $this, 'menu_page_template' ],
            'dashicons-calendar-alt'
        );
        add_submenu_page( $slug, 'קביעת תורים - הגדרות', 'הגדרות', $capability, 'ym-meeting-options', array($this,'optionsPage') );
    }

    public function menu_page_template() {
        echo '<div class="wrap"><div id="ym-meeting-admin-app"></div></div>';
    }

    public function optionsPage(){?>
        <div class="wrap"><div id="ym-meeting-admin-options"></div></div>
   <?php }

}
new YM_MEETING_Create_Admin_Page();