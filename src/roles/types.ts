import {
  queries,
  type BoundFunctions,
  type Queries,
} from '@testing-library/dom';

export const allKey = Symbol('all');
export const optionalKey = Symbol('optional');

export interface RoleDescriptor {
  readonly role: string;
  readonly name?: string | RegExp;
  readonly [optionalKey]?: true;
  readonly isSelected?: boolean;
  readonly event?: 'click';
}

export interface AllDescriptor {
  readonly [allKey]?: true;
}

export interface SingleDescriptor<Q extends Queries = typeof queries> {
  get(source: BoundFunctions<Q>): HTMLElement;
}
