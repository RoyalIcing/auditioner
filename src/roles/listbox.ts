// https://w3c.github.io/aria-practices/#Listbox
// https://w3c.github.io/aria-practices/examples/listbox/listbox-rearrangeable.html

import { role, roleSelectable } from './shared';

function listbox(name?: string | RegExp) {
  return role('listbox', name);
}

export const Listbox = Object.assign(listbox, {
  get all() {
    return role('listbox').all;
  },
  option(name?: string | RegExp) {
    return roleSelectable('option', name);
  },
});
