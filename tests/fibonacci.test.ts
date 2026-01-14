import { describe, expect, test } from 'vitest';
import { fibonacci, fibonacciSequence } from '../src/fibonacci';

describe('fibonacci', () => {
  test('should return correct values for base cases', () => {
    expect(fibonacci(0)).toBe(0n);
    expect(fibonacci(1)).toBe(1n);
  });

  test('should return correct values for small indices', () => {
    expect(fibonacci(2)).toBe(1n);
    expect(fibonacci(3)).toBe(2n);
    expect(fibonacci(4)).toBe(3n);
    expect(fibonacci(5)).toBe(5n);
    expect(fibonacci(10)).toBe(55n);
  });

  test('should handle large indices without overflow', () => {
    expect(fibonacci(50)).toBe(12586269025n);
    expect(fibonacci(100)).toBe(354224848179261915075n);
  });

  test('should throw for negative indices', () => {
    expect(() => fibonacci(-1)).toThrow('Index must be non-negative');
  });
});

describe('fibonacciSequence', () => {
  test('should generate limited sequence', () => {
    const seq = [...fibonacciSequence(8)];
    expect(seq).toEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n]);
  });

  test('should generate empty sequence for limit 0', () => {
    expect([...fibonacciSequence(0)]).toEqual([]);
  });

  test('should support lazy iteration', () => {
    const gen = fibonacciSequence();
    expect(gen.next().value).toBe(0n);
    expect(gen.next().value).toBe(1n);
    expect(gen.next().value).toBe(1n);
    expect(gen.next().value).toBe(2n);
  });
});
