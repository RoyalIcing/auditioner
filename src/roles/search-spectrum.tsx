import * as React from 'react';
import { Provider, defaultTheme, SearchField } from '@adobe/react-spectrum';

export function SearchSpectrum({
  dispatch,
}: {
  dispatch: (action: { type: 'submit'; input: string }) => void;
}) {
  return (
    <Provider theme={defaultTheme}>
      <form role="search">
        <SearchField
          label="Search"
          onSubmit={(input) => dispatch({ type: 'submit', input })}
        />
      </form>
    </Provider>
  );
}
