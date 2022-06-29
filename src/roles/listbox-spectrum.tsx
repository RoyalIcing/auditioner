import * as React from 'react';
import {
  defaultTheme,
  Provider,
  Item,
  Picker,
  ListBox,
} from '@adobe/react-spectrum';

export function ListboxSpectrum() {
  const id = React.useId();

  return (
    <Provider theme={defaultTheme}>
      <Picker label="Choose">
        <Item>First</Item>
        <Item>Second</Item>
        <Item>Third</Item>
      </Picker>
    </Provider>
  );
}

export function ListboxSpectrumOld() {
  const id = React.useId();

  return (
    <Provider theme={defaultTheme}>
      <label id={id}>Choose</label>
      <ListBox aria-labelledby={id}>
        <Item>First</Item>
        <Item>Second</Item>
        <Item>Third</Item>
      </ListBox>
    </Provider>
  );
}
