"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixinService = void 0;
const ioc_1 = require("../../ioc");
const utils_1 = require("../../utils");
let MixinService = class MixinService {
    constructor() {
        /**
         * @private
         * @type {Map<string, Function>}
         * @memberof MixinService
         */
        this.mixins = new Map();
    }
    /**
     * @param {string} name
     * @returns {Function}
     * @memberof MixinService
     */
    get(name) {
        const mixin = this.mixins.get(name);
        utils_1.assert.defined(mixin);
        return mixin;
    }
    /**
     * @param {string} name
     * @param {Function} macro
     * @memberof MixinService
     */
    set(name, macro) {
        this.mixins.set(name, macro);
    }
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof MixinService
     */
    forget(name) {
        return this.mixins.delete(name);
    }
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof MixinService
     */
    has(name) {
        return this.mixins.has(name);
    }
    /**
     * @template T
     * @param {(string | string[])} names
     * @param {Constructor<T>} value
     * @returns {Constructor<T>}
     * @memberof MixinService
     */
    apply(names, value) {
        if (!Array.isArray(names)) {
            names = [names];
        }
        let macroValue = this.get(names[0])(value);
        names.shift();
        for (const name of names) {
            macroValue = this.get(name)(macroValue);
        }
        return macroValue;
    }
};
MixinService = __decorate([
    ioc_1.injectable()
], MixinService);
exports.MixinService = MixinService;
//# sourceMappingURL=mixins.js.map