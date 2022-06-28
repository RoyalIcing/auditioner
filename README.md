<div align="center">
<h1>auditioner</h1>

<p style="font-size: 400%; line-height: 1; margin: 0">🎬</p>

<p>Test that your components can play the accessibility roles we need.</p>

</div>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Roles](#roles)
  - [Tabs](#tabs)
  - [Checkboxes](#checkboxes)
  - [Menus](#menus)
  - [Scene](#scene)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Roles

- button
- link
- checkbox
- radiogroup / radio
- tab
- menu
- summary

### Tabs

#### Examples

```ts
import { screenTest, tablist, tabs, tab, tabpanel } from 'auditioner';

describe('your tabs component', () => {
  beforeEach(() => render(<Tabs />));

  it('renders 3 tabs', () => {
    expect(screenTest(tabs())).toHaveLength(3);
  });

  it('selects first tab', () => {
    expect(screenTest(tab('First').selected)).toBeInTheDocument();
  });

  it('renders first tabpanel', () => {
    expect(screenTest(tabpanel())).toHaveTextContent('First panel');
  });

  describe('when clicking on second tab', () => {
    beforeEach(() => {
      user.click(screenTest(tab('Second')));
    });

    it('selects second tab', () => {
      expect(screenTest(tab('Second').selected)).toBeInTheDocument();
    });

    it('renders second tabpanel', () => {
      expect(screenTest(tabpanel())).toHaveTextContent('Second panel');
    });
  });
});
```

### Checkboxes

#### Examples

```ts
import { checkbox, checkboxes, screenTest } from 'auditioner';

describe('your form component', () => {
  beforeEach(() => {
    render(<YourForm />);
  });

  it('has First checkbox', () => {
    expect(screenTest(checkbox('First'))).toBeInTheDocument();
  });

  it('has 3 checkboxes', () => {
    expect(screenTest(checkboxes())).toHaveLength(3);
  });
});
```

### Menus

#### Examples

```ts
import { button, menu, menuitem, menuitems, screenTest } from 'auditioner';
import user from '@testing-library/user-event';

describe('your menu component', () => {
  beforeEach(() => {
    render(<YourMenu />);
  });

  describe('when action menu is clicked', () => {
    beforeEach(() => user.click(screenTest(button('Actions'))));

    it('opens menu', () => {
      expect(screenTest(menu('Actions'))).toBeVisible();
    });

    it('has Cut item', () => {
      expect(screenTest(menuitem('Actions'))).toBeVisible();
    });

    it('has Cut, Copy, Paste items', () => {
      const [cut, copy, paste] = screenTest(menuitems());
      expect(cut).toHaveTextContent('Cut');
      expect(copy).toHaveTextContent('Copy');
      expect(paste).toHaveTextContent('Paste');
    });
  });
});
```

### Scene

```ts
import { scene } from 'auditioner';

expect(
  screenTest(
    scene(
      form('Sign up', [
        textbox('Email address'),
        textbox('Password'),
        button('Sign up'),
      ])
    )
  )
).toBe(true);
```
