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
exports.RegisterBaseNamespace = void 0;
const config_1 = require("../../exceptions/config");
const ioc_1 = require("../../ioc");
/**
 * @export
 * @class RegisterBaseNamespace
 * @implements {Bootstrapper}
 */
let RegisterBaseNamespace = class RegisterBaseNamespace {
    /**
     * @returns {Promise<void>}
     * @memberof RegisterBaseNamespace
     */
    async bootstrap() {
        const token = this.app.token();
        const network = this.app.network();
        if (!token || !network) {
            throw new config_1.NetworkCannotBeDetermined();
        }
        this.app.bind(ioc_1.Identifiers.ApplicationNamespace).toConstantValue(`${token}-${network}`);
        this.app.bind(ioc_1.Identifiers.ApplicationDirPrefix).toConstantValue(`${token}/${network}`);
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], RegisterBaseNamespace.prototype, "app", void 0);
RegisterBaseNamespace = __decorate([
    ioc_1.injectable()
], RegisterBaseNamespace);
exports.RegisterBaseNamespace = RegisterBaseNamespace;
//# sourceMappingURL=register-base-namespace.js.map