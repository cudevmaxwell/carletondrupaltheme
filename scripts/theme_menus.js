(function ($) {
  var windowObj = $(window);
  var flagMobile = true;
  var flagDesktop = true;
  var menuLink = '#block-system-main-menu > div > ul > li > a';
  var menuListItem = '#block-system-main-menu > div > ul > li';

  Drupal.behaviors.themeMenus = {
    attach: function (context, settings) {

      // Menu button
      $('#menu-link').click(function(e) {
        e.preventDefault();
        $('#block-system-main-menu').slideToggle(150, 'swing').toggleClass('menu-open');
      });

      initMenu();
      windowObj.resize(function() {
        initMenu();
      });

      /**
       * Initialize menu based on layout
       */
      function initMenu() {
        if ( $('#menu-link').css('display') == 'none' ) { // Dropdown
          if (flagDesktop) { menuDropdown(); }
          flagDesktop = false;
        } else { // Accordian
          if (flagMobile) { menuAccordian(); }
          flagMobile = false;
        }
      }

      /**
       * Accordian menu (mobile)
       */
      function menuAccordian() {
        //console.log('menuAccordian()');
        flagDesktop = true;

        // Cleanup
        clearHandlers();

        $(menuLink).click(function(e) {
          if ($(this).parent().hasClass('expanded')) {
            if (!$(this).hasClass('active')) {              
              e.preventDefault(); // Cancel default action and open menu
              $('#block-system-main-menu li ul').slideUp(150, 'swing'); // Close all
              $('#block-system-main-menu a.active-trail').addClass('not-active'); // Temporary class to remove style on active menu item
              
              if (!$(this).next().is(":visible")) {
                $(this).next().slideDown(150, 'swing');
                $(this).removeClass('not-active');
              }

              $('#block-system-main-menu li a').removeClass('active');
              $(this).addClass('active');
            }
          }
        });
      }

      /**
       * Drop down menu (desktop)
       */
      function menuDropdown() {
        //console.log('menuDropdown()');
        flagMobile = true;

        // Cleanup
        clearHandlers();
        $('#block-system-main-menu').css('display', ''); // Close mobile menu if open
        $('#block-system-main-menu ul').css('display', ''); // Close sub menus if open

        $(menuListItem).hoverIntent({
          over: openMenu,
          out: closeMenu
        });

        if ( isTouchEnabled() ) { // Drop downs on touch (first tap - open drop down, second tap - follow link)
          $(menuListItem).click(function(e) {
            if ( $(this).hasClass('expanded') ) { // Menu item has a dropdown
              if ( !$(this).hasClass('hover') ) {
                e.preventDefault(); // Cancel default action so menu can open
                $(this).addClass('hover');
              }
            }
          });
        }
      }

      /**
       * Open drop down menu
       */
      function openMenu() {
        if ( $(this).hasClass('expanded') ) { // Menu item has a dropdown
          $(this).addClass('hover');
          $('ul:first',this).fadeIn(100);
        }
      }

      /**
       * Close drop down menu
       */
      function closeMenu() {
        $(this).removeClass('hover');
        $('ul:first',this).css('display', '');
      }

      /**
       * Remove handlers when the menu style is toggled
       */
      function clearHandlers() {             
        $(menuLink).unbind();
        $(menuListItem).unbind();
      }

      /**
       * Check for touch, based on Modernizer method
       */
      function isTouchEnabled() { // github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
        var bool;
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        }
        return bool;
      }

    }
  };
})(jQuery);
