// https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html

import { role, roleSelectable } from './shared';

function tab(name?: string | RegExp) {
  return roleSelectable('tab', name);
}

export const Tab = Object.assign(tab, {
  get all() {
    return tab().all;
  },
  List(name?: string | RegExp) {
    return role('tablist', name);
  },
  Panel(name?: string | RegExp) {
    return role('tabpanel', name);
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
