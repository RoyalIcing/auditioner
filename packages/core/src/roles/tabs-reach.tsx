import * as React from 'react';
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
