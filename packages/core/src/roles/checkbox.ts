import { AllDescriptor, RoleDescriptor } from './types';

export function checkbox(name?: string | RegExp) {
  return Object.freeze({
    role: 'checkbox',
    name,
    get all(): RoleDescriptor & AllDescriptor {
      return Object.create(this, { all: { value: true } });
    },
  });
}
