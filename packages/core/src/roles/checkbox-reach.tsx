import * as React from 'react';
import { MixedCheckbox } from '@reach/checkbox';

export function CheckboxReach({
  dispatch,
}: {
  dispatch: (action: { type: 'first' | 'second' }) => void;
}) {
  return (
    <>
      <label>
        <MixedCheckbox onChange={() => dispatch({ type: 'first' })} />
        First
      </label>
      <label>
        <MixedCheckbox onChange={() => dispatch({ type: 'second' })} />
        Second
      </label>
      <label>
        <MixedCheckbox disabled />
        Some disabled checkbox
      </label>
    </>
  );
}
