// https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html
import { screen } from '@testing-library/dom';
// import user from '@testing-library/user-event';
// import { followControlled, assertDefined, assertHasRole } from './shared';

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
