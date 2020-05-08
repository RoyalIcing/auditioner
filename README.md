<div align="center">
<h1>auditioner</h1>

<p style="font-size: 400%; line-height: 1; margin: 0">🎬</p>

<p>Test if your component fits a role.</p>

</div>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Roles](#roles)
  - [Tabs](#tabs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Roles

- button
- link
- checkbox
- radiogroup / radio
- tab
- summary

### Tabs

#### Examples

```ts
describe("your tabs component", () => {
  const subject = lazy(() => render(<Tabs />));
  const tabs = lazy(() => getTabs(subject().container));

  // Check tab interactions in one go
  it("fulfills tab roles", () => {
    checkTabsPerformance(tabs());
  });

  // Or use convenience methods to observe and interact with your tab elements
  it('renders 3 tabs', () => {
    expect(tabs.getAllTabs()).toHaveLength(3);
  });

  it('selects first tab', () => {
    expect(tabs.getSelectedTab('First')).toBeInTheDocument();
  });

  it('renders first tabpanel', () => {
    expect(tabs.getTabpanel()).toHaveTextContent('First panel');
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
```