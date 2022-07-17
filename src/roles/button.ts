import { role } from './shared';

export const Button = Object.assign(
  function button(name?: string | RegExp) {
    return role<{ click: true }>('button', name);
  },
  {
    get all() {
      return role('button').all;
    },
  }
);
