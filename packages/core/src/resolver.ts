import { screen } from '@testing-library/dom';
import { AllDescriptor, RoleDescriptor } from './roles/types';

export type DescriptorResult<T> = T extends RoleDescriptor & AllDescriptor
  ? Array<HTMLElement>
  : T extends RoleDescriptor
  ? HTMLElement
  : never;

export interface DescriptorResolver<
  T extends RoleDescriptor | (RoleDescriptor & AllDescriptor)
> {
  (descriptor: T): DescriptorResult<T>;
}

export function resolverFor(
  source: Pick<typeof screen, 'getByRole' | 'getAllByRole'>
): DescriptorResolver<RoleDescriptor | (RoleDescriptor & AllDescriptor)> {
  return (descriptor: RoleDescriptor | (RoleDescriptor & AllDescriptor)) => {
    if ('all' in descriptor && descriptor.all === true) {
      const { name } = descriptor;
      return source.getAllByRole(descriptor.role, { name });
    } else {
      const { name, isSelected: selected } = descriptor;
      return source.getByRole(descriptor.role, { name, selected });
    }
  };
}
