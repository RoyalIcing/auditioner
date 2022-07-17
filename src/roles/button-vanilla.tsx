import * as React from 'react';

export function ButtonVanilla({
  dispatch,
}: {
  dispatch: (action: { type: 'click' }) => void;
}) {
  return (
    <button onClick={() => dispatch({ type: 'click' })}>Button Title</button>
  );
}
