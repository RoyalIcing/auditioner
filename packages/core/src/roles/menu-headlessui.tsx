import * as React from 'react';
import { Menu } from '@headlessui/react';

export function MenuHeadlessUI({
  dispatch,
}: {
  dispatch: (action: { type: 'select'; id: 'cut' | 'copy' | 'paste' }) => void;
}) {
  return (
    <Menu>
      <Menu.Button>
        Edit <span aria-hidden>▾</span>
      </Menu.Button>
      <Menu.Items>
        <Menu.Item
          as="button"
          onClick={() => dispatch({ type: 'select', id: 'cut' })}
        >
          Cut
        </Menu.Item>
        <Menu.Item
          as="button"
          onClick={() => dispatch({ type: 'select', id: 'copy' })}
        >
          Copy
        </Menu.Item>
        <Menu.Item
          as="button"
          onClick={() => dispatch({ type: 'select', id: 'paste' })}
        >
          Paste
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
