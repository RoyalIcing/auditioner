import * as React from 'react';
import { Provider, defaultTheme, Checkbox } from '@adobe/react-spectrum';

export function CheckboxSpectrum({
  dispatch,
}: {
  dispatch: (action: { type: 'first' | 'second' }) => void;
}) {
  return (
    <Provider theme={defaultTheme}>
      <Checkbox onChange={() => dispatch({ type: 'first' })}>First</Checkbox>
      <Checkbox onChange={() => dispatch({ type: 'second' })}>Second</Checkbox>
      <Checkbox isDisabled>Some disabled checkbox</Checkbox>
    </Provider>
  );
}
