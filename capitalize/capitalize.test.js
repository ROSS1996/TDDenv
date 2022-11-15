const capitalize = require('./capitalize');

test('Change brazil to Brazil', () => {
  expect(capitalize('brazil')).toBe('Brazil');
});

test('Change united states to United States', () => {
    expect(capitalize('united states').toBe('United States'));
});
