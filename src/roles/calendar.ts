import { role, roleSelectable } from './shared';

export const Calendar = Object.assign(
  {},
  {
    previousButton(name: string | RegExp = /previous/i) {
      return role<{ click: true }>('button', name);
    },
    nextButton(name: string | RegExp = /next/i) {
      return role<{ click: true }>('button', name);
    },
    grid(name?: string | RegExp) {
      return role('grid', name);
    },
    weekRow(name?: string | RegExp) {
      return role('row', name);
    },
    dayGridCell(name?: string | RegExp) {
      return roleSelectable('gridcell', name);
    },
    dayButton(name?: string | RegExp) {
      return role<{ click: true }>('button', name);
    },
  }
);
