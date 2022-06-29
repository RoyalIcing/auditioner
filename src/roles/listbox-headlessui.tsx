import * as React from 'react';
import { Listbox } from '@headlessui/react';

export function ListboxHeadlessUI() {
  const id = React.useId();
  const [selection, setSelection] = React.useState(null);

  return (
    <div>
      <label id={id}>Choose</label>
      <Listbox value={selection} onChange={setSelection}>
        <Listbox.Button>Choose</Listbox.Button>
        <Listbox.Options>
          <Listbox.Option value="first">First</Listbox.Option>
          <Listbox.Option value="second">Second</Listbox.Option>
          <Listbox.Option value="third">Third</Listbox.Option>
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
