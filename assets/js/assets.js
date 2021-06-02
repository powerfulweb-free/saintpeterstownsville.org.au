// import './vendors.js';
// JS ASSETS
import {
  stickyCollapse,
  //topNav
} from './on-scroll/index';

stickyCollapse({
  distance: 50,
  // parentId: 'js-navParent',
  // collapseClass: 'is-collapsed',
});

// topNav({
// distance: 300,
// parentId: 'js-topNav',
// hiddenClass: 'is-hidden',
// });

// see index.scss for assets scss import

// const dropdown = document.getElementsByClassName('.dropdown');
// const dropdownToggle = document.getElementsByClassName('.dropdown-toggle');
// const dropdownMenu = document.getElementsByClassName('.dropdown-menu');
// const showClass = 'show';

// $(window).on('load resize', function () {
//   if (this.matchMedia('(min-width: 768px)').matches) {
//     dropdown.hover(
//       function () {
//         this.classList.add(showClass);
//         this.find(dropdownToggle).attr('aria-expanded', 'true');
//         this.find(dropdownMenu).addClass(showClass);
//       },
//       function () {
//         this.removeClass(showClass);
//         this.find($dropdownToggle).attr('aria-expanded', 'false');
//         this.find($dropdownMenu).removeClass(showClass);
//       }
//     );
//   } else {
//     dropdown.off('mouseenter mouseleave');
//   }
// });
