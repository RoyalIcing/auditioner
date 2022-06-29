// https://en.wikipedia.org/wiki/Screen_test
import { screen, within } from '@testing-library/dom';
import { DescriptorResult, resolverFor } from './resolver';
import { AllDescriptor, RoleDescriptor } from './roles/types';

export function screenTest<
  T extends RoleDescriptor | (RoleDescriptor & AllDescriptor)
>(descriptor: T, root?: HTMLElement): DescriptorResult<T> {
  return resolverFor(typeof root === 'undefined' ? screen : within(root))(
    descriptor
  ) as DescriptorResult<T>;
}
