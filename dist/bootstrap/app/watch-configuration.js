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
exports.WatchConfiguration = void 0;
const ioc_1 = require("../../ioc");
const watcher_1 = require("../../services/config/watcher");
/**
 * @export
 * @class WatchConfiguration
 * @implements {Bootstrapper}
 */
let WatchConfiguration = class WatchConfiguration {
    /**
     * @returns {Promise<void>}
     * @memberof WatchConfiguration
     */
    async bootstrap() {
        await this.app.resolve(watcher_1.Watcher).boot();
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], WatchConfiguration.prototype, "app", void 0);
WatchConfiguration = __decorate([
    ioc_1.injectable()
], WatchConfiguration);
exports.WatchConfiguration = WatchConfiguration;
//# sourceMappingURL=watch-configuration.js.map