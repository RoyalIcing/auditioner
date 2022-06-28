import { prettyDOM } from '@testing-library/dom';
import type { AllDescriptor, RoleDescriptor } from './types';

export function role(role: string, name?: string | RegExp) {
  return Object.freeze({
    role,
    name,
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { all: { value: true } });
    },
  });
}

export function roleSelectable(role: string, name?: string | RegExp) {
  return Object.freeze({
    role,
    name,
    get selected(): RoleDescriptor {
      return Object.create(this, { isSelected: { value: true } });
    },
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { all: { value: true } });
    },
  });
}

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
