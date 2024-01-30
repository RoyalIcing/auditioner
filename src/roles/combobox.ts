// https://w3c.github.io/aria-practices/#Listbox
// https://w3c.github.io/aria-practices/examples/listbox/listbox-rearrangeable.html
// https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
// https://www.w3.org/WAI/ARIA/apg/example-index/combobox/grid-combo.html

import { Button } from './button';
import { Listbox } from './listbox';
import { role } from './shared';

function combobox(name?: string | RegExp) {
  return role('combobox', name);
}

export const Combobox = Object.assign(combobox, {
  get all() {
    return role('combobox').all;
  },
  get PopupListbox() {
    return Listbox;
  },
  get Button() {
    return Button;
  },
  // TODO: or Scripts()?
  Interactions(user: {
    tab(options?: { shift?: boolean }): Promise<unknown>;
    keyboard(text: string): Promise<unknown>;
  }) {
    return {
      async tab() {
        await user.tab();
      },
      async tabThenDownArrow() {
        await user.keyboard('{Tab}{Down}');
      },
      async escape() {
        await user.keyboard('{Escape}');
      },
    };
  },
});
