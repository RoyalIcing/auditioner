// https://en.wikipedia.org/wiki/Screen_test
import { screen } from '@testing-library/dom';
import { RoleDescriptor, SingleDescriptor } from './roles/types';

export function screenTest(descriptor: RoleDescriptor | SingleDescriptor) {
  if ('role' in descriptor) {
    if ('all' in descriptor) {
      return screen.getAllByRole(descriptor.role, descriptor);
    } else {
      return screen.getByRole(descriptor.role, descriptor);
    }
  } else {
    return descriptor.get(screen);
  }
}
