import { queries, BoundFunctions, Queries } from '@testing-library/dom';

export interface RoleDescriptor {
  readonly role: string;
  readonly name?: string | RegExp;
  readonly isSelected?: boolean;
  // readonly all?: true;
}

export interface AllDescriptor {
  readonly all: true;
}

export interface SingleDescriptor<Q extends Queries = typeof queries> {
  get(source: BoundFunctions<Q>): HTMLElement;
}
