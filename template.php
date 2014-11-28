<?php

/**
 * @file
 * Process theme data.
 *
 * Use this file to run your theme specific implimentations of theme functions,
 * such preprocess, process, alters, and theme function overrides.
 *
 * Preprocess and process functions are used to modify or create variables for
 * templates and theme functions. They are a common theming tool in Drupal, often
 * used as an alternative to directly editing or adding code to templates. Its
 * worth spending some time to learn more about these functions - they are a
 * powerful way to easily modify the output of any template variable.
 *
 * Preprocess and Process Functions SEE: http://drupal.org/node/254940#variables-processor
 * 1. Rename each function and instance of "carletondrupaltheme" to match
 *    your subthemes name, e.g. if your theme name is "footheme" then the function
 *    name will be "footheme_preprocess_hook". Tip - you can search/replace
 *    on "carletondrupaltheme".
 * 2. Uncomment the required function to use.
 */


/**
 * Preprocess variables for the html template.
 */
/* -- Delete this line to enable.
function carletondrupaltheme_preprocess_html(&$vars) {
  global $theme_key;

  // Two examples of adding custom classes to the body.

  // Add a body class for the active theme name.
  // $vars['classes_array'][] = drupal_html_class($theme_key);

  // Browser/platform sniff - adds body classes such as ipad, webkit, chrome etc.
  // $vars['classes_array'][] = css_browser_selector();

}
// */


/**
 * Process variables for the html template.
 */
/* -- Delete this line if you want to use this function
function carletondrupaltheme_process_html(&$vars) {
}
// */


/**
 * Override or insert variables for the page templates.
 */

function carletondrupaltheme_preprocess_page(&$vars) {

    global $theme_key;
    $theme_name = $theme_key;
    // Set up logo element
    if (at_get_setting('toggle_logo', $theme_name) === 1) {
      $logo_path = file_create_url(drupal_get_path('theme', $theme_name) . '/logo.svg');
      $logo_alt = check_plain(variable_get('site_name', t('Site logo')));
      $logo_vars = array('path' => $logo_path, 'alt' => $logo_alt, 'attributes' => array('class' => 'site-logo'));
      $vars['logo_img'] = theme('image', $logo_vars);
      $vars['site_logo'] = $vars['logo_img'] ? l($vars['logo_img'], '<front>', array('attributes' => array('title' => t('Home page')), 'html' => TRUE)) : '';
    }
}

/* -- Delete this line if you want to use these functions
function carletondrupaltheme_process_page(&$vars) {
}
// */


/**
 * Override or insert variables into the node templates.
 */
/* -- Delete this line if you want to use these functions
function carletondrupaltheme_preprocess_node(&$vars) {
}
function carletondrupaltheme_process_node(&$vars) {
}
// */


/**
 * Override or insert variables into the comment templates.
 */
/* -- Delete this line if you want to use these functions
function carletondrupaltheme_preprocess_comment(&$vars) {
}
function carletondrupaltheme_process_comment(&$vars) {
}
// */


/**
 * Override or insert variables into the block templates.
 */
/* -- Delete this line if you want to use these functions
function carletondrupaltheme_preprocess_block(&$vars) {
}
function carletondrupaltheme_process_block(&$vars) {
}
// */
