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
exports.RegisterBaseBindings = void 0;
const path_1 = require("path");
const ioc_1 = require("../../ioc");
const utils_1 = require("../../utils");
/**
 * @export
 * @class RegisterBaseBindings
 * @implements {Bootstrapper}
 */
let RegisterBaseBindings = class RegisterBaseBindings {
    /**
     * @param {Kernel.Application} app
     * @returns {Promise<void>}
     * @memberof RegisterBaseBindings
     */
    async bootstrap() {
        const flags = this.app.config("app.flags");
        const { version } = require(path_1.resolve(__dirname, "../../../package.json"));
        utils_1.assert.defined(flags);
        this.app.bind(ioc_1.Identifiers.ApplicationEnvironment).toConstantValue(flags.env);
        this.app.bind(ioc_1.Identifiers.ApplicationToken).toConstantValue(flags.token);
        this.app.bind(ioc_1.Identifiers.ApplicationNetwork).toConstantValue(flags.network);
        this.app.bind(ioc_1.Identifiers.ApplicationVersion).toConstantValue(version);
        // @todo: implement a getter/setter that sets vars locally and in the process.env variables
        process.env.CORE_ENV = flags.env;
        // process.env.NODE_ENV = process.env.CORE_ENV;
        process.env.CORE_TOKEN = flags.token;
        process.env.CORE_NETWORK_NAME = flags.network;
        process.env.CORE_VERSION = version;
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], RegisterBaseBindings.prototype, "app", void 0);
RegisterBaseBindings = __decorate([
    ioc_1.injectable()
], RegisterBaseBindings);
exports.RegisterBaseBindings = RegisterBaseBindings;
//# sourceMappingURL=register-base-bindings.js.map