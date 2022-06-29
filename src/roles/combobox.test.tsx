import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screenTest } from '../screen';
import { ComboboxHeadlessUI } from './combobox-headlessui';
import { Combobox } from './combobox';

describe('Combobox', () => {
  describe.each([
    // ['<ListboxSpectrum>', <ComboboxSpectrum />],
    ['<ListboxHeadlessUI>', <ComboboxHeadlessUI />],
  ])('%s', (_displayName, el) => {
    beforeEach(() => {
      render(el);
    });

    it('renders combobox', () => {
      expect(screenTest(Combobox())).toBeVisible();
    });

    it('has display value', () => {
      expect(screenTest(Combobox())).toHaveDisplayValue('Durward Reynolds');
    });

    describe('when user tabs and presses the down arrow', () => {
      beforeEach(() => user.keyboard('{Tab}{Down}'));

      it('renders listbox', () => {
        expect(screenTest(Combobox.listbox())).toBeVisible();
      });

      it('renders 1 listbox', () => {
        expect(screenTest(Combobox.listbox.all)).toHaveLength(1);
      });

      it('has 5 options', async () => {
        await waitFor(() => {
          expect(screenTest(Combobox.listbox.option().all)).toHaveLength(5);
        });
      });
    });
  });
});
