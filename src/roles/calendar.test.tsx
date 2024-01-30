import * as React from 'react';
import { Calendar } from './calendar';
import { prettyDOM, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CalendarSpectrum } from './calendar-spectrum';
import { screenTest } from '../screen';

function freshFn() {
  const fn = jest.fn();
  afterEach(() => fn.mockClear());
  return fn;
}

describe('Calendar', () => {
  describe.each([['<CalendarSpectrum>', CalendarSpectrum]])(
    '%s',
    (_displayName, CalendarComponent) => {
      const dispatch = freshFn();
      beforeEach(() => {
        render(<CalendarComponent dispatch={dispatch} />);
      });

      it('has previous button', () => {
        expect(screenTest(Calendar.PreviousButton())).toBeVisible();
      });

      it('can click previous button', async () => {
        await screenTest.wait(Calendar.PreviousButton().click);
        expect(
          await screenTest.wait(Calendar.Grid('Audition Date, January 2020'))
        ).toBeVisible();
      });

      it('has next button', () => {
        // Spectrum has two Next button, one for the next month, one for tabbing.
        expect(screenTest(Calendar.NextButton().all)[0]).toBeVisible();
      });

      it('has grid', () => {
        expect(screenTest(Calendar.Grid())).toBeVisible();
      });

      it('has named grid', () => {
        expect(
          screenTest(Calendar.Grid('Audition Date, February 2020'))
        ).toBeVisible();
      });

      it('has week rows', () => {
        expect(screenTest(Calendar.WeekRow().all)).toHaveLength(5);
      });

      it('has day gridcells', () => {
        expect(screenTest(Calendar.DayGridCell().all)).toHaveLength(5 * 7);
      });

      it('has selected day gridcell', () => {
        const selectedDay = screenTest(Calendar.DayGridCell().selected);
        expect(
          screenTest(Calendar.DayButton(/February 3, 2020/), selectedDay)
        ).toBeVisible();
      });

      describe.skip('when particular day is clicked', () => {
        beforeEach(async () => {
          console.log(prettyDOM(screenTest(Calendar.Grid())));
          await screenTest.wait(Calendar.DayButton('20 February 2020').click);
        });

        it('dispatches', () => {
          expect(dispatch).toHaveBeenCalledTimes(1);
        });
      });

      describe('keyboard navigation', () => {
        beforeEach(async () => {
          await user.tab(); // Previous
          await user.tab(); // Next
          await user.tab(); // Cells in Grid
        });

        it('focuses on selected day', () => {
          const selectedDay = screenTest(Calendar.DayGridCell().selected);
          expect(screenTest(Calendar.DayButton(), selectedDay)).toHaveFocus();
        });

        it('can go left', async () => {
          await user.keyboard('{ArrowLeft}');
          expect(
            screenTest(Calendar.DayButton(/February 2, 2020/))
          ).toHaveFocus();
        });

        it('can go right', async () => {
          await user.keyboard('{ArrowRight}');
          expect(
            screenTest(Calendar.DayButton(/February 4, 2020/))
          ).toHaveFocus();
        });

        it('can select left with Enter key', async () => {
          await user.keyboard('{ArrowLeft}{Enter}');
          const selectedDay = screenTest(Calendar.DayGridCell().selected);
          expect(
            screenTest(Calendar.DayButton(/February 2, 2020/), selectedDay)
          ).toHaveFocus();
        });

        it('can select right with Enter key', async () => {
          await user.keyboard('{ArrowRight}{Enter}');
          expect(
            screenTest(Calendar.DayButton(/February 4, 2020/))
          ).toHaveFocus();
        });

        it('focuses next week after pressing right arrow 7 times', async () => {
          await user.keyboard(new Array(7).fill('{ArrowRight}').join(''));
          expect(
            screenTest(Calendar.DayButton(/February 10, 2020/))
          ).toHaveFocus();
        });
      });
    }
  );
});
