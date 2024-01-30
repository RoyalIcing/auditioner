import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screenTest } from '../screen';
import { ComboboxHeadlessUI } from './combobox-headlessui';
import { Combobox } from './combobox';
import { ComboboxSpectrum } from './combobox-spectrum';

describe('Combobox', () => {
  describe.each([['@headlessui/react', <ComboboxHeadlessUI />]])(
    '%s',
    (_displayName, el) => {
      beforeEach(() => {
        render(el);
      });

      it('renders combobox', () => {
        expect(screenTest(Combobox())).toBeVisible();
      });

      it('renders named combobox', () => {
        expect(screenTest(Combobox('Person'))).toBeVisible();
      });

      it('has selected person as value', () => {
        expect(screenTest(Combobox())).toHaveDisplayValue('Durward Reynolds');
      });

      describe('.Interactions', () => {
        test('tab', async () => {
          await Combobox.Interactions(user).tab();
          expect(screenTest(Combobox())).toHaveFocus();
        });

        test('tabThenDownArrow', async () => {
          await Combobox.Interactions(user).tabThenDownArrow();
          waitFor(() => {
            expect(screenTest(Combobox.PopupListbox())).toBeVisible();
          });
        });

        test('tabThenDownArrow + escape', async () => {
          await Combobox.Interactions(user).tabThenDownArrow();
          await Combobox.Interactions(user).escape();
          expect(screenTest(Combobox.PopupListbox.all)).toHaveLength(0);
        });
      });

      describe('when user tabs and presses the down arrow', () => {
        beforeEach(() => user.keyboard('{Tab}{Down}'));

        it('renders listbox', () => {
          expect(screenTest(Combobox.PopupListbox())).toBeVisible();
        });

        it('renders 1 listbox', () => {
          expect(screenTest(Combobox.PopupListbox.all)).toHaveLength(1);
        });

        it('has 5 options', async () => {
          await waitFor(() => {
            expect(screenTest(Combobox.PopupListbox.Option().all)).toHaveLength(
              5
            );
          });
        });

        // it('renders tree', () => {
        //   expect(
        //     screenTest(
        //       Combobox.listbox().options([
        //         Item(),
        //         Item(),
        //         Item(),
        //         Item(),
        //         Item(),
        //       ])
        //     )
        //   ).toHaveLength(1);
        // });
      });
    }
  );
});

describe('Combobox.Button', () => {
  describe.each([['@adobe/react-spectrum', <ComboboxSpectrum />]])(
    '%s',
    (_displayName, el) => {
      beforeEach(() => {
        render(el);
      });

      it('renders button', () => {
        expect(screenTest(Combobox.Button())).toBeVisible();
      });

      it('renders named button', () => {
        expect(
          screenTest(Combobox.Button('Person Durward Reynolds'))
        ).toBeVisible();
      });

      it('has selected person as name', () => {
        expect(screenTest(Combobox.Button())).toHaveAccessibleName(
          expect.stringContaining('Durward Reynolds')
        );
      });

      describe('.Interactions', () => {
        test('tab', async () => {
          await Combobox.Interactions(user).tab();
          expect(screenTest(Combobox.Button())).toHaveFocus();
        });

        test.skip('tabThenDownArrow', async () => {
          await Combobox.Interactions(user).tabThenDownArrow();
          await waitFor(() => {
            expect(screenTest(Combobox.PopupListbox())).toBeVisible();
          });
        });

        test('tabThenDownArrow + escape', async () => {
          await Combobox.Interactions(user).tabThenDownArrow();
          await Combobox.Interactions(user).escape();
          waitFor(() => {
            expect(screenTest(Combobox.PopupListbox.all)).toHaveLength(0);
          });
        });
      });

      describe.skip('when user tabs and presses the down arrow', () => {
        beforeEach(() => user.keyboard('{Tab}{Down}'));

        it('renders listbox', () => {
          expect(screenTest(Combobox.PopupListbox())).toBeVisible();
        });

        it('renders 1 listbox', () => {
          expect(screenTest(Combobox.PopupListbox.all)).toHaveLength(1);
        });

        it('has 5 options', async () => {
          await waitFor(() => {
            expect(screenTest(Combobox.PopupListbox.Option().all)).toHaveLength(
              5
            );
          });
        });
      });
    }
  );
});
