import * as React from 'react';

export function SearchVanilla({
  dispatch,
}: {
  dispatch: (action: { type: 'submit'; input: string }) => void;
}) {
  const id = React.useId();

  return (
    <form
      role="search"
      onSubmit={(event) => {
        const data = new FormData(event.currentTarget);
        const query = data.get('query');
        dispatch({
          type: 'submit',
          input: typeof query === 'string' ? query : '',
        });
      }}
    >
      <label htmlFor={id}>Search</label>
      <input name="query" id={id} type="search" />
    </form>
  );
}
