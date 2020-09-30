import * as React from 'react';
import { checkbox } from './checkbox';
import { freshFn } from 'jest-zest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CheckboxSpectrum } from './checkbox-spectrum';
import { CheckboxReach } from './checkbox-reach';
import { screenTest } from '../screen';

describe('Checkbox', () => {
  describe.each([
    ['<CheckboxSpectrum>', CheckboxSpectrum],
    ['<CheckboxReach>', CheckboxReach],
  ])('%s', (_displayName, CheckboxComponent) => {
    const dispatch = freshFn();
    beforeEach(() => {
      render(<CheckboxComponent dispatch={dispatch} />);
    });

    it('has First checkbox', () => {
      expect(screenTest(checkbox('First'))).toBeInTheDocument();
    });

    it('has 3 checkboxes', () => {
      expect(checkbox().getAll(screen)).toHaveLength(3);
    });

    describe('when First checkbox is clicked', () => {
      beforeEach(() => {
        user.click(screenTest(checkbox('First')));
      });

      it('calls dispatch with first', () => {
        expect(dispatch).toHaveBeenCalledWith({ type: 'first' });
      });
    });

    describe('when Second checkbox is clicked', () => {
      beforeEach(() => {
        user.click(screenTest(checkbox('Second')));
      });

      it('calls dispatch with second', () => {
        expect(dispatch).toHaveBeenCalledWith({ type: 'second' });
      });
    });

    it('supports disabled', () => {
      expect(screenTest(checkbox('Some disabled checkbox'))).toBeDisabled();
    });
  });
});
