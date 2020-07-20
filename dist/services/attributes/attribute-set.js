"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeSet = void 0;
const assert_1 = require("assert");
const ioc_1 = require("../../ioc");
let AttributeSet = class AttributeSet {
    constructor() {
        /**
         * @private
         * @type {Set<string>}
         * @memberof AttributeSet
         */
        this.attributes = new Set();
    }
    /**
     * @returns {string[]}
     * @memberof AttributeSet
     */
    all() {
        return [...this.attributes];
    }
    /**
     * @param {string} attribute
     * @returns {boolean}
     * @memberof AttributeSet
     */
    set(attribute) {
        assert_1.strictEqual(this.attributes.has(attribute), false, `Duplicated attribute: ${attribute}`);
        this.attributes.add(attribute);
        return this.has(attribute);
    }
    /**
     * @param {string} attribute
     * @returns {boolean}
     * @memberof AttributeSet
     */
    forget(attribute) {
        assert_1.strictEqual(this.attributes.has(attribute), true, `Unknown attribute: ${attribute}`);
        this.attributes.delete(attribute);
        return !this.has(attribute);
    }
    /**
     * @returns {boolean}
     * @memberof AttributeSet
     */
    flush() {
        this.attributes.clear();
        return this.attributes.size === 0;
    }
    /**
     * @param {string} attribute
     * @returns {boolean}
     * @memberof AttributeSet
     */
    has(attribute) {
        return this.attributes.has(attribute);
    }
};
AttributeSet = __decorate([
    ioc_1.injectable()
], AttributeSet);
exports.AttributeSet = AttributeSet;
//# sourceMappingURL=attribute-set.js.map