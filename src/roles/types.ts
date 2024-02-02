import { queries, BoundFunctions, Queries } from '@testing-library/dom';

const all = Symbol('all');
export const optional = Symbol('optional');

export interface RoleDescriptor {
  readonly role: string;
  readonly name?: string | RegExp;
  readonly [optional]?: true;
  readonly isSelected?: boolean;
  readonly event?: 'click';
}

export interface AllDescriptor {
  readonly all: true;
}

export interface SingleDescriptor<Q extends Queries = typeof queries> {
  get(source: BoundFunctions<Q>): HTMLElement;
}
