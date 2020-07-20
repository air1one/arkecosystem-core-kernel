import { CacheStore } from "../../../contracts/kernel/cache";
/**
 * @export
 * @class MemoryCacheStore
 * @implements {CacheStore}
 */
export declare class MemoryCacheStore<K, T> implements CacheStore<K, T> {
    /**
     * @private
     * @type {EventDispatcher}
     * @memberof BlockJob
     */
    private readonly eventDispatcher;
    /**
     * @private
     * @type {Map<K, T>}
     * @memberof MemoryCacheStore
     */
    private readonly store;
    /**
     * Create a new instance of the cache store.
     *
     * @param {Application} app
     * @returns {CacheStore<K, T>}
     * @memberof CacheStore
     */
    make(): Promise<CacheStore<K, T>>;
    /**
     * Get all of the items in the cache.
     *
     * @returns {Array<[K, T]>}
     * @memberof MemoryCacheStore
     */
    all(): Promise<Array<[K, T]>>;
    /**
     * Get the keys of the cache items.
     *
     * @returns {K[]}
     * @memberof MemoryCacheStore
     */
    keys(): Promise<K[]>;
    /**
     * Get the values of the cache items.
     *
     * @returns {T[]}
     * @memberof MemoryCacheStore
     */
    values(): Promise<T[]>;
    /**
     * Retrieve an item from the cache by key.
     *
     * @param {K} key
     * @returns {(T | undefined)}
     * @memberof MemoryCacheStore
     */
    get(key: K): Promise<T | undefined>;
    /**
     * Retrieve multiple items from the cache by key.
     *
     * @param {K[]} keys
     * @returns {(Array<T | undefined>)}
     * @memberof MemoryCacheStore
     */
    getMany(keys: K[]): Promise<Array<T | undefined>>;
    /**
     * Store an item in the cache for a given number of seconds.
     *
     * @param {K} key
     * @param {T} value
     * @param {number} seconds
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    put(key: K, value: T, seconds?: number): Promise<boolean>;
    /**
     * Store multiple items in the cache for a given number of seconds.
     *
     * @param {Array<[K, T]>} values
     * @param {number} seconds
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    putMany(values: Array<[K, T]>, seconds?: number): Promise<boolean[]>;
    /**
     * Determine if an item exists in the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    has(key: K): Promise<boolean>;
    /**
     * Determine multiple items exist in the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    hasMany(keys: K[]): Promise<boolean[]>;
    /**
     * Determine if an item doesn't exist in the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    missing(key: K): Promise<boolean>;
    /**
     * Determine multiple items don't exist in the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    missingMany(keys: K[]): Promise<boolean[]>;
    /**
     * Store an item in the cache indefinitely.
     *
     * @param {K} key
     * @param {T} value
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    forever(key: K, value: T): Promise<boolean>;
    /**
     * Store multiple items in the cache indefinitely.
     *
     * @param {Array<[K, T]>} values
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    foreverMany(values: Array<[K, T]>): Promise<boolean[]>;
    /**
     * Remove an item from the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    forget(key: K): Promise<boolean>;
    /**
     * Remove multiple items from the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    forgetMany(keys: K[]): Promise<boolean[]>;
    /**
     * Remove all items from the cache.
     *
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    flush(): Promise<boolean>;
    /**
     * Get the cache key prefix.
     *
     * @returns {string}
     * @memberof MemoryCacheStore
     */
    getPrefix(): Promise<string>;
}
