// https://w3c.github.io/aria-practices/#Listbox
// https://w3c.github.io/aria-practices/examples/listbox/listbox-rearrangeable.html

import { Listbox } from './listbox';
import { role } from './shared';

function combobox(name?: string | RegExp) {
  return role('combobox', name);
}

export const Combobox = Object.assign(combobox, {
  get all() {
    return role('combobox').all;
  },
  get listbox() {
    return Listbox;
  },
});
