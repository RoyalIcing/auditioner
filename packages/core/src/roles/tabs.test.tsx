import * as React from 'react';
import { tablist, tabs, tab, tabpanel } from './tabs';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TabsReach } from './tabs-reach';

describe('reach tabs', () => {
  beforeEach(() => {
    render(<TabsReach />);
  });

  it('renders tablist', () => {
    expect(tablist().get(screen)).toBeInTheDocument();
  });

  it('renders 3 tabs', () => {
    expect(tabs().getAll(screen)).toHaveLength(3);
  });

  it('selects first tab', () => {
    expect(tab('First').selected.get(screen)).toBeInTheDocument();
  });

  it('renders first tabpanel', () => {
    expect(tabpanel().get(screen)).toHaveTextContent('First panel');
  });

  it('labels first tabpanel', () => {
    expect(tabpanel('First').get(screen)).toHaveTextContent('First panel');
  });

  describe('when clicking on second tab', () => {
    beforeEach(() => {
      user.click(tab('Second').get(screen));
    });

    it('selects second tab', () => {
      expect(tab('Second').selected.get(screen)).toBeInTheDocument();
    });

    it('renders second tabpanel', () => {
      expect(tabpanel().get(screen)).toHaveTextContent('Second panel');
    });
  });
});
