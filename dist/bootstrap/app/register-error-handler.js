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
exports.RegisterErrorHandler = void 0;
const log_process_errors_1 = __importDefault(require("log-process-errors"));
const ioc_1 = require("../../ioc");
/**
 * @export
 * @class RegisterErrorHandler
 * @implements {Bootstrapper}
 */
let RegisterErrorHandler = class RegisterErrorHandler {
    /**
     * @returns {Promise<void>}
     * @memberof RegisterErrorHandler
     */
    async bootstrap() {
        // todo: implement passing in of options and ensure handling of critical exceptions
        log_process_errors_1.default({ exitOn: [] });
    }
};
RegisterErrorHandler = __decorate([
    ioc_1.injectable()
], RegisterErrorHandler);
exports.RegisterErrorHandler = RegisterErrorHandler;
//# sourceMappingURL=register-error-handler.js.map