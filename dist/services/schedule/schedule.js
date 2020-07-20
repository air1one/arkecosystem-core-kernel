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
exports.Schedule = void 0;
const ioc_1 = require("../../ioc");
const block_job_1 = require("./block-job");
const cron_job_1 = require("./cron-job");
/**
 * @export
 * @class Schedule
 */
let Schedule = class Schedule {
    /**
     * @returns {CronJob}
     * @memberof Schedule
     */
    cron() {
        return this.app.resolve(cron_job_1.CronJob);
    }
    /**
     * @returns {BlockJob}
     * @memberof Schedule
     */
    block() {
        return this.app.resolve(block_job_1.BlockJob);
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], Schedule.prototype, "app", void 0);
Schedule = __decorate([
    ioc_1.injectable()
], Schedule);
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.js.map