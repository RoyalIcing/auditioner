import { screen, queries, BoundFunctions, Queries } from '@testing-library/dom';

export interface Descriptor<Q extends Queries = typeof queries> {
  get(source: BoundFunctions<Q>): HTMLElement;
}
