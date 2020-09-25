import * as React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button';

export function MenuReach({
    dispatch,
  }: {
    dispatch: (action: { type: 'select'; id: 'cut' | 'copy' | 'paste' }) => void;
  }) {
    return (
      <Menu>
        <MenuButton>
          Edit <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList>
          <MenuItem onSelect={() => dispatch({ type: 'select', id: 'cut' })}>Cut</MenuItem>
          <MenuItem onSelect={() => dispatch({ type: 'select', id: 'copy' })}>Copy</MenuItem>
          <MenuItem onSelect={() => dispatch({ type: 'select', id: 'paste' })}>Paste</MenuItem>
        </MenuList>
      </Menu>
    );
  }