// https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html
import { screen } from '@testing-library/dom';
// import { followControlled, assertDefined, assertHasRole } from './shared';

export function menu(name?: string | RegExp) {
  return Object.freeze({
    role: 'menu',
    name,
    get all() {
      return Object.create(this, { all: { value: true } });
    },
  });
}

export function menuitem(name?: string | RegExp) {
  return Object.freeze({
    role: 'menuitem',
    name,
    get all() {
      return Object.create(this, { all: { value: true } });
    },
  });
}

export function auditionMenu(queries: typeof screen) {
  return {
    getMenu(name?: string) {
      return queries.getByRole('menu', { name });
    },
    getAllMenuItems() {
      return queries.getAllByRole('menuitem');
    },
    getMenuItem(name?: string) {
      return queries.getByRole('menuitem', { name });
    },
    getSelectedMenuItem(name?: string) {
      return queries.getByRole('menuitem', { selected: true, name });
    },
  };
}
