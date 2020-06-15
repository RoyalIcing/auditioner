import { queries, prettyDOM } from '@testing-library/dom';
import user from '@testing-library/user-event';

export function getTabs(container: HTMLElement) {
  return {
    getTablist(name?: string) {
      return queries.getByRole(container, 'tablist', { name });
    },
    getAllTabs() {
      return queries.getAllByRole(container, 'tab');
    },
    getTab(name?: string) {
      return queries.getByRole(container, 'tab', { name });
    },
    getSelectedTab(name?: string) {
      return queries.getByRole(container, 'tab', {
        selected: true,
        name,
      } as any);
    },
    getTabpanel(name?: string) {
      return queries.getByRole(container, 'tabpanel', { name });
    },
  };
}

function assertDefined<T>(input: T | undefined | null): asserts input is T {
  if (input == null) {
    throw new Error(`Assertion failed: ${input} must be defined`);
  }
}

function assertHasRole<T>(el: HTMLElement, expectedRole: string) {
  if (el.getAttribute('role') !== expectedRole) {
    throw new Error(`Assertion failed: ${prettyDOM(el)} must have role`);
  }
}

function followControlled(el: HTMLElement): HTMLElement | null {
  const id = el.getAttribute('aria-controls');
  assertDefined(id);
  assertDefined(el.ownerDocument);
  return el.ownerDocument.getElementById(id);
}

export function checkTabsPerformance(subject: ReturnType<typeof getTabs>) {
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
