import { prettyDOM } from '@testing-library/dom';

export function assertDefined<T>(
  input: T | undefined | null
): asserts input is T {
  if (input == null) {
    throw new Error(`Assertion failed: ${input} must be defined`);
  }
}

export function assertHasRole<T>(el: HTMLElement, expectedRole: string) {
  if (el.getAttribute('role') !== expectedRole) {
    throw new Error(`Assertion failed: ${prettyDOM(el)} must have role`);
  }
}

export function followControlled(el: HTMLElement): HTMLElement | null {
  const id = el.getAttribute('aria-controls');
  assertDefined(id);
  assertDefined(el.ownerDocument);
  return el.ownerDocument.getElementById(id);
}
