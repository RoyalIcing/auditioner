import * as React from 'react';
import { menu, menuitem } from './menu';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MenuSpectrum } from './menu-spectrum';
import { MenuHeadlessUI } from './menu-headlessui';
import { screenTest } from '../screen';

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
      beforeEach(() => {
        user.click(screen.getByRole('button', { name: 'Edit' }));
      });

      it('renders menu', () => {
        expect(screenTest(menu())).toBeInTheDocument();
      });

      it('renders 3 menuitems', () => {
        expect(screenTest(menuitem().all)).toHaveLength(3);
      });

      it('renders 3 menuitems: Cut, Copy, Paste', () => {
        const [first, second, third] = screenTest(menuitem().all);
        expect(first).toHaveTextContent('Cut');
        expect(second).toHaveTextContent('Copy');
        expect(third).toHaveTextContent('Paste');
      });

      describe('when clicking on Cut item', () => {
        beforeEach(() => {
          user.click(screenTest(menuitem('Cut')));
        });

        it('calls select with cut', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'cut' });
        });
      });

      describe('when clicking on Copy item', () => {
        beforeEach(() => {
          user.click(screenTest(menuitem('Copy')));
        });

        it('calls select with copy', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'copy' });
        });
      });

      describe('when clicking on Paste item', () => {
        beforeEach(() => {
          user.click(screenTest(menuitem('Paste')));
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
