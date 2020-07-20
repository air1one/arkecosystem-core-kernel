import { Queue, QueueJob } from "../../../contracts/kernel/queue";
/**
 * @export
 * @class MemoryQueue
 * @implements {Queue}
 */
export declare class NullQueue implements Queue {
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
     * Push a new job onto the default queue.
     *
     * @param {QueueJob} job
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    push(job: QueueJob): Promise<void>;
    /**
     * Push a new job onto the default queue after a delay.
     *
     * @param {number} delay
     * @param {QueueJob} job
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    later(delay: number, job: QueueJob): Promise<void>;
    /**
     * Push an array of jobs onto the default queue.
     *
     * @param {(QueueJob)[]} jobs
     * @returns {Promise<void>}
     * @memberof MemoryQueue
     */
    bulk(jobs: QueueJob[]): Promise<void>;
    /**
     * Get the size of the given queue.
     *
     * @param {string} queue
     * @returns {number}
     * @memberof MemoryQueue
     */
    size(): number;
}
