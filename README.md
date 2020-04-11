# auditioner

Test whether your components can fulfill a role.

## Roles supported

- button
- link
- checkbox
- radio
- tab

## Core API

```ts
import { actsLike } from "@auditioner/core";

it("is a button", () => {
  const result = render(<Component />);
  expect(actsLike("button", result)).toBe(true);
});
```

### Tablist

```ts
import {
  isTablist,
  getTab,
  getAllTabLabels,
  getTabpanel,
  getActiveTabpanel,
  isValidTablist
} from "@auditioner/queries";
import user from "@testing-library/user-event";

let result;
beforeEach(() => {
  result = render(<Component />);
});

it("is a tablist", () => {
  expect(isTablist(result)).toBe(true);
});

it("has 3 tabs", () => {
  expect(getAllTabLabels(result)).toEqual(["First", "Second", "Third"]);
});

describe("when clicking on First tab", () => {
  beforeEach(() => {
    user.click(getTab(result, "First"));
  });

  it("makes first panel active", () => {
    expect(getTabpanel(result, "First")).toBeVisible();
  });
});

it("acts as a tablist", () => {
  expect(isValidTablist(result)).toBe(true);
});
```

## Jest

Import `@auditioner/jest` to extend jest with custom matchers:

```ts
import "@auditioner/jest";
import { tablist } from "@auditioner/roles";

it("is a tablist", () => {
  const result = render(<Component />);
  expect(result).toBeValidTablist();
  expect(result).toActLikeATablist();
  expect(result).toPerformAsATablist();
  expect(result).toPerformAs("tablist");
  expect(result).toHaveRole("tablist");

  expect(result).toMatchRole(
    tablist({
      labels: ["First", "Second", "Third"]
    })
  );

  expect(result).toActAs(
    tablist({
      labels: ["First", "Second", "Third"]
    })
  );

  expect(result).toActAsTablist();
});
```
