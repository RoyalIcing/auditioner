import * as React from 'react';
import { Checkbox } from './checkbox';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screenTest } from '../screen';
import { SearchVanilla } from './search-vanilla';
import { SearchSpectrum } from './search-spectrum';
import { Search } from './search';

function freshFn() {
  const fn = jest.fn();
  afterEach(() => fn.mockClear());
  return fn;
}

describe('Checkbox', () => {
  describe.each([
    ['<SearchVanilla>', SearchVanilla],
    ['<SearchSpectrum>', SearchSpectrum],
  ])('%s', (_displayName, Component) => {
    const dispatch = freshFn();
    beforeEach(() => {
      render(<Component dispatch={dispatch} />);
    });

    it('has search landmark', () => {
      expect(screenTest(Search())).toBeVisible();
    });

    it('has search box', () => {
      expect(screenTest(Search.box())).toBeVisible();
    });

    describe('when user submit search', () => {
      beforeEach(async () => {
        await user.tab();
        await user.keyboard('Some query');
        await user.keyboard('{Enter}');
      });

      it('calls dispatch with search query', () => {
        expect(dispatch).toHaveBeenCalledWith({
          type: 'submit',
          input: 'Some query',
        });
      });
    });
  });
});
