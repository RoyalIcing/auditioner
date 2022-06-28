import * as React from 'react';
import {
  defaultTheme,
  Provider,
  Item,
  TabList,
  TabPanels,
  Tabs,
} from '@adobe/react-spectrum';

export function TabsSpectrum() {
  return (
    <Provider theme={defaultTheme}>
      <Tabs>
        <TabList>
          <Item>First</Item>
          <Item>Second</Item>
          <Item>Third</Item>
        </TabList>
        <TabPanels>
          <Item>First panel</Item>
          <Item>Second panel</Item>
          <Item>Third panel</Item>
        </TabPanels>
      </Tabs>
    </Provider>
  );
}
