import { Job } from "./interfaces";
/**
 * @export
 * @class BlockJob
 * @implements {Job}
 */
export declare class BlockJob implements Job {
    /**
     * @private
     * @type {EventDispatcher}
     * @memberof BlockJob
     */
    private readonly events;
    /**
     * @private
     * @type {number}
     * @memberof BlockJob
     */
    protected blockCount: number;
    /**
     * @param {Function} callback
     * @memberof BlockJob
     */
    execute(callback: Function): void;
    /**
     * The number of blocks representing the job's frequency.
     *
     * @param {number} blockCount
     * @returns {this}
     * @memberof BlockJob
     */
    cron(blockCount: number): this;
    /**
     * Schedule the job to run every block.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyBlock(): this;
    /**
     * Schedule the job to run every five blocks.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyFiveBlocks(): this;
    /**
     * Schedule the job to run every ten blocks.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyTenBlocks(): this;
    /**
     * Schedule the job to run every fifteen blocks.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyFifteenBlocks(): this;
    /**
     * Schedule the job to run every thirty blocks.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyThirtyBlocks(): this;
    /**
     * Schedule the job to run every round.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyRound(): this;
}
