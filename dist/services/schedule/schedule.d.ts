import { BlockJob } from "./block-job";
import { CronJob } from "./cron-job";
/**
 * @export
 * @class Schedule
 */
export declare class Schedule {
    /**
     * @private
     * @type {Application}
     * @memberof BlockJob
     */
    private readonly app;
    /**
     * @returns {CronJob}
     * @memberof Schedule
     */
    cron(): CronJob;
    /**
     * @returns {BlockJob}
     * @memberof Schedule
     */
    block(): BlockJob;
}
