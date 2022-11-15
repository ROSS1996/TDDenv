const reverse = require('./reverse');

test('Change brazil to Brazil', () => {
  expect(reverse('Brazil')).toBe('lizarB');
});

test('Change united states to United States', () => {
    expect(reverse('united states').toBe('setatS detinU'));
});
