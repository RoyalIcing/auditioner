import { queries } from '@testing-library/dom';

export function auditionAlerts(container: HTMLElement) {
  return {
    getAlert(name?: string) {
      return queries.getByRole(container, 'alertdialog', { name });
    },
  };
}
