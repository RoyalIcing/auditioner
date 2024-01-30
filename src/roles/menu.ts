// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-2/menubar-2.html
// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html
import { role } from './shared';

export const Menu = Object.assign(
  function menu(name?: string | RegExp) {
    return role('menu', name);
  },
  {
    get all() {
      return role('menu').all;
    },
    Item(name?: string | RegExp) {
      return role('menuitem', name);
    },
  }
);
