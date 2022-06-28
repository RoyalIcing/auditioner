import * as React from 'react';
import {
  Provider,
  defaultTheme,
  ActionButton,
  Item,
  Menu,
  MenuTrigger,
} from '@adobe/react-spectrum';

export function MenuSpectrum({
  dispatch,
}: {
  dispatch: (action: { type: 'select'; id: 'cut' | 'copy' | 'paste' }) => void;
}) {
  return (
    <Provider theme={defaultTheme}>
      <MenuTrigger>
        <ActionButton>Edit</ActionButton>
        <Menu
          onAction={key =>
            dispatch({ type: 'select', id: key as 'cut' | 'copy' | 'paste' })
          }
        >
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
    </Provider>
  );
}
