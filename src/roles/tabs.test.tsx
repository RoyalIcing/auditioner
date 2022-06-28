import * as React from 'react';
import { Tab } from './tabs';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TabsHeadlessUI } from './tabs-headlessui';
import { TabsSpectrum } from './tabs-spectrum';
import { screenTest } from '../screen';

describe('Tabs', () => {
  describe.each([
    ['<TabsSpectrum>', <TabsSpectrum />],
    ['<TabsHeadlessUI>', <TabsHeadlessUI />],
  ])('%s', (_displayName, el) => {
    beforeEach(() => {
      render(el);
    });

    it('renders 3 tabs', () => {
      expect(screenTest(Tab.all)).toHaveLength(3);
    });

    it('has first tab', () => {
      expect(screenTest(Tab('First'))).toBeVisible();
    });

    it('selects first tab', () => {
      expect(screenTest(Tab('First').selected)).toBeVisible();
    });

    it('renders first tabpanel', () => {
      expect(screenTest(Tab.panel())).toHaveTextContent('First panel');
    });

    it('labels first tabpanel', () => {
      expect(screenTest(Tab.panel('First'))).toHaveTextContent('First panel');
    });

    it('renders tablist', () => {
      expect(screenTest(Tab.list())).toBeVisible();
    });

    describe('when clicking on second tab', () => {
      beforeEach(() => {
        user.click(screenTest(Tab('Second')));
      });

      it('selects second tab', () => {
        expect(screenTest(Tab('Second').selected)).toBeVisible();
      });

      it('renders second tabpanel', () => {
        expect(screenTest(Tab.panel())).toHaveTextContent('Second panel');
      });
    });
  });
});
