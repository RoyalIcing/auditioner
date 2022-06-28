import { role } from './shared';

export const Search = Object.assign(
  function search(name?: string | RegExp) {
    return role('search', name);
  },
  {
    get all() {
      return role('search').all;
    },
    box(name?: string | RegExp) {
      return role('searchbox', name);
    },
  }
);
