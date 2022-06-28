import * as React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screenTest } from '../screen';
import { Button } from './button';

function freshFn() {
  const fn = jest.fn();
  afterEach(() => fn.mockClear());
  return fn;
}

describe('Button', () => {
  describe.each([['<button>', 'button']])('%s', (_displayName, Component) => {
    const dispatch = freshFn();
    beforeEach(() => {
      render(<button onClick={dispatch}>Button Title</button>);
    });

    it('works without name', () => {
      expect(screenTest(Button())).toBeVisible();
    });

    it('work with name', () => {
      expect(screenTest(Button('Button Title'))).toBeVisible();
    });

    it('works with .all', () => {
      expect(screenTest(Button.all)).toHaveLength(1);
      expect(screenTest(Button.all)[0]).toBeInstanceOf(HTMLElement);
    });

    describe('when clicked', () => {
      beforeEach(async () => {
        await user.click(screenTest(Button('Button Title')));
      });

      it('calls dispatch', () => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
    });

    // describe('when clicked', () => {
    //   beforeEach(() => {
    //     user.click(Button('Button Title'));
    //   });

    //   it('calls dispatch', () => {
    //     expect(dispatch).toHaveBeenCalledTimes(1);
    //   });
    // });
  });
});
