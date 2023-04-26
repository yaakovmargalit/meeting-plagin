<?php
/**
 * Plugin Name: קביעת תורים
 * Plugin URI: yaakovmargalit@gmail.com
 * Description: קביעת תורים מתוך האתר שלך
 * Author: @yaakovmargalit
 * Author URI: yaakovmargalit@gmail.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package GSBE
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Activate the plugin.
 */
function ym_meeting_activate() { 


  global $wpdb;

  $charset = $wpdb->get_charset_collate();
  $tablename = $wpdb->prefix . "ym_meeting_availability";
  require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
  dbDelta("CREATE TABLE $tablename (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    startTime time NOT NULL,
    endTime time NOT NULL,
    meetingLength int(10) NOT NULL,
    dayRef int(1) NOT NULL,
    PRIMARY KEY  (id)
  ) $charset;");

}
register_activation_hook( __FILE__, 'ym_meeting_activate' );


//class YmMeetting{
  //  function __construct(){
     //   global $wpdb;
     //   $this->charset = $wpdb->get_charset_collate();
     //   $this->tablename = $wpdb->prefix . "ym_meeting";


        // add_action('activate_ym-meeting/ym-meeting.php', array($this, 'onActivate'));

   // }

    
    // function onActivate() {
    //     require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    //     dbDelta("CREATE TABLE $this->tablename (
    //       id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    //       birthyear smallint(5) NOT NULL DEFAULT 0,
    //       petweight smallint(5) NOT NULL DEFAULT 0,
    //       favfood varchar(60) NOT NULL DEFAULT '',
    //       favhobby varchar(60) NOT NULL DEFAULT '',
    //       favcolor varchar(60) NOT NULL DEFAULT '',
    //       petname varchar(60) NOT NULL DEFAULT '',
    //       species varchar(60) NOT NULL DEFAULT '',
    //       PRIMARY KEY  (id)
    //     ) $this->charset;");
    //   }



//}
// new YmMeetting();
/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'init.php';