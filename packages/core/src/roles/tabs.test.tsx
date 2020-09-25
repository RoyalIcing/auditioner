import * as React from 'react';
import { auditionTabs, checkTabsPerformance } from './tabs';
import { lazy } from 'jest-zest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from '@reach/tabs';

export function TabsReach() {
  const [tabIndex, updateTabIndex] = React.useState(0);

  return (
    <Tabs index={tabIndex} onChange={updateTabIndex}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>First panel</TabPanel>
        <TabPanel>Second panel</TabPanel>
        <TabPanel>Third panel</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

describe('reach tabs', () => {
  beforeEach(() => {
    render(<TabsReach />);
  })
  const tabs = lazy(() => auditionTabs(screen));

  it('fulfills tab roles', () => {
    checkTabsPerformance(tabs());
  });

  it('renders tablist', () => {
    expect(tabs.getTablist()).toBeInTheDocument();
  });

  it('renders 3 tabs', () => {
    expect(tabs.getAllTabs()).toHaveLength(3);
  });

  it('selects first tab', () => {
    expect(tabs.getSelectedTab('First')).toBeInTheDocument();
  });

  it('renders first tabpanel', () => {
    expect(tabs.getTabpanel()).toHaveTextContent('First panel');
  });

  it('labels first tabpanel', () => {
    expect(tabs.getTabpanel('First')).toHaveTextContent('First panel');
  });

  describe('when clicking on second tab', () => {
    beforeEach(() => {
      user.click(tabs.getTab('Second'));
    });

    it('selects second tab', () => {
      expect(tabs.getSelectedTab('Second')).toBeInTheDocument();
    });

    it('renders second tabpanel', () => {
      expect(tabs.getTabpanel()).toHaveTextContent('Second panel');
    });
  });
});
