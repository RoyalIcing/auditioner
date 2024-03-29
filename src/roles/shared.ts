import { prettyDOM } from '@testing-library/dom';
import {
  type AllDescriptor,
  type RoleDescriptor,
  allKey,
  optionalKey,
} from './types';

export type RoleObject<
  Role extends string,
  SupportedEvent extends { click?: true }
> = {
  role: Role;
  name?: string | RegExp;
  optional: RoleObject<Role, SupportedEvent>;
  all: RoleDescriptor & AllDescriptor;
} & (SupportedEvent['click'] extends true
  ? {
      click: RoleDescriptor;
    }
  : {});

export function role<
  Role extends string,
  SupportedEvent extends { click?: true }
>(role: Role, name?: string | RegExp): RoleObject<Role, SupportedEvent> {
  return Object.freeze({
    role,
    name,
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { [allKey]: { value: true } });
    },
    get optional() {
      return Object.create(this, { [optionalKey]: { value: true } });
    },
    get click(): RoleDescriptor {
      return Object.create(this, { event: { value: 'click' } });
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
      return Object.create(this, { [allKey]: { value: true } });
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
