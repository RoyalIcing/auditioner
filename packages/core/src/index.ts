export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

type ButtonInput = {
  getByRole(role: 'button'): HTMLElement;
};
export function actsLikeButton(input: ButtonInput): boolean {
  return input.getByRole('button') != null;
}
