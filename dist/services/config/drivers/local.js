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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalConfigLoader = void 0;
const utils_1 = require("@arkecosystem/utils");
const joi_1 = __importDefault(require("@hapi/joi"));
const fs_1 = require("fs");
const import_fresh_1 = __importDefault(require("import-fresh"));
const path_1 = require("path");
const config_1 = require("../../../exceptions/config");
const filesystem_1 = require("../../../exceptions/filesystem");
const ioc_1 = require("../../../ioc");
const utils_2 = require("../../../utils");
const repository_1 = require("../repository");
const processSchema = {
    flags: joi_1.default.array().items(joi_1.default.string()).optional(),
    services: joi_1.default.object().optional(),
    plugins: joi_1.default.array()
        .items(joi_1.default.object().keys({ package: joi_1.default.string(), options: joi_1.default.object().optional() }))
        .required(),
};
/**
 * @export
 * @class LocalConfigLoader
 * @implements {ConfigLoader}
 */
let LocalConfigLoader = class LocalConfigLoader {
    /**
     * @returns {Promise<void>}
     * @memberof LocalConfigLoader
     */
    async loadEnvironmentVariables() {
        try {
            const config = utils_1.dotenv.parseFile(this.app.environmentFile());
            for (const [key, value] of Object.entries(config)) {
                utils_1.set(process.env, key, value);
            }
        }
        catch (error) {
            throw new config_1.EnvironmentConfigurationCannotBeLoaded(error.message);
        }
    }
    /**
     * @returns {Promise<void>}
     * @memberof LocalConfigLoader
     */
    async loadConfiguration() {
        try {
            this.loadApplication();
            this.loadPeers();
            this.loadDelegates();
            this.loadCryptography();
        }
        catch (error) {
            throw new config_1.ApplicationConfigurationCannotBeLoaded(error.message);
        }
    }
    /**
     * @private
     * @returns {void}
     * @memberof LocalConfigLoader
     */
    loadApplication() {
        const processType = this.app.get(ioc_1.Identifiers.ConfigFlags).processType;
        this.validationService.validate(this.loadFromLocation(["app.json", "app.js"]), joi_1.default.object({
            core: joi_1.default.object().keys(processSchema).required(),
            relay: joi_1.default.object().keys(processSchema).required(),
            forger: joi_1.default.object().keys(processSchema).required(),
        }).unknown(true));
        if (this.validationService.fails()) {
            throw new Error(JSON.stringify(this.validationService.errors()));
        }
        this.configRepository.set("app.flags", {
            ...this.app.get(ioc_1.Identifiers.ConfigFlags),
            ...utils_1.get(this.validationService.valid(), `${processType}.flags`, {}),
        });
        this.configRepository.set("app.plugins", utils_1.get(this.validationService.valid(), `${processType}.plugins`, []));
    }
    /**
     * @private
     * @returns {void}
     * @memberof LocalConfigLoader
     */
    loadPeers() {
        this.validationService.validate(this.loadFromLocation(["peers.json"]), joi_1.default.object({
            list: joi_1.default.array()
                .items(joi_1.default.object().keys({
                ip: joi_1.default.string().ip().required(),
                port: joi_1.default.number().port().required(),
            }))
                .required(),
            sources: joi_1.default.array().items(joi_1.default.string().uri()).optional(),
        }));
        if (this.validationService.fails()) {
            throw new Error(JSON.stringify(this.validationService.errors()));
        }
        this.configRepository.set("peers", this.validationService.valid());
    }
    /**
     * @private
     * @returns {void}
     * @memberof LocalConfigLoader
     */
    loadDelegates() {
        this.validationService.validate(this.loadFromLocation(["delegates.json"]), joi_1.default.object({
            secrets: joi_1.default.array().items(joi_1.default.string()).optional(),
            bip38: joi_1.default.string().optional(),
        }));
        if (this.validationService.fails()) {
            throw new Error(JSON.stringify(this.validationService.errors()));
        }
        this.configRepository.set("delegates", this.validationService.valid());
    }
    /**
     * @private
     * @returns {void}
     * @memberof LocalConfigLoader
     */
    loadCryptography() {
        const files = ["genesisBlock", "exceptions", "milestones", "network"];
        for (const file of files) {
            if (!fs_1.existsSync(this.app.configPath(`crypto/${file}.json`))) {
                return;
            }
        }
        for (const file of files) {
            this.configRepository.set(`crypto.${file}`, this.loadFromLocation([`crypto/${file}.json`]));
        }
    }
    /**
     * @private
     * @param {string[]} files
     * @returns {KeyValuePair}
     * @memberof LocalConfigLoader
     */
    loadFromLocation(files) {
        for (const file of files) {
            const fullPath = this.app.configPath(file);
            if (fs_1.existsSync(fullPath)) {
                const config = path_1.extname(fullPath) === ".json"
                    ? JSON.parse(fs_1.readFileSync(fullPath).toString())
                    : import_fresh_1.default(fullPath);
                utils_2.assert.defined(config);
                return config;
            }
        }
        throw new filesystem_1.FileException(`Failed to discovery any files matching [${files.join(", ")}].`);
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], LocalConfigLoader.prototype, "app", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ConfigRepository),
    __metadata("design:type", repository_1.ConfigRepository)
], LocalConfigLoader.prototype, "configRepository", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ValidationService),
    __metadata("design:type", Object)
], LocalConfigLoader.prototype, "validationService", void 0);
LocalConfigLoader = __decorate([
    ioc_1.injectable()
], LocalConfigLoader);
exports.LocalConfigLoader = LocalConfigLoader;
//# sourceMappingURL=local.js.map