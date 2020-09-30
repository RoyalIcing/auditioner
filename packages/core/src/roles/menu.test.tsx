import * as React from 'react';
import { auditionMenu, menu, menuitem } from './menu';
import { lazy, freshFn } from 'jest-zest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MenuSpectrum } from './menu-spectrum';
import { MenuReach } from './menu-reach';
import { screenTest } from '../screen';

describe('Menu', () => {
  describe.each([
    ['<MenuSpectrum>', MenuSpectrum],
    ['<MenuReach>', MenuReach],
  ])('%s', (_displayName, MenuComponent) => {
    const dispatch = freshFn();
    beforeEach(() => {
      render(<MenuComponent dispatch={dispatch} />);
    });
    const { getAllMenuItems, getMenuItem } = lazy(() => auditionMenu(screen));

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
        const [first, second, third] = getAllMenuItems();
        expect(first).toHaveTextContent('Cut');
        expect(second).toHaveTextContent('Copy');
        expect(third).toHaveTextContent('Paste');
      });

      describe('when clicking on Cut item', () => {
        beforeEach(() => {
          user.click(getMenuItem('Cut'));
        });

        it('calls select with cut', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'cut' });
        });
      });

      describe('when clicking on Copy item', () => {
        beforeEach(() => {
          user.click(getMenuItem('Copy'));
        });

        it('calls select with copy', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'copy' });
        });
      });

      describe('when clicking on Paste item', () => {
        beforeEach(() => {
          user.click(getMenuItem('Paste'));
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
