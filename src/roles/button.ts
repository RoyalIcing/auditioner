export function button(name?: string | RegExp) {
  return Object.freeze({
    role: 'button',
    name,
  });
}
