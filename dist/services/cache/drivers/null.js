"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullCacheStore = void 0;
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class MemoryCacheStore
 * @implements {CacheStore}
 */
let NullCacheStore = class NullCacheStore {
    /**
     * Create a new instance of the cache store.
     *
     * @param {Application} app
     * @returns {CacheStore<K, T>}
     * @memberof CacheStore
     */
    async make() {
        return this;
    }
    /**
     * Get all of the items in the cache.
     *
     * @returns {Array<[K, T]>}
     * @memberof MemoryCacheStore
     */
    async all() {
        return [];
    }
    /**
     * Get the keys of the cache items.
     *
     * @returns {K[]}
     * @memberof MemoryCacheStore
     */
    async keys() {
        return [];
    }
    /**
     * Get the values of the cache items.
     *
     * @returns {T[]}
     * @memberof MemoryCacheStore
     */
    async values() {
        return [];
    }
    /**
     * Retrieve an item from the cache by key.
     *
     * @param {K} key
     * @returns {(T | undefined)}
     * @memberof MemoryCacheStore
     */
    async get(key) {
        return undefined;
    }
    /**
     * Retrieve multiple items from the cache by key.
     *
     * @param {K[]} keys
     * @returns {(Array<T | undefined>)}
     * @memberof MemoryCacheStore
     */
    async getMany(keys) {
        return new Array(keys.length).fill(undefined);
    }
    /**
     * Store an item in the cache for a given number of seconds.
     *
     * @param {K} key
     * @param {T} value
     * @param {number} seconds
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async put(key, value, seconds) {
        return false;
    }
    /**
     * Store multiple items in the cache for a given number of seconds.
     *
     * @param {Array<[K, T]>} values
     * @param {number} seconds
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async putMany(values, seconds) {
        return new Array(values.length).fill(false);
    }
    /**
     * Determine if an item exists in the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async has(key) {
        return false;
    }
    /**
     * Determine multiple items exist in the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async hasMany(keys) {
        return new Array(keys.length).fill(false);
    }
    /**
     * Determine if an item doesn't exist in the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async missing(key) {
        return true;
    }
    /**
     * Determine multiple items don't exist in the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async missingMany(keys) {
        return new Array(keys.length).fill(true);
    }
    /**
     * Store an item in the cache indefinitely.
     *
     * @param {K} key
     * @param {T} value
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async forever(key, value) {
        return false;
    }
    /**
     * Store multiple items in the cache indefinitely.
     *
     * @param {Array<[K, T]>} values
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async foreverMany(values) {
        return new Array(values.length).fill(false);
    }
    /**
     * Remove an item from the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async forget(key) {
        return false;
    }
    /**
     * Remove multiple items from the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async forgetMany(keys) {
        return new Array(keys.length).fill(false);
    }
    /**
     * Remove all items from the cache.
     *
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async flush() {
        return false;
    }
    /**
     * Get the cache key prefix.
     *
     * @returns {string}
     * @memberof MemoryCacheStore
     */
    async getPrefix() {
        return "";
    }
};
NullCacheStore = __decorate([
    ioc_1.injectable()
], NullCacheStore);
exports.NullCacheStore = NullCacheStore;
//# sourceMappingURL=null.js.map