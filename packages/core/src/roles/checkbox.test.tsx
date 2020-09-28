import * as React from 'react';
import { auditionCheckboxes } from './checkbox';
import { lazy, freshFn } from 'jest-zest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CheckboxSpectrum } from './checkbox-spectrum';

describe('Checkbox', () => {
  describe.each([['<CheckboxSpectrum>', CheckboxSpectrum]])(
    '%s',
    (_displayName, CheckboxComponent) => {
      const dispatch = freshFn();
      beforeEach(() => {
        render(<CheckboxComponent dispatch={dispatch} />);
      });
      const { getCheckbox, getAllCheckboxes } = lazy(() =>
        auditionCheckboxes(screen)
      );

      it('has First checkbox', () => {
        expect(getCheckbox('First')).toBeInTheDocument();
      });

      it('has three checkboxes', () => {
        expect(getAllCheckboxes()).toHaveLength(3);
      });

      describe('when First checkbox is clicked', () => {
        beforeEach(() => {
          user.click(getCheckbox('First'));
        });

        it('calls dispatch with first', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'first' });
        });
      });

      describe('when Second checkbox is clicked', () => {
        beforeEach(() => {
          user.click(getCheckbox('Second'));
        });

        it('calls dispatch with second', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'second' });
        });
      });

      it('supports disabled', () => {
        expect(getCheckbox('Some disabled checkbox')).toBeDisabled();
      });
    }
  );
});
