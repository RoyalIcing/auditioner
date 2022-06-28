import * as React from 'react';
import {
  Provider,
  defaultTheme,
  TextField,
  TextArea,
} from '@adobe/react-spectrum';

export function TextboxSpectrum({
  dispatch,
}: {
  dispatch: (action: { type: 'first' | 'second' }) => void;
}) {
  return (
    <Provider theme={defaultTheme}>
      <TextField label="First" />
      <TextArea label="Second" />
      <TextField label="Third" />
    </Provider>
  );
}
