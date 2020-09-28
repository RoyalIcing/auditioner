import { screen, queries, BoundFunctions, Queries } from '@testing-library/dom';

export function auditionCheckboxes(queries: typeof screen) {
  return {
    single: queries.getByRole.bind(queries),
    all: queries.getAllByRole.bind(queries),
    options: {} as { hidden?: boolean },

    optional() {
      return {
        ...this,
        single: queries.queryByRole.bind(queries),
        all: queries.queryAllByRole.bind(queries),
      };
    },

    hidden() {
      return { ...this, options: { ...this.options, hidden: true } };
    },

    getCheckbox(name?: string) {
      return this.single('checkbox', { ...this.options, name });
    },

    getAllCheckboxes() {
      return this.all('checkbox', { ...this.options });
    },
  };
}

export function checkbox<Q extends Queries = typeof queries>(
  name?: string | RegExp
) {
  return {
    get(source: BoundFunctions<Q>) {
      return source.getByRole('checkbox', { name });
    },
    getAll(source: BoundFunctions<Q>) {
      return source.getAllByRole('checkbox', { name });
    },
  };
}
