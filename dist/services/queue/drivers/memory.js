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
exports.MemoryQueue = void 0;
const perf_hooks_1 = require("perf_hooks");
const enums_1 = require("../../../enums");
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class MemoryQueue
 * @implements {Queue}
 */
let MemoryQueue = class MemoryQueue {
    constructor() {
        /**
         * @private
         * @type {(QueueJob[])}
         * @memberof MemoryQueue
         */
        this.jobs = [];
        /**
         * @private
         * @type {any[]}
         * @memberof MemoryQueue
         */
        this.lastResults = [];
        /**
         * @private
         * @type {boolean}
         * @memberof MemoryQueue
         */
        this.isRunning = false;
        /**
         * @private
         * @type {number}
         * @memberof MemoryQueue
         */
        this.index = -1;
    }
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
        this.lastQueue = this.lastQueue || this.processFromIndex(0);
    }
    /**
     * Stop the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async stop() {
        await this.pause();
        this.clear();
    }
    /**
     * Pause the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async pause() {
        this.isRunning = false;
    }
    /**
     * Resume the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async resume() {
        this.lastQueue = this.processFromIndex(this.index + 1, this.lastResults);
    }
    /**
     * Clear the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async clear() {
        this.index = -1;
        this.isRunning = false;
        this.lastQueue = undefined;
        this.jobs.splice(0);
    }
    /**
     * Push a new job onto the queue.
     *
     * @template T
     * @param {QueueJob} job
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async push(job) {
        this.jobs.push(job);
    }
    /**
     * Push a new job onto the queue after a delay.
     *
     * @template T
     * @param {number} delay
     * @param {QueueJob} job
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async later(delay, job) {
        setTimeout(() => this.push(job), delay);
    }
    /**
     * Push an array of jobs onto the queue.
     *
     * @param {QueueJob[]} jobs
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    async bulk(jobs) {
        for (const job of jobs) {
            this.jobs.push(job);
        }
    }
    /**
     * Get the size of the queue.
     *
     * @returns {number}
     * @memberof MemoryQueue
     */
    size() {
        return this.jobs.length;
    }
    /**
     * @private
     * @param {number} from
     * @param {any[]} [lastResults=[]]
     * @param {boolean} [isRunning=true]
     * @returns {Promise<any[]>}
     * @memberof MemoryQueue
     */
    async processFromIndex(from, lastResults = [], isRunning = true) {
        this.lastResults = lastResults;
        if (from < this.jobs.length) {
            this.index = from;
            if (isRunning) {
                this.isRunning = isRunning;
                const start = perf_hooks_1.performance.now();
                try {
                    lastResults.push(await this.jobs[from].handle());
                    await this.events.dispatch(enums_1.QueueEvent.Finished, {
                        driver: "memory",
                        executionTime: perf_hooks_1.performance.now() - start,
                    });
                    return this.processFromIndex(from + 1, lastResults, this.isRunning);
                }
                catch (error) {
                    this.isRunning = false;
                    await this.events.dispatch(enums_1.QueueEvent.Failed, {
                        driver: "memory",
                        executionTime: perf_hooks_1.performance.now() - start,
                        error: error,
                    });
                    throw new Error(`Queue halted at job #${from + 1} due to error in handler ${this.jobs[this.index]}.`);
                }
            }
        }
        else {
            this.isRunning = false;
        }
        return this.lastResults;
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.EventDispatcherService),
    __metadata("design:type", Object)
], MemoryQueue.prototype, "events", void 0);
MemoryQueue = __decorate([
    ioc_1.injectable()
], MemoryQueue);
exports.MemoryQueue = MemoryQueue;
//# sourceMappingURL=memory.js.map