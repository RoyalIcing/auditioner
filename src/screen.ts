// https://en.wikipedia.org/wiki/Screen_test
import { screen } from '@testing-library/dom';
import { DescriptorResult, resolverFor } from './resolver';
import { AllDescriptor, RoleDescriptor } from './roles/types';

export function screenTest<
  T extends RoleDescriptor | (RoleDescriptor & AllDescriptor)
>(descriptor: T): DescriptorResult<T> {
  return resolverFor(screen)(descriptor) as DescriptorResult<T>;
}
