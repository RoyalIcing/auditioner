import * as React from 'react';
import { Checkbox } from './checkbox';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CheckboxSpectrum } from './checkbox-spectrum';
import { screenTest } from '../screen';

function freshFn() {
  const fn = jest.fn();
  afterEach(() => fn.mockClear());
  return fn;
}

describe('Checkbox', () => {
  describe.each([['<CheckboxSpectrum>', CheckboxSpectrum]])(
    '%s',
    (_displayName, CheckboxComponent) => {
      const dispatch = freshFn();
      beforeEach(() => {
        render(<CheckboxComponent dispatch={dispatch} />);
      });

      it('has First checkbox', () => {
        expect(screenTest(Checkbox('First'))).toBeVisible();
      });

      it('has 3 checkboxes', () => {
        expect(screenTest(Checkbox.all)).toHaveLength(3);
      });

      describe('when First checkbox is clicked', () => {
        beforeEach(async () => {
          await user.click(screenTest(Checkbox('First')));
        });

        it('calls dispatch with first', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'first' });
        });
      });

      describe('when Second checkbox is clicked', () => {
        beforeEach(async () => {
          await user.click(screenTest(Checkbox('Second')));
        });

        it('calls dispatch with second', () => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'second' });
        });
      });

      it('supports disabled', () => {
        expect(screenTest(Checkbox('Some disabled checkbox'))).toBeDisabled();
      });
    }
  );
});
