// https://en.wikipedia.org/wiki/Screen_test
import { screen, within } from '@testing-library/dom';
import { DescriptorResult, resolverFor } from './resolver';
import { AllDescriptor, RoleDescriptor } from './roles/types';

interface ScreenTest {
  (
    descriptor: RoleDescriptor | (RoleDescriptor & AllDescriptor),
    root?: HTMLElement
  ): DescriptorResult<typeof descriptor>;
  wait(descriptor: RoleDescriptor): Promise<DescriptorResult<RoleDescriptor>>;
}

export const screenTest = Object.assign(
  function screenTest<
    T extends RoleDescriptor | (RoleDescriptor & AllDescriptor)
  >(descriptor: T, root?: HTMLElement): DescriptorResult<T> {
    return resolverFor(typeof root === 'undefined' ? screen : within(root))(
      descriptor
    ) as DescriptorResult<T>;
  },
  {
    async wait(
      descriptor: RoleDescriptor
    ): Promise<DescriptorResult<RoleDescriptor>> {
      return await resolverFor(screen).wait(descriptor);
    },
  }
);
