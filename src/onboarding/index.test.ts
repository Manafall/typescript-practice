import { isEvenOrOdd } from './index';

describe('isEvenOrOdd', () => {
  it('returns "even" for even numbers', () => {
    expect(isEvenOrOdd(4)).toBe("even");
    expect(isEvenOrOdd(0)).toBe("even");
    expect(isEvenOrOdd(-2)).toBe("even");
  });

  it('returns "odd" for odd numbers', () => {
    expect(isEvenOrOdd(7)).toBe("odd");
    expect(isEvenOrOdd(1)).toBe("odd");
    expect(isEvenOrOdd(-3)).toBe("odd");
  });

  it('handles large numbers', () => {
    expect(isEvenOrOdd(1234567890)).toBe("even");
    expect(isEvenOrOdd(1234567891)).toBe("odd");
  });

  // You can add more test cases as needed, including edge cases.
});
