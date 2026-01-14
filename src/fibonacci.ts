/** Fibonacci utilities with O(n) time, O(1) space */

export function fibonacci(n: number): bigint {
  if (n < 0) throw new Error('Index must be non-negative');
  if (n <= 1) return BigInt(n);

  let prev = 0n;
  let curr = 1n;

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
}

export function* fibonacciSequence(limit?: number): Generator<bigint> {
  let prev = 0n;
  let curr = 1n;
  let index = 0;

  while (limit === undefined || index < limit) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
    index++;
  }
}
