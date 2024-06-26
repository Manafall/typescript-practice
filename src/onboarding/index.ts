// Determine if a number is even or odd.
// Return "even" if the number is even, and "odd" if the number is odd.
// isEvenOrOdd(4) => "even"
// isEvenOrOdd(7) => "odd"
// export function isEvenOrOdd...

export function isEvenOrOdd(num: number): string {
    return num % 2 === 0 ? "even" : "odd";
  }
  