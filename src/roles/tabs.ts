// https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html

import { AllDescriptor, RoleDescriptor } from './types';

function tablist(name?: string | RegExp) {
  return Object.freeze({
    role: 'tablist',
    name,
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { all: { value: true } });
    },
  });
}

function tabpanel(name?: string | RegExp) {
  return Object.freeze({
    role: 'tabpanel',
    name,
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { all: { value: true } });
    },
  });
}

function tabInner(name?: string | RegExp) {
  return Object.freeze({
    role: 'tab',
    name,
    get selected(): RoleDescriptor {
      return Object.create(this, { isSelected: { value: true } });
    },
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { all: { value: true } });
    },
  });
}

export const tab = Object.assign(tabInner, {
  get all() {
    return tabInner().all;
  },
  get list() {
    return tablist;
  },
  get panel() {
    return tabpanel;
  },
});

// export function checkTabsPerformance(subject: ReturnType<typeof auditionTabs>) {
//   const tabs = subject.getAllTabs();

//   tabs.forEach(tab => {
//     // Click on tab
//     user.click(tab);

//     // It selects tab
//     expect(tab).toHaveAttribute('aria-selected', 'true');

//     // It makes corresponding panel visible
//     const panel = followControlled(tab);
//     assertDefined(panel);
//     assertHasRole(panel, 'tabpanel');
//     expect(panel).toBeVisible();
//   });
// }
