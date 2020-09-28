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
  - [Checkboxes](#checkboxes)

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
import { screenTest, tablist, tabs, tab, tabpanel } from "auditioner";

describe("your tabs component", () => {
  beforeEach(() => render(<Tabs />));

  it("renders 3 tabs", () => {
    expect(screenTest(tabs())).toHaveLength(3);
  });

  it("selects first tab", () => {
    expect(screenTest(tab("First").selected)).toBeInTheDocument();
  });

  it("renders first tabpanel", () => {
    expect(screenTest(tabpanel())).toHaveTextContent("First panel");
  });

  describe("when clicking on second tab", () => {
    beforeEach(() => {
      user.click(screenTest(tab("Second")));
    });

    it("selects second tab", () => {
      expect(screenTest(tab("Second").selected)).toBeInTheDocument();
    });

    it("renders second tabpanel", () => {
      expect(screenTest(tabpanel())).toHaveTextContent("Second panel");
    });
  });
});
```

### Checkboxes

#### Examples

```ts
import { checkbox, checkboxes, screenTest } from "auditioner";

describe("your form component", () => {
  beforeEach(() => {
    render(<YourForm />);
  });

  it("has First checkbox", () => {
    expect(screenTest(checkbox("First"))).toBeInTheDocument();
  });

  it("has 3 checkboxes", () => {
    expect(screenTest(checkboxes())).toHaveLength(3);
  });
});
```

### Scene

```ts
import { scene } from "auditioner";

expect(
  screenTest(
    scene(
      form("Sign up", [
        textbox("Email address"),
        textbox("Password"),
        button("Sign up"),
      ])
    )
  )
).toBe(true);
```
