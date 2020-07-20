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
exports.CronJob = void 0;
const cron_1 = require("cron");
const perf_hooks_1 = require("perf_hooks");
const enums_1 = require("../../enums");
const ioc_1 = require("../../ioc");
/**
 * @remarks
 * {@link https://crontab.guru/ | crontab guru}
 * {@link https://github.com/kelektiv/node-cron | node-cron}
 *
 * @export
 * @class CronJob
 * @implements {Job}
 */
let CronJob = class CronJob {
    constructor() {
        /**
         * @private
         * @type {string}
         * @memberof CronJob
         */
        this.expression = "* * * * *";
    }
    /**
     * @param {Function} callback
     * @memberof CronJob
     */
    execute(callback) {
        const onCallback = () => {
            const start = perf_hooks_1.performance.now();
            // @ts-ignore
            callback();
            this.events.dispatch(enums_1.ScheduleEvent.CronJobFinished, {
                executionTime: perf_hooks_1.performance.now() - start,
                expression: this.expression,
            });
        };
        new cron_1.CronJob(this.expression, onCallback).start();
    }
    /**
     * The Cron expression representing the job's frequency.
     *
     * @param {string} expression
     * @returns {this}
     * @memberof CronJob
     */
    cron(expression) {
        this.expression = expression;
        return this;
    }
    /**
     * Schedule the job to run every minute.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyMinute() {
        return this.setMinute("*");
    }
    /**
     * Schedule the job to run every five minutes.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyFiveMinutes() {
        return this.setMinute("*/5");
    }
    /**
     * Schedule the job to run every ten minutes.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyTenMinutes() {
        return this.setMinute("*/10");
    }
    /**
     * Schedule the job to run every fifteen minutes.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyFifteenMinutes() {
        return this.setMinute("*/15");
    }
    /**
     * Schedule the job to run every thirty minutes.
     *
     * @returns {this}
     * @memberof CronJob
     */
    everyThirtyMinutes() {
        return this.setMinute("*/30");
    }
    /**
     * Schedule the job to run hourly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    hourly() {
        return this.setMinute("0");
    }
    /**
     * Schedule the job to run hourly at a given offset in the hour.
     *
     * @param {string} minute
     * @returns {this}
     * @memberof CronJob
     */
    hourlyAt(minute) {
        return this.setMinute(minute);
    }
    /**
     * Schedule the job to run daily.
     *
     * @returns {this}
     * @memberof CronJob
     */
    daily() {
        return this.setMinute("0").setHour("0");
    }
    /**
     * Schedule the job to run daily at a given time (10:00, 19:30, etc).
     *
     * @param {string} hour
     * @param {string} minute
     * @returns {this}
     * @memberof CronJob
     */
    dailyAt(hour, minute) {
        return this.setMinute(minute).setHour(hour);
    }
    /**
     * Schedule the job to run only on weekdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    weekdays() {
        return this.setMinute("0").setHour("0").setDayWeek("1-5");
    }
    /**
     * Schedule the job to run only on weekends.
     *
     * @returns {this}
     * @memberof CronJob
     */
    weekends() {
        return this.setMinute("0").setHour("0").setDayWeek("6,0");
    }
    /**
     * Schedule the job to run only on Mondays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    mondays() {
        return this.setMinute("0").setHour("0").setDayWeek("MON");
    }
    /**
     * Schedule the job to run only on Tuesdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    tuesdays() {
        return this.setMinute("0").setHour("0").setDayWeek("TUE");
    }
    /**
     * Schedule the job to run only on Wednesdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    wednesdays() {
        return this.setMinute("0").setHour("0").setDayWeek("WED");
    }
    /**
     * Schedule the job to run only on Thursdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    thursdays() {
        return this.setMinute("0").setHour("0").setDayWeek("THU");
    }
    /**
     * Schedule the job to run only on Fridays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    fridays() {
        return this.setMinute("0").setHour("0").setDayWeek("FRI");
    }
    /**
     * Schedule the job to run only on Saturdays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    saturdays() {
        return this.setMinute("0").setHour("0").setDayWeek("SAT");
    }
    /**
     * Schedule the job to run only on Sundays.
     *
     * @returns {this}
     * @memberof CronJob
     */
    sundays() {
        return this.setMinute("0").setHour("0").setDayWeek("SUN");
    }
    /**
     * Schedule the job to run weekly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    weekly() {
        return this.setMinute("0").setHour("0").setDayWeek("0");
    }
    /**
     * Schedule the job to run weekly on a given day and time.
     *
     * @param {string} day
     * @param {string} hour
     * @param {string} minute
     * @returns {this}
     * @memberof CronJob
     */
    weeklyOn(day, hour, minute) {
        return this.setMinute(minute).setHour(hour).setDayWeek(day);
    }
    /**
     * Schedule the job to run monthly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    monthly() {
        return this.setMinute("0").setHour("0").setDayMonth("1");
    }
    /**
     * Schedule the job to run monthly on a given day and time.
     *
     * @param {string} day
     * @param {string} hour
     * @param {string} minute
     * @returns {this}
     * @memberof CronJob
     */
    monthlyOn(day, hour, minute) {
        return this.setMinute(minute).setHour(hour).setDayMonth(day);
    }
    /**
     * Schedule the job to run quarterly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    quarterly() {
        return this.setMinute("0").setHour("0").setDayMonth("1").setMonth("*/3");
    }
    /**
     * Schedule the job to run yearly.
     *
     * @returns {this}
     * @memberof CronJob
     */
    yearly() {
        return this.setMinute("0").setHour("0").setDayMonth("1").setMonth("1");
    }
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    setMinute(value) {
        return this.spliceIntoPosition(0, value);
    }
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    setHour(value) {
        return this.spliceIntoPosition(1, value);
    }
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    setDayMonth(value) {
        return this.spliceIntoPosition(2, value);
    }
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    setMonth(value) {
        return this.spliceIntoPosition(3, value);
    }
    /**
     * @private
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    setDayWeek(value) {
        return this.spliceIntoPosition(4, value);
    }
    /**
     * Splice the given value into the given position of the expression.
     *
     * @private
     * @param {number} position
     * @param {string} value
     * @returns {this}
     * @memberof CronJob
     */
    spliceIntoPosition(position, value) {
        const segments = this.expression.split(" ");
        segments[position] = value;
        return this.cron(segments.join(" "));
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.EventDispatcherService),
    __metadata("design:type", Object)
], CronJob.prototype, "events", void 0);
CronJob = __decorate([
    ioc_1.injectable()
], CronJob);
exports.CronJob = CronJob;
//# sourceMappingURL=cron-job.js.map