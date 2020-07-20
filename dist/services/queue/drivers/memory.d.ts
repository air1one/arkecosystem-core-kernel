import { Queue, QueueJob } from "../../../contracts/kernel/queue";
/**
 * @export
 * @class MemoryQueue
 * @implements {Queue}
 */
export declare class MemoryQueue implements Queue {
    private readonly events;
    /**
     * @private
     * @type {(QueueJob[])}
     * @memberof MemoryQueue
     */
    private readonly jobs;
    /**
     * @private
     * @type {Promise<any[]>}
     * @memberof MemoryQueue
     */
    private lastQueue?;
    /**
     * @private
     * @type {any[]}
     * @memberof MemoryQueue
     */
    private lastResults;
    /**
     * @private
     * @type {boolean}
     * @memberof MemoryQueue
     */
    private isRunning;
    /**
     * @private
     * @type {number}
     * @memberof MemoryQueue
     */
    private index;
    /**
     * Create a new instance of the queue.
     *
     * @param {Application} app
     * @returns {Queue}
     * @memberof CacheStore
     */
    make(): Promise<Queue>;
    /**
     * Start the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    start(): Promise<void>;
    /**
     * Stop the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    stop(): Promise<void>;
    /**
     * Pause the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    pause(): Promise<void>;
    /**
     * Resume the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    resume(): Promise<void>;
    /**
     * Clear the queue.
     *
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    clear(): Promise<void>;
    /**
     * Push a new job onto the queue.
     *
     * @template T
     * @param {QueueJob} job
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    push(job: QueueJob): Promise<void>;
    /**
     * Push a new job onto the queue after a delay.
     *
     * @template T
     * @param {number} delay
     * @param {QueueJob} job
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    later(delay: number, job: QueueJob): Promise<void>;
    /**
     * Push an array of jobs onto the queue.
     *
     * @param {QueueJob[]} jobs
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    bulk(jobs: QueueJob[]): Promise<void>;
    /**
     * Get the size of the queue.
     *
     * @returns {number}
     * @memberof MemoryQueue
     */
    size(): number;
    /**
     * @private
     * @param {number} from
     * @param {any[]} [lastResults=[]]
     * @param {boolean} [isRunning=true]
     * @returns {Promise<any[]>}
     * @memberof MemoryQueue
     */
    private processFromIndex;
}
