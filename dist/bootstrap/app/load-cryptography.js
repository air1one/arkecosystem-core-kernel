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
exports.LoadCryptography = void 0;
const crypto_1 = require("@arkecosystem/crypto");
const ioc_1 = require("../../ioc");
const config_1 = require("../../services/config");
const utils_1 = require("../../utils");
/**
 * @export
 * @class LoadCryptography
 * @implements {Bootstrapper}
 */
let LoadCryptography = class LoadCryptography {
    /**
     * @returns {Promise<void>}
     * @memberof LoadCryptography
     */
    async bootstrap() {
        this.configRepository.hasAll([
            "crypto.genesisBlock",
            "crypto.exceptions",
            "crypto.milestones",
            "crypto.network",
        ])
            ? this.fromConfigRepository()
            : this.fromPreset();
        const networkConfig = crypto_1.Managers.configManager.all();
        utils_1.assert.defined(networkConfig);
        this.app.bind(ioc_1.Identifiers.Crypto).toConstantValue(networkConfig);
    }
    /**
     * @private
     * @memberof LoadCryptography
     */
    fromPreset() {
        crypto_1.Managers.configManager.setFromPreset(this.app.network());
    }
    /**
     * @private
     * @memberof LoadCryptography
     */
    fromConfigRepository() {
        crypto_1.Managers.configManager.set("genesisBlock", this.configRepository.get("crypto.genesisBlock"));
        crypto_1.Managers.configManager.set("exceptions", this.configRepository.get("crypto.exceptions"));
        crypto_1.Managers.configManager.set("milestones", this.configRepository.get("crypto.milestones"));
        crypto_1.Managers.configManager.set("network", this.configRepository.get("crypto.network"));
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], LoadCryptography.prototype, "app", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ConfigRepository),
    __metadata("design:type", config_1.ConfigRepository)
], LoadCryptography.prototype, "configRepository", void 0);
LoadCryptography = __decorate([
    ioc_1.injectable()
], LoadCryptography);
exports.LoadCryptography = LoadCryptography;
//# sourceMappingURL=load-cryptography.js.map