/** LRU Cache using Map's insertion order (O(1) get/set) */
export class LRUCache<K, V> {
  readonly #capacity: number;
  readonly #cache = new Map<K, V>();

  constructor(capacity: number) {
    if (capacity <= 0) throw new Error('Capacity must be a positive integer');
    this.#capacity = capacity;
  }

  get size(): number {
    return this.#cache.size;
  }

  get capacity(): number {
    return this.#capacity;
  }

  get(key: K): V | undefined {
    if (!this.#cache.has(key)) return undefined;

    const value = this.#cache.get(key) as V;
    this.#cache.delete(key);
    this.#cache.set(key, value);
    return value;
  }

  set(key: K, value: V): this {
    this.#cache.delete(key);

    if (this.#cache.size >= this.#capacity) {
      const oldest = this.#cache.keys().next().value as K;
      this.#cache.delete(oldest);
    }

    this.#cache.set(key, value);
    return this;
  }

  has(key: K): boolean {
    return this.#cache.has(key);
  }

  delete(key: K): boolean {
    return this.#cache.delete(key);
  }

  clear(): void {
    this.#cache.clear();
  }

  keys(): IterableIterator<K> {
    return this.#cache.keys();
  }

  values(): IterableIterator<V> {
    return this.#cache.values();
  }

  entries(): IterableIterator<[K, V]> {
    return this.#cache.entries();
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }
}

export type { LRUCache as LRUCacheType };
