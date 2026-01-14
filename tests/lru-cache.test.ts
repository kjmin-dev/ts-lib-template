import { describe, expect, test } from 'vitest';
import { LRUCache } from '../src/lru-cache';

describe('LRUCache', () => {
  test('should throw error for non-positive capacity', () => {
    expect(() => new LRUCache(0)).toThrow('Capacity must be a positive integer');
    expect(() => new LRUCache(-1)).toThrow('Capacity must be a positive integer');
  });

  test('should store and retrieve values', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('a', 1).set('b', 2).set('c', 3);

    expect(cache.get('a')).toBe(1);
    expect(cache.get('b')).toBe(2);
    expect(cache.get('c')).toBe(3);
    expect(cache.size).toBe(3);
  });

  test('should return undefined for missing keys', () => {
    const cache = new LRUCache<string, number>(2);
    expect(cache.get('missing')).toBeUndefined();
  });

  test('should evict least recently used item when capacity exceeded', () => {
    const cache = new LRUCache<string, number>(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3); // evicts 'a'

    expect(cache.has('a')).toBe(false);
    expect(cache.get('b')).toBe(2);
    expect(cache.get('c')).toBe(3);
  });

  test('should update recency on get', () => {
    const cache = new LRUCache<string, number>(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.get('a'); // 'a' is now most recently used
    cache.set('c', 3); // evicts 'b', not 'a'

    expect(cache.has('a')).toBe(true);
    expect(cache.has('b')).toBe(false);
    expect(cache.has('c')).toBe(true);
  });

  test('should update value and recency on duplicate set', () => {
    const cache = new LRUCache<string, number>(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('a', 100); // update 'a', now most recently used
    cache.set('c', 3); // evicts 'b'

    expect(cache.get('a')).toBe(100);
    expect(cache.has('b')).toBe(false);
    expect(cache.has('c')).toBe(true);
  });

  test('should support delete and clear', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('a', 1).set('b', 2).set('c', 3);

    expect(cache.delete('b')).toBe(true);
    expect(cache.has('b')).toBe(false);
    expect(cache.size).toBe(2);

    cache.clear();
    expect(cache.size).toBe(0);
  });

  test('should be iterable', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('a', 1).set('b', 2).set('c', 3);

    const entries = [...cache];
    expect(entries).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);

    expect([...cache.keys()]).toEqual(['a', 'b', 'c']);
    expect([...cache.values()]).toEqual([1, 2, 3]);
  });

  test('should expose capacity and size', () => {
    const cache = new LRUCache<string, number>(5);
    expect(cache.capacity).toBe(5);
    expect(cache.size).toBe(0);

    cache.set('a', 1);
    expect(cache.size).toBe(1);
  });

  test('should work with complex key types', () => {
    const cache = new LRUCache<object, string>(2);
    const key1 = { id: 1 };
    const key2 = { id: 2 };

    cache.set(key1, 'first');
    cache.set(key2, 'second');

    expect(cache.get(key1)).toBe('first');
    expect(cache.get(key2)).toBe('second');
  });
});
