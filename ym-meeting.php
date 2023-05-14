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
  $availabilitytablename = $wpdb->prefix . "ym_meeting_availability";
  $meetingstablename = $wpdb->prefix . "ym_meeting_meetings";


  require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
  dbDelta("CREATE TABLE $availabilitytablename (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    startTime time NOT NULL,
    endTime time NOT NULL,
    meetingLength int(10) NOT NULL,
    dayRef int(1) NOT NULL,
    PRIMARY KEY  (id)
  ) $charset;");

  dbDelta("CREATE TABLE $meetingstablename (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    startTime DATETIME NOT NULL,
    endTime DATETIME NOT NULL,
    PRIMARY KEY  (id)
  ) $charset;");

}
register_activation_hook( __FILE__, 'ym_meeting_activate' );

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'init.php';