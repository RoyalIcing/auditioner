import * as React from 'react';
import { Textbox } from './textbox';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screenTest } from '../screen';
import { TextboxSpectrum } from './textbox-spectrum';

function freshFn() {
  const fn = jest.fn();
  afterEach(() => fn.mockClear());
  return fn;
}

describe('Textbox', () => {
  describe.each([['<TextboxSpectrum>', TextboxSpectrum]])(
    '%s',
    (_displayName, Component) => {
      const dispatch = freshFn();
      beforeEach(() => {
        render(<Component dispatch={dispatch} />);
      });

      it('has first textbox', () => {
        expect(screenTest(Textbox('First'))).toBeVisible();
      });

      it('has second textbox', () => {
        expect(screenTest(Textbox('Second'))).toBeVisible();
      });

      it('has 3 textboxes', () => {
        expect(screenTest(Textbox.all)).toHaveLength(3);
      });

      it('can tab through textboxes', async () => {
        await user.tab();
        expect(screenTest(Textbox('First'))).toHaveFocus();
        await user.tab();
        expect(screenTest(Textbox('Second'))).toHaveFocus();
        await user.tab();
        expect(screenTest(Textbox('Third'))).toHaveFocus();
      });

      it('can enter text', async () => {
        await user.tab();
        await user.keyboard('Some text');
        expect(screenTest(Textbox('First'))).toHaveDisplayValue('Some text');
        await user.tab();
        await user.keyboard('More text');
        expect(screenTest(Textbox('Second'))).toHaveDisplayValue('More text');
      });
    }
  );
});
