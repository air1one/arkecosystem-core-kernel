"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullQueue = void 0;
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class MemoryQueue
 * @implements {Queue}
 */
let NullQueue = class NullQueue {
    /**
     * Create a new instance of the queue.
     *
     * @param {Application} app
     * @returns {Queue}
     * @memberof CacheStore
     */
    async make() {
        return this;
    }
    /**
     * Start the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async start() {
        return;
    }
    /**
     * Stop the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async stop() {
        return;
    }
    /**
     * Pause the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async pause() {
        return;
    }
    /**
     * Resume the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async resume() {
        return;
    }
    /**
     * Clear the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async clear() {
        return;
    }
    /**
     * Push a new job onto the default queue.
     *
     * @param {QueueJob} job
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async push(job) {
        return;
    }
    /**
     * Push a new job onto the default queue after a delay.
     *
     * @param {number} delay
     * @param {QueueJob} job
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async later(delay, job) {
        return;
    }
    /**
     * Push an array of jobs onto the default queue.
     *
     * @param {(QueueJob)[]} jobs
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async bulk(jobs) {
        return;
    }
    /**
     * Get the size of the given queue.
     *
     * @param {string} queue
     * @returns {number}
     * @memberof MemoryQueue
     */
    size() {
        return 0;
    }
};
NullQueue = __decorate([
    ioc_1.injectable()
], NullQueue);
exports.NullQueue = NullQueue;
//# sourceMappingURL=null.js.map