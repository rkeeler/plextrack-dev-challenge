import getRomanNumeral from './getRomanNumeral';

test('1 returns I', () => {
  expect(getRomanNumeral(1)).toBe('I');
});

test('2 returns II', () => {
  expect(getRomanNumeral(2)).toBe('II');
});

test('3 returns I', () => {
  expect(getRomanNumeral(3)).toBe('III');
});

test('4 returns I', () => {
  expect(getRomanNumeral(4)).toBe('IV');
});

test('5 returns I', () => {
  expect(getRomanNumeral(5)).toBe('V');
});

test('6 returns I', () => {
  expect(getRomanNumeral(6)).toBe('VI');
});

test('7 returns I', () => {
  expect(getRomanNumeral(7)).toBe('VII');
});

test('8 returns I', () => {
  expect(getRomanNumeral(8)).toBe('VIII');
});

test('9 returns I', () => {
  expect(getRomanNumeral(9)).toBe('IX');
});

test('other numbers return ?', () => {
  expect(getRomanNumeral(100)).toBe('?');
});
