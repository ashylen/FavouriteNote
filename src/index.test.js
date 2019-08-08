const addTwo = (a, b) => a + b;

test('adds two number', () => {
  expect(addTwo(1, 2)).toBe(3);
});

const shoppingList = ['krakersy', 'chipsy', 'apple'];

test('contains healthy food', () => {
  expect(shoppingList).toContain('apple');
});
