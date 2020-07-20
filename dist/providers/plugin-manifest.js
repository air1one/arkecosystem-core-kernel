"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginManifest = void 0;
const utils_1 = require("@arkecosystem/utils");
const ioc_1 = require("../ioc");
/**
 * @export
 * @class PluginManifest
 */
let PluginManifest = class PluginManifest {
    /**
     * Get the manifest for the given package.
     *
     * @param {string} name
     * @returns {this}
     * @memberof PluginManifest
     */
    discover(name) {
        this.manifest = require(`${name}/package.json`);
        return this;
    }
    /**
     * Get the specified manifest value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {T}
     * @memberof PluginManifest
     */
    get(key, defaultValue) {
        return utils_1.get(this.manifest, key, defaultValue);
    }
    /**
     * Determine if the given manifest value exists.
     *
     * @param {string} key
     * @returns {boolean}
     * @memberof PluginManifest
     */
    has(key) {
        return utils_1.has(this.manifest, key);
    }
    /**
     * @param {PackageJson} manifest
     * @memberof PluginManifest
     */
    merge(manifest) {
        this.manifest = { ...this.manifest, ...manifest };
        return this;
    }
};
PluginManifest = __decorate([
    ioc_1.injectable()
], PluginManifest);
exports.PluginManifest = PluginManifest;
//# sourceMappingURL=plugin-manifest.js.map