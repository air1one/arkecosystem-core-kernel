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
exports.BlockJob = void 0;
const crypto_1 = require("@arkecosystem/crypto");
const perf_hooks_1 = require("perf_hooks");
const enums_1 = require("../../enums");
const ioc_1 = require("../../ioc");
const listeners_1 = require("./listeners");
/**
 * @export
 * @class BlockJob
 * @implements {Job}
 */
let BlockJob = class BlockJob {
    constructor() {
        /**
         * @private
         * @type {number}
         * @memberof BlockJob
         */
        this.blockCount = 1;
    }
    /**
     * @param {Function} callback
     * @memberof BlockJob
     */
    execute(callback) {
        const onCallback = async () => {
            const start = perf_hooks_1.performance.now();
            await callback();
            await this.events.dispatch(enums_1.ScheduleEvent.BlockJobFinished, {
                executionTime: perf_hooks_1.performance.now() - start,
                blockCount: this.blockCount,
            });
        };
        this.events.listen(enums_1.BlockEvent.Received, new listeners_1.ExecuteCallbackWhenReady(onCallback, this.blockCount));
    }
    /**
     * The number of blocks representing the job's frequency.
     *
     * @param {number} blockCount
     * @returns {this}
     * @memberof BlockJob
     */
    cron(blockCount) {
        this.blockCount = blockCount;
        return this;
    }
    /**
     * Schedule the job to run every block.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyBlock() {
        return this.cron(1);
    }
    /**
     * Schedule the job to run every five blocks.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyFiveBlocks() {
        return this.cron(5);
    }
    /**
     * Schedule the job to run every ten blocks.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyTenBlocks() {
        return this.cron(10);
    }
    /**
     * Schedule the job to run every fifteen blocks.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyFifteenBlocks() {
        return this.cron(15);
    }
    /**
     * Schedule the job to run every thirty blocks.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyThirtyBlocks() {
        return this.cron(30);
    }
    /**
     * Schedule the job to run every round.
     *
     * @returns {this}
     * @memberof BlockJob
     */
    everyRound() {
        return this.cron(crypto_1.Managers.configManager.getMilestone().activeDelegates);
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.EventDispatcherService),
    __metadata("design:type", Object)
], BlockJob.prototype, "events", void 0);
BlockJob = __decorate([
    ioc_1.injectable()
], BlockJob);
exports.BlockJob = BlockJob;
//# sourceMappingURL=block-job.js.map