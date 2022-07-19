import * as React from 'react';
import { Provider, defaultTheme, Calendar } from '@adobe/react-spectrum';
import { parseDate } from '@internationalized/date';

export function CalendarSpectrum({
  dispatch,
}: {
  dispatch: (action: { type: 'changeValue'; value: string }) => void;
}) {
  return (
    <Provider theme={defaultTheme}>
      <Calendar
        aria-label="Audition Date"
        defaultValue={parseDate('2020-02-03')}
        onChange={(dateValue) =>
          dispatch({ type: 'changeValue', value: dateValue.toString() })
        }
      />
    </Provider>
  );
}
