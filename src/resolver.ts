import { screen, waitFor } from '@testing-library/dom';
import user from '@testing-library/user-event';
import { AllDescriptor, RoleDescriptor, optional } from './roles/types';

export type DescriptorResult<T> = T extends RoleDescriptor & AllDescriptor
  ? Array<HTMLElement>
  : T extends RoleDescriptor
  ? HTMLElement
  : never;

export interface DescriptorResolver<
  T extends RoleDescriptor | (RoleDescriptor & AllDescriptor)
> {
  (descriptor: T): DescriptorResult<T>;
  // (descriptor: RoleDescriptor | (RoleDescriptor & AllDescriptor)): DescriptorResult<typeof descriptor>;
  wait(descriptor: RoleDescriptor): Promise<DescriptorResult<RoleDescriptor>>;
}

export function resolverFor(
  source: Pick<
    typeof screen,
    | 'getByRole'
    | 'getAllByRole'
    | 'queryByRole'
    | 'queryAllByRole'
    | 'findByRole'
  >
): DescriptorResolver<RoleDescriptor | (RoleDescriptor & AllDescriptor)> {
  return Object.assign(
    <D extends RoleDescriptor>(
      descriptor: RoleDescriptor | (RoleDescriptor & AllDescriptor)
    ): D extends AllDescriptor ? ReadonlyArray<HTMLElement> : HTMLElement => {
      if ('all' in descriptor && descriptor.all === true) {
        const { name } = descriptor;
        return source.queryAllByRole(descriptor.role, { name }) as any;
      } else if (optional in descriptor) {
        const { name, isSelected: selected } = descriptor;
        return source.queryByRole(descriptor.role, { name, selected }) as any;
      } else {
        const { name, isSelected: selected } = descriptor;
        return source.getByRole(descriptor.role, { name, selected });
      }
    },
    {
      async wait(descriptor: RoleDescriptor) {
        const { name, isSelected: selected, event } = descriptor;
        const el = await source.findByRole(descriptor.role, { name, selected });
        if (event === 'click') {
          await waitFor(async () => {
            await user.click(el);
          });
        }
        return el;
      },
    }
  );
}
