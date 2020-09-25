import * as React from 'react';
import { auditionMenu } from './menu';
import { lazy, freshFn } from 'jest-zest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MenuSpectrum } from './menu-spectrum';

describe('reach tabs', () => {
  const dispatch = freshFn();
  beforeEach(() => {
    render(<MenuSpectrum dispatch={dispatch} />);
  });
  const { getMenu, getAllMenuItems, getMenuItem } = lazy(() => auditionMenu(screen));

  describe('when opening Edit menu', () => {
    beforeEach(() => {
      user.click(screen.getByRole('button', { name: 'Edit' }));
    });

    it('renders menu', () => {
      expect(getMenu()).toBeInTheDocument();
    });

    it('renders 3 menuitems', () => {
      expect(getAllMenuItems()).toHaveLength(3);
    });

    describe('when clicking on Copy item', () => {
      beforeEach(() => {
        user.click(getMenuItem('Copy'));
      });

      it('calls select', () => {
        expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'copy' });
      });
    });

    describe('when clicking on Cut item', () => {
      beforeEach(() => {
        user.click(getMenuItem('Cut'));
      });

      it('calls select', () => {
        expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'cut' });
      });
    });
  });
});
