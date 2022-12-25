import Validator from '../class/Validator';

test('корректный nikName', () => {
  const result = Validator.validateUsername('sanco-rodriges55');
  expect(result).toBe(true);
});
test('присутствуют недопустимые символы', () => {
  const result = Validator.validateUsername('sanco#');
  expect(result).toBe(false);
});
test('валидация более трёх цифр подряд', () => {
  const result = Validator.validateUsername('sanco555');
  expect(result).toBe(false);
});
test('валидация начинается с -', () => {
  const result = Validator.validateUsername('-sanco');
  expect(result).toBe(false);
});
test('валидация начинается с _', () => {
  const result = Validator.validateUsername('_sanco');
  expect(result).toBe(false);
});
test('валидация заканчивается на -', () => {
  const result = Validator.validateUsername('sanco-');
  expect(result).toBe(false);
});
test('валидация заканчивается на _', () => {
  const result = Validator.validateUsername('sanco_');
  expect(result).toBe(false);
});
