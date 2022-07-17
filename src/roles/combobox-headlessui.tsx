import * as React from 'react';
import { Combobox } from '@headlessui/react';

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
];

export function ComboboxHeadlessUI({}: // dispatch,
{
  // dispatch: (action: {}) => void;
}) {
  const [selectedPerson, setSelectedPerson] = React.useState(people[0]);
  const [query, setQuery] = React.useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Label>Person</Combobox.Label>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person} value={person}>
            {person}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
