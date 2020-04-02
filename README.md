# auditioner

Test whether your components can fulfil a role.

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

## Jest

Import `@auditioner/jest` to extend jest with custom matchers:

```ts
import "@auditioner/jest";

it("is a button", () => {
  const result = render(<Component />);
  expect(result).toActLikeAButton();
  expect(result).toActLikeAButton();
  expect(result).toPerformAsAButton();
  expect(result).toPerformAs("button");
});
```

