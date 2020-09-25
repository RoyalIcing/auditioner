// https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html
import { screen } from '@testing-library/dom';
import user from '@testing-library/user-event';
import { followControlled, assertDefined, assertHasRole } from './shared';

export function auditionTabs(queries: typeof screen) {
  return {
    getTablist(name?: string) {
      return queries.getByRole('tablist', { name });
    },
    getAllTabs() {
      return queries.getAllByRole('tab');
    },
    getTab(name?: string) {
      return queries.getByRole('tab', { name });
    },
    getSelectedTab(name?: string) {
      return queries.getByRole('tab', { selected: true, name });
    },
    getTabpanel(name?: string) {
      return queries.getByRole('tabpanel', { name });
    },
  };
}

export function checkTabsPerformance(subject: ReturnType<typeof auditionTabs>) {
  const tabs = subject.getAllTabs();

  tabs.forEach(tab => {
    // Click on tab
    user.click(tab);

    // It selects tab
    expect(tab).toHaveAttribute('aria-selected', 'true');

    // It makes corresponding panel visible
    const panel = followControlled(tab);
    assertDefined(panel);
    assertHasRole(panel, 'tabpanel');
    expect(panel).toBeVisible();
  });
}
