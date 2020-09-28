// https://en.wikipedia.org/wiki/Screen_test
import { screen } from '@testing-library/dom';
import { Descriptor } from './roles/types';

export function screenTest(
  descriptor: Descriptor
): ReturnType<Descriptor['get']> {
  return descriptor.get(screen);
}
