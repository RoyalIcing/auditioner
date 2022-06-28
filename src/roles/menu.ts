// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-2/menubar-2.html
// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html
import { AllDescriptor, RoleDescriptor } from './types';
// import { followControlled, assertDefined, assertHasRole } from './shared';

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
