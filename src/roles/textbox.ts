import { role } from './shared';

export const Textbox = Object.assign(
  function textbox(name?: string | RegExp) {
    return role('textbox', name);
  },
  {
    get all() {
      return role('textbox').all;
    },
  }
);
