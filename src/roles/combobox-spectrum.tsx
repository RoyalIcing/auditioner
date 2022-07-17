import * as React from 'react';
import {
  Provider,
  defaultTheme,
  ComboBox,
  Picker,
  Item,
} from '@adobe/react-spectrum';

export function ComboboxSpectrum({}: {}) {
  return (
    <Provider theme={defaultTheme}>
      <ComboBox label="Person" selectedKey="1">
        <Item key="1">Durward Reynolds</Item>
        <Item key="2">Kenton Towne</Item>
        <Item key="3">Therese Wunsch</Item>
        <Item key="4">Benedict Kessler</Item>
        <Item key="5">Katelyn Rohan</Item>
      </ComboBox>
    </Provider>
  );
}
