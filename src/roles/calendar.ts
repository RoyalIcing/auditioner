import { role, roleSelectable } from './shared';

export const Calendar = Object.assign(
  {},
  {
    PreviousButton(name: string | RegExp = /previous/i) {
      return role<{ click: true }>('button', name);
    },
    NextButton(name: string | RegExp = /next/i) {
      return role<{ click: true }>('button', name);
    },
    Grid(name?: string | RegExp) {
      return role('grid', name);
    },
    WeekRow(name?: string | RegExp) {
      return role('row', name);
    },
    DayGridCell(name?: string | RegExp) {
      return roleSelectable('gridcell', name);
    },
    DayButton(name?: string | RegExp) {
      return role<{ click: true }>('button', name);
    },
  }
);
