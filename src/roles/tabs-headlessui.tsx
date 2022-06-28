import * as React from 'react';
import { Tab } from '@headlessui/react';

export function TabsHeadlessUI() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>First panel</Tab.Panel>
        <Tab.Panel>Second panel</Tab.Panel>
        <Tab.Panel>Third panel</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
