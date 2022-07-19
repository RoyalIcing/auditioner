import * as React from 'react';
import { Calendar } from './calendar';
import { prettyDOM, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CalendarSpectrum } from './Calendar-spectrum';
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
        expect(screenTest(Calendar.previousButton())).toBeVisible();
      });

      it('can click previous button', async () => {
        await screenTest.wait(Calendar.previousButton().click);
        expect(
          await screenTest.wait(Calendar.grid('Audition Date, January 2020'))
        ).toBeVisible();
      });

      it('has next button', () => {
        // Spectrum has two Next button, one for the next month, one for tabbing.
        expect(screenTest(Calendar.nextButton().all)[0]).toBeVisible();
      });

      it('has grid', () => {
        expect(screenTest(Calendar.grid())).toBeVisible();
      });

      it('has named grid', () => {
        expect(
          screenTest(Calendar.grid('Audition Date, February 2020'))
        ).toBeVisible();
      });

      it('has week rows', () => {
        expect(screenTest(Calendar.weekRow().all)).toHaveLength(5);
      });

      it('has day gridcells', () => {
        expect(screenTest(Calendar.dayGridCell().all)).toHaveLength(5 * 7);
      });

      it('has selected day gridcell', () => {
        const selectedDay = screenTest(Calendar.dayGridCell().selected);
        expect(
          screenTest(Calendar.dayButton(/February 3, 2020/), selectedDay)
        ).toBeVisible();
      });

      describe.skip('when particular day is clicked', () => {
        beforeEach(async () => {
          console.log(prettyDOM(screenTest(Calendar.grid())));
          await screenTest.wait(Calendar.dayButton('20 February 2020').click);
        });

        it('dispatches', () => {
          expect(dispatch).toHaveBeenCalledTimes(1);
        });
      });
    }
  );
});
