import * as React from 'react';
import { tablist, tab, tabpanel } from './tabs';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TabsHeadlessUI } from './tabs-headlessui';
import { screenTest } from '../screen';

describe('reach tabs', () => {
  beforeEach(() => {
    render(<TabsHeadlessUI />);
  });

  it('renders tablist', () => {
    expect(screenTest(tablist())).toBeInTheDocument();
  });

  it('renders 3 tabs', () => {
    expect(screenTest(tab().all)).toHaveLength(3);
  });

  it('has first tab', () => {
    expect(screenTest(tab('First'))).toBeInTheDocument();
  });

  it('selects first tab', () => {
    expect(screenTest(tab('First').selected)).toBeInTheDocument();
  });

  it('renders first tabpanel', () => {
    expect(screenTest(tabpanel())).toHaveTextContent('First panel');
  });

  it('labels first tabpanel', () => {
    expect(screenTest(tabpanel('First'))).toHaveTextContent('First panel');
  });

  describe('when clicking on second tab', () => {
    beforeEach(() => {
      user.click(screenTest(tab('Second')));
    });

    it('selects second tab', () => {
      expect(screenTest(tab('Second').selected)).toBeInTheDocument();
    });

    it('renders second tabpanel', () => {
      expect(screenTest(tabpanel())).toHaveTextContent('Second panel');
    });
  });
});
