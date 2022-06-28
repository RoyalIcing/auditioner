import { role } from './shared';

export const Checkbox = Object.assign(
  function button(name?: string | RegExp) {
    return role('checkbox', name);
  },
  {
    get all() {
      return role('checkbox').all;
    },
  }
);
