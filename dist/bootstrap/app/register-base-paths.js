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
exports.RegisterBasePaths = void 0;
const utils_1 = require("@arkecosystem/utils");
const env_paths_1 = __importDefault(require("env-paths"));
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const ioc_1 = require("../../ioc");
const config_1 = require("../../services/config");
const utils_2 = require("../../utils");
/**
 * @export
 * @class RegisterBasePaths
 * @implements {Bootstrapper}
 */
let RegisterBasePaths = class RegisterBasePaths {
    /**
     * @returns {Promise<void>}
     * @memberof RegisterBasePaths
     */
    async bootstrap() {
        const paths = Object.entries(env_paths_1.default(this.app.token(), { suffix: "core" }));
        for (let [type, path] of paths) {
            const processPath = process.env[`CORE_PATH_${type.toUpperCase()}`];
            if (processPath) {
                // 1. Check if a path is defined via process variables.
                path = processPath;
            }
            else if (this.configRepository.has(`app.flags.paths.${type}`)) {
                // 2. Check if a path is defined via configuration repository.
                path = this.configRepository.get(`app.flags.paths.${type}`);
            }
            else {
                // 3. If the default path is used we'll append the network name to it.
                path = `${path}/${this.app.network()}`;
            }
            path = path_1.resolve(utils_1.expandTilde(path));
            utils_2.assert.defined(path);
            fs_extra_1.ensureDirSync(path);
            utils_1.set(process.env, `CORE_PATH_${type.toUpperCase()}`, path);
            const pathMethod = utils_1.camelCase(`use_${type}_path`);
            utils_2.assert.defined(pathMethod);
            this.app[pathMethod](path);
            this.app.rebind(`path.${type}`).toConstantValue(path);
        }
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], RegisterBasePaths.prototype, "app", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ConfigRepository),
    __metadata("design:type", config_1.ConfigRepository)
], RegisterBasePaths.prototype, "configRepository", void 0);
RegisterBasePaths = __decorate([
    ioc_1.injectable()
], RegisterBasePaths);
exports.RegisterBasePaths = RegisterBasePaths;
//# sourceMappingURL=register-base-paths.js.map