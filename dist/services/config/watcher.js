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
exports.Watcher = void 0;
const nsfw_1 = __importDefault(require("nsfw"));
const ioc_1 = require("../../ioc");
/**
 * @export
 * @class Watcher
 */
let Watcher = class Watcher {
    /**
     * @returns {Promise<void>}
     * @memberof Watcher
     */
    async boot() {
        const configFiles = [".env", "delegates.json", "peers.json", "plugins.js", "plugins.json"];
        this.watcher = await nsfw_1.default(this.app.configPath(), (events) => {
            for (const event of events) {
                if (event.action === 2 /* MODIFIED */ && configFiles.includes(event.file)) {
                    this.app.reboot();
                    break;
                }
            }
        });
        await this.watcher.start();
    }
    /**
     * @returns {Promise<void>}
     * @memberof Watcher
     */
    async dispose() {
        return this.watcher.stop();
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], Watcher.prototype, "app", void 0);
Watcher = __decorate([
    ioc_1.injectable()
], Watcher);
exports.Watcher = Watcher;
//# sourceMappingURL=watcher.js.map