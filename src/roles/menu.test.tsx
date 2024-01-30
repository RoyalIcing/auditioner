import * as React from 'react';
import { Menu } from './menu';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MenuSpectrum } from './menu-spectrum';
import { MenuHeadlessUI } from './menu-headlessui';
import { screenTest } from '../screen';
import { Button } from './button';

function freshFn() {
  const fn = jest.fn();
  afterEach(() => fn.mockClear());
  return fn;
}

describe('Menu', () => {
  describe.each([
    ['<MenuSpectrum>', MenuSpectrum],
    ['<MenuHeadlessUI>', MenuHeadlessUI],
  ])('%s', (_displayName, MenuComponent) => {
    const dispatch = freshFn();
    beforeEach(() => {
      render(<MenuComponent dispatch={dispatch} />);
    });

    describe('when opening Edit menu', () => {
      beforeEach(async () => {
        await user.click(screenTest(Button('Edit')));
      });

      it('renders menu', () => {
        expect(screenTest(Menu())).toBeVisible();
      });

      it('renders 3 menu items', () => {
        expect(screenTest(Menu.Item().all)).toHaveLength(3);
      });

      it('renders 3 menu items: Cut, Copy, Paste', () => {
        const [first, second, third] = screenTest(Menu.Item().all);
        expect(first).toHaveAccessibleName('Cut');
        expect(second).toHaveAccessibleName('Copy');
        expect(third).toHaveAccessibleName('Paste');
      });

      describe('when clicking on Cut item', () => {
        beforeEach(async () => {
          await user.click(screenTest(Menu.Item('Cut')));
        });

        it('calls select with cut', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'cut' });
        });
      });

      describe('when clicking on Copy item', () => {
        beforeEach(async () => {
          await user.click(screenTest(Menu.Item('Copy')));
        });

        it('calls select with copy', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'copy' });
        });
      });

      describe('when clicking on Paste item', () => {
        beforeEach(async () => {
          await user.click(screenTest(Menu.Item('Paste')));
        });

        it('calls select with paste', () => {
          expect(dispatch).toHaveBeenCalledWith({
            type: 'select',
            id: 'paste',
          });
        });
      });
    });
  });
});
