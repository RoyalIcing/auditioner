// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-2/menubar-2.html
// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html
import { role } from './shared';
import type { AllDescriptor, RoleDescriptor } from './types';

export const Menu = Object.assign(
  function menu(name?: string | RegExp) {
    return role('menu', name);
  },
  {
    get all() {
      return role('menu').all;
    },
    item(name?: string | RegExp) {
      return role('menuitem', name);
    },
  }
);

export function menu(name?: string | RegExp) {
  return Object.freeze({
    role: 'menu',
    name,
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { all: { value: true } });
    },
  });
}

export function menuitem(name?: string | RegExp) {
  return Object.freeze({
    role: 'menuitem',
    name,
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { all: { value: true } });
    },
  });
}
