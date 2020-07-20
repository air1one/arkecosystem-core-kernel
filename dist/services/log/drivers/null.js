"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullLogger = void 0;
const ioc_1 = require("../../../ioc");
let NullLogger = class NullLogger {
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
        //
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    alert(message) {
        //
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    critical(message) {
        //
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    error(message) {
        //
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    warning(message) {
        //
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    notice(message) {
        //
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    info(message) {
        //
    }
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    debug(message) {
        //
    }
    /**
     * @param {boolean} suppress
     * @memberof MemoryLogger
     */
    suppressConsoleOutput(suppress) {
        //
    }
};
NullLogger = __decorate([
    ioc_1.injectable()
], NullLogger);
exports.NullLogger = NullLogger;
//# sourceMappingURL=null.js.map