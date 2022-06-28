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
import { screenTest, Tab } from 'auditioner';

describe('your tabs component', () => {
  beforeEach(() => render(<Tabs />));

  it('renders 3 tabs', () => {
    expect(screenTest(Tab.all)).toHaveLength(3);
  });

  it('has first tab', () => {
    expect(screenTest(Tab('First'))).toBeVisible();
  });

  it('selects first tab', () => {
    expect(screenTest(Tab('First').selected)).toBeVisible();
  });

  it('renders first tabpanel', () => {
    expect(screenTest(Tab.panel())).toHaveTextContent('First panel');
  });

  it('labels first tabpanel', () => {
    expect(screenTest(Tab.panel('First'))).toHaveTextContent('First panel');
  });

  it('renders tablist', () => {
    expect(screenTest(Tab.list())).toBeVisible();
  });

  describe('when clicking on second tab', () => {
    beforeEach(() => {
      user.click(screenTest(Tab('Second')));
    });

    it('selects second tab', () => {
      expect(screenTest(Tab('Second').selected)).toBeVisible();
    });

    it('renders second tabpanel', () => {
      expect(screenTest(Tab.panel())).toHaveTextContent('Second panel');
    });
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
    beforeEach(() => user.click(screenTest(Button('Actions'))));

    it('opens menu', () => {
      expect(screenTest(Menu('Actions'))).toBeVisible();
    });

    it('has Cut item', () => {
      expect(screenTest(Menu.item('Cut'))).toBeVisible();
    });

    it('renders 3 menu items: Cut, Copy, Paste', () => {
      const [first, second, third] = screenTest(Menu.item().all);
      expect(first).toHaveAccessibleName('Cut');
      expect(second).toHaveAccessibleName('Copy');
      expect(third).toHaveAccessibleName('Paste');
    });

    describe('when clicking on Cut item', () => {
      beforeEach(() => {
        user.click(screenTest(Menu.item('Cut')));
      });

      it('calls select with cut', () => {
        expect(dispatch).toHaveBeenCalledWith({ type: 'select', id: 'cut' });
      });
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

### Scene

(COMING SOON?)

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
