"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triggers = void 0;
const logic_1 = require("../../exceptions/logic");
const ioc_1 = require("../../ioc");
const utils_1 = require("../../utils");
/**
 * @export
 * @class Triggers
 */
let Triggers = class Triggers {
    constructor() {
        /**
         * All of the registered triggers.
         *
         * @private
         * @type {Map<string, Action>}
         * @memberof Actions
         */
        this.triggers = new Map();
    }
    /**
     * Register a new trigger.
     *
     * @param {string} name
     * @param {Function} fn
     * @returns {Action}
     * @memberof Actions
     */
    bind(name, action) {
        if (this.triggers.has(name)) {
            throw new logic_1.InvalidArgumentException(`The given trigger [${name}] is already registered.`);
        }
        if (this.usesReservedBindingName(name)) {
            throw new logic_1.InvalidArgumentException(`The given trigger [${name}] is reserved.`);
        }
        this.triggers.set(name, action);
        return action;
    }
    /**
     * Get an trigger.
     *
     * @param {string} name
     * @returns {Action}
     * @memberof Actions
     */
    get(name) {
        this.throwIfActionIsMissing(name);
        const trigger = this.triggers.get(name);
        utils_1.assert.defined(trigger);
        return trigger;
    }
    // TODO: Check implementation
    // TODO: Add in documentation: how errors are handled, which data can each hook type expect.
    /**
     * Call an trigger by the given name and execute its hooks in sequence.
     *
     * @template T
     * @param {string} name
     * @param {...Array<any>} args
     * @returns {(Promise<T | undefined>)}
     * @memberof Actions
     */
    async call(name, args = {}) {
        this.throwIfActionIsMissing(name);
        let stage = "before";
        let result;
        try {
            await this.callBeforeHooks(name, args);
            stage = "execute";
            result = await this.get(name).execute(args);
            stage = "after";
            await this.callAfterHooks(name, args, result);
        }
        catch (err) {
            // Handle errors inside error hooks. Rethrow error if there are no error hooks.
            if (this.get(name).hooks("error").size) {
                await this.callErrorHooks(name, args, result, err, stage);
            }
            else {
                throw err;
            }
        }
        return result;
    }
    /**
     * Call all before hooks for the given trigger in sequence.
     *
     * @private
     * @param {string} type
     * @param {string} trigger
     * @param args
     * @param resultOrError
     * @returns {Promise<void>}
     * @memberof Actions
     */
    async callBeforeHooks(trigger, args) {
        const hooks = this.get(trigger).hooks("before");
        for (const hook of [...hooks]) {
            await hook(args);
        }
    }
    /**
     * Call all after hooks for the given trigger in sequence.
     *
     * @private
     * @param {string} trigger
     * @param args
     * @param result
     * @returns {Promise<void>}
     * @memberof Actions
     */
    async callAfterHooks(trigger, args, result) {
        const hooks = this.get(trigger).hooks("after");
        for (const hook of [...hooks]) {
            await hook(args, result);
        }
    }
    /**
     * Call all error hooks for the given trigger in sequence.
     *
     * @private
     * @param {string} trigger
     * @param args
     * @param result
     * @param err
     * @param stage
     * @returns {Promise<void>}
     * @memberof Actions
     */
    async callErrorHooks(trigger, args, result, err, stage) {
        const hooks = this.get(trigger).hooks("error");
        for (const hook of [...hooks]) {
            await hook(args, result, err, stage);
        }
    }
    /**
     * Throw an exception if the given trigger doesn't exist.
     *
     * @private
     * @param {string} name
     * @memberof Actions
     */
    throwIfActionIsMissing(name) {
        if (!this.triggers.has(name)) {
            throw new logic_1.InvalidArgumentException(`The given trigger [${name}] is not available.`);
        }
    }
    /**
     * Determine if the given trigger name is reserved.
     *
     * @private
     * @param {string} name
     * @returns {boolean}
     * @memberof Container
     */
    usesReservedBindingName(name) {
        const prefixes = ["internal."];
        for (const prefix of prefixes) {
            if (name.startsWith(prefix)) {
                return true;
            }
        }
        return false;
    }
};
Triggers = __decorate([
    ioc_1.injectable()
], Triggers);
exports.Triggers = Triggers;
//# sourceMappingURL=triggers.js.map