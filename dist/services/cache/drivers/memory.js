"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryCacheStore = void 0;
const enums_1 = require("../../../enums");
const runtime_1 = require("../../../exceptions/runtime");
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class MemoryCacheStore
 * @implements {CacheStore}
 */
let MemoryCacheStore = class MemoryCacheStore {
    constructor() {
        /**
         * @private
         * @type {Map<K, T>}
         * @memberof MemoryCacheStore
         */
        this.store = new Map();
    }
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
        return [...this.store.entries()];
    }
    /**
     * Get the keys of the cache items.
     *
     * @returns {K[]}
     * @memberof MemoryCacheStore
     */
    async keys() {
        return [...this.store.keys()];
    }
    /**
     * Get the values of the cache items.
     *
     * @returns {T[]}
     * @memberof MemoryCacheStore
     */
    async values() {
        return [...this.store.values()];
    }
    /**
     * Retrieve an item from the cache by key.
     *
     * @param {K} key
     * @returns {(T | undefined)}
     * @memberof MemoryCacheStore
     */
    async get(key) {
        const value = this.store.get(key);
        value
            ? this.eventDispatcher.dispatch(enums_1.CacheEvent.Hit, { key, value })
            : this.eventDispatcher.dispatch(enums_1.CacheEvent.Missed, { key });
        return value;
    }
    /**
     * Retrieve multiple items from the cache by key.
     *
     * @param {K[]} keys
     * @returns {(Array<T | undefined>)}
     * @memberof MemoryCacheStore
     */
    async getMany(keys) {
        return keys.map((key) => this.store.get(key));
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
        this.store.set(key, value);
        if (this.has(key)) {
            this.eventDispatcher.dispatch(enums_1.CacheEvent.Written, { key, value, seconds });
        }
        return this.has(key);
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
        return Promise.all(values.map(async (value) => this.put(value[0], value[1])));
    }
    /**
     * Determine if an item exists in the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async has(key) {
        return this.store.has(key);
    }
    /**
     * Determine multiple items exist in the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async hasMany(keys) {
        return Promise.all(keys.map(async (key) => this.has(key)));
    }
    /**
     * Determine if an item doesn't exist in the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async missing(key) {
        return !this.store.has(key);
    }
    /**
     * Determine multiple items don't exist in the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async missingMany(keys) {
        return Promise.all([...keys].map(async (key) => this.missing(key)));
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
        throw new runtime_1.NotImplemented(this.constructor.name, "forever");
    }
    /**
     * Store multiple items in the cache indefinitely.
     *
     * @param {Array<[K, T]>} values
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async foreverMany(values) {
        throw new runtime_1.NotImplemented(this.constructor.name, "foreverMany");
    }
    /**
     * Remove an item from the cache.
     *
     * @param {K} key
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async forget(key) {
        this.store.delete(key);
        if (this.missing(key)) {
            this.eventDispatcher.dispatch(enums_1.CacheEvent.Forgotten, { key });
        }
        return this.missing(key);
    }
    /**
     * Remove multiple items from the cache.
     *
     * @param {K[]} keys
     * @returns {boolean[]}
     * @memberof MemoryCacheStore
     */
    async forgetMany(keys) {
        return Promise.all(keys.map(async (key) => this.forget(key)));
    }
    /**
     * Remove all items from the cache.
     *
     * @returns {boolean}
     * @memberof MemoryCacheStore
     */
    async flush() {
        this.store.clear();
        this.eventDispatcher.dispatch(enums_1.CacheEvent.Flushed);
        return this.store.size === 0;
    }
    /**
     * Get the cache key prefix.
     *
     * @returns {string}
     * @memberof MemoryCacheStore
     */
    async getPrefix() {
        throw new runtime_1.NotImplemented(this.constructor.name, "getPrefix");
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.EventDispatcherService),
    __metadata("design:type", Object)
], MemoryCacheStore.prototype, "eventDispatcher", void 0);
MemoryCacheStore = __decorate([
    ioc_1.injectable()
], MemoryCacheStore);
exports.MemoryCacheStore = MemoryCacheStore;
//# sourceMappingURL=memory.js.map