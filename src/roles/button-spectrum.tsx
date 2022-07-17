import * as React from 'react';
import { Provider, defaultTheme, Button } from '@adobe/react-spectrum';

export function ButtonSpectrum({
  dispatch,
}: {
  dispatch: (action: { type: 'click' }) => void;
}) {
  return (
    <Provider theme={defaultTheme}>
      <Button variant="primary" onPress={() => dispatch({ type: 'click' })}>
        Button Title
      </Button>
    </Provider>
  );
}
