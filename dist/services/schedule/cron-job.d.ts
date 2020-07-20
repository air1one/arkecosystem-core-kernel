import { CronCommand } from "cron";
import { Job } from "./interfaces";
/**
 * @remarks
 * {@link https://crontab.guru/ | crontab guru}
 * {@link https://github.com/kelektiv/node-cron | node-cron}
 *
 * @export
 * @class CronJob
 * @implements {Job}
 */
export declare class CronJob implements Job {
    /**
     * @private
     * @type {EventDispatcher}
     * @memberof CronJob
     */
    private readonly events;
    /**
     * @private
     * @type {string}
     * @memberof CronJob
     */
    protected expression: string;
    /**
     * @param {Function} callback
     * @memberof CronJob
     */
    execute(callback: CronCommand): void;
    /**
     * The Cron expression representing the job's frequency.
     *
     * @param {string} expression
     * @returns {this}
     * @memberof CronJob
     */
    cron(expression: string): this;
    /**
     * Schedule the job to run every minute.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyMinute(): this;
    /**
     * Schedule the job to run every five minutes.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyFiveMinutes(): this;
    /**
     * Schedule the job to run every ten minutes.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyTenMinutes(): this;
    /**
     * Schedule the job to run every fifteen minutes.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyFifteenMinutes(): this;
    /**
     * Schedule the job to run every thirty minutes.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyThirtyMinutes(): this;
    /**
     * Schedule the job to run hourly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    hourly(): this;
    /**
     * Schedule the job to run hourly at a given offset in the hour.
     *
     * @param {string} minute
     * @returns {this}
     * @memberof CronJob
     */
    hourlyAt(minute: string): this;
    /**
     * Schedule the job to run daily.
     *
     * @returns {this}
     * @memberof CronJob
     */
    daily(): this;
    /**
     * Schedule the job to run daily at a given time (10:00, 19:30, etc).
     *
     * @param {string} hour
     * @param {string} minute
     * @returns {this}
     * @memberof CronJob
     */
    dailyAt(hour: string, minute: string): this;
    /**
     * Schedule the job to run only on weekdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    weekdays(): this;
    /**
     * Schedule the job to run only on weekends.
     *
     * @returns {this}
     * @memberof CronJob
     */
    weekends(): this;
    /**
     * Schedule the job to run only on Mondays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    mondays(): this;
    /**
     * Schedule the job to run only on Tuesdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    tuesdays(): this;
    /**
     * Schedule the job to run only on Wednesdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    wednesdays(): this;
    /**
     * Schedule the job to run only on Thursdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    thursdays(): this;
    /**
     * Schedule the job to run only on Fridays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    fridays(): this;
    /**
     * Schedule the job to run only on Saturdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    saturdays(): this;
    /**
     * Schedule the job to run only on Sundays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    sundays(): this;
    /**
     * Schedule the job to run weekly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    weekly(): this;
    /**
     * Schedule the job to run weekly on a given day and time.
     *
     * @param {string} day
     * @param {string} hour
     * @param {string} minute
     * @returns {this}
     * @memberof CronJob
     */
    weeklyOn(day: string, hour: string, minute: string): this;
    /**
     * Schedule the job to run monthly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    monthly(): this;
    /**
     * Schedule the job to run monthly on a given day and time.
     *
     * @param {string} day
     * @param {string} hour
     * @param {string} minute
     * @returns {this}
     * @memberof CronJob
     */
    monthlyOn(day: string, hour: string, minute: string): this;
    /**
     * Schedule the job to run quarterly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    quarterly(): this;
    /**
     * Schedule the job to run yearly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    yearly(): this;
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    private setMinute;
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    private setHour;
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    private setDayMonth;
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    private setMonth;
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    private setDayWeek;
    /**
     * Splice the given value into the given position of the expression.
     *
     * @private
     * @param {number} position
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    private spliceIntoPosition;
}
