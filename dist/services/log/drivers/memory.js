"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryLogger = void 0;
const utils_1 = require("@arkecosystem/utils");
const chalk_1 = __importDefault(require("chalk"));
const dayjs_1 = __importDefault(require("dayjs"));
const advancedFormat_1 = __importDefault(require("dayjs/plugin/advancedFormat"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const util_1 = require("util");
const ioc_1 = require("../../../ioc");
dayjs_1.default.extend(advancedFormat_1.default);
dayjs_1.default.extend(utc_1.default);
let MemoryLogger = class MemoryLogger {
    constructor() {
        /**
         * @private
         * @type {Record<string, Chalk>}
         * @memberof MemoryLogger
         */
        this.levelStyles = {
            emergency: chalk_1.default.bgRed,
            alert: chalk_1.default.red,
            critical: chalk_1.default.red,
            error: chalk_1.default.red,
            warning: chalk_1.default.yellow,
            notice: chalk_1.default.green,
            info: chalk_1.default.blue,
            debug: chalk_1.default.magenta,
        };
        /**
         * @private
         * @type {boolean}
         * @memberof MemoryLogger
         */
        this.silentConsole = false;
        /**
         * @private
         * @type {Dayjs}
         * @memberof MemoryLogger
         */
        this.lastTimestamp = dayjs_1.default().utc();
    }
    /**
     * @param {*} [options]
     * @returns {Promise<Logger>}
     * @memberof MemoryLogger
     */
    async make(options) {
        return this;
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    emergency(message) {
        this.log("emergency", message);
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    alert(message) {
        this.log("alert", message);
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    critical(message) {
        this.log("critical", message);
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    error(message) {
        this.log("error", message);
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    warning(message) {
        this.log("warning", message);
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    notice(message) {
        this.log("notice", message);
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    info(message) {
        this.log("info", message);
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    debug(message) {
        this.log("debug", message);
    }
    /**
     * @param {boolean} suppress
     * @memberof MemoryLogger
     */
    suppressConsoleOutput(suppress) {
        this.silentConsole = suppress;
    }
    /**
     * @private
     * @param {*} level
     * @param {*} message
     * @returns {void}
     * @memberof MemoryLogger
     */
    log(level, message) {
        if (this.silentConsole) {
            return;
        }
        if (utils_1.isEmpty(message)) {
            return;
        }
        if (typeof message !== "string") {
            message = util_1.inspect(message, { depth: 1 });
        }
        level = level ? this.levelStyles[level](`[${level.toUpperCase()}] `) : "";
        const timestamp = dayjs_1.default.utc().format("YYYY-MM-DD HH:MM:ss.SSS");
        const timestampDiff = this.getTimestampDiff();
        process.stdout.write(`[${timestamp}] ${level}${message}${timestampDiff}\n`);
    }
    /**
     * @private
     * @returns {string}
     * @memberof MemoryLogger
     */
    getTimestampDiff() {
        const diff = this.lastTimestamp ? dayjs_1.default().diff(this.lastTimestamp) : 0;
        this.lastTimestamp = dayjs_1.default.utc();
        return chalk_1.default.yellow(` +${diff ? utils_1.prettyTime(diff) : "0ms"}`);
    }
};
MemoryLogger = __decorate([
    ioc_1.injectable()
], MemoryLogger);
exports.MemoryLogger = MemoryLogger;
//# sourceMappingURL=memory.js.map