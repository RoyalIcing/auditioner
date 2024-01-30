import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ListboxSpectrum } from './listbox-spectrum';
import { screenTest } from '../screen';
import { Listbox } from './listbox';
import { ListboxHeadlessUI } from './listbox-headlessui';
import { Button } from './button';

describe('Listbox', () => {
  describe.each([
    ['<ListboxSpectrum>', <ListboxSpectrum />],
    ['<ListboxHeadlessUI>', <ListboxHeadlessUI />],
  ])('%s', (_displayName, el) => {
    beforeEach(() => {
      render(el);
    });

    it('renders button', () => {
      expect(screenTest(Button(/\bChoose\b/))).toBeVisible();
    });

    describe('when opening', () => {
      // screenTest.click(Button(/^Choose/))
      // screenTest.user.clicks(Button(/^Choose/))
      // screenTest._clicks_(Button(/^Choose/))
      beforeEach(() => user.click(screenTest(Button(/\bChoose\b/))));

      it('renders labelled listbox', () => {
        expect(screenTest(Listbox('Choose'))).toBeVisible();
      });

      it('renders 1 listbox', () => {
        expect(screenTest(Listbox.all)).toHaveLength(1);
      });

      it.skip('has 3 options', async () => {
        // const el = screenTest(Listbox());
        await waitFor(() => {
          expect(screenTest(Listbox.Option().all)).toHaveLength(3);
        });
      });
    });
  });
});
