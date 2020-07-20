"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeMap = void 0;
const utils_1 = require("@arkecosystem/utils");
const assert_1 = require("assert");
const utils_2 = require("../../utils");
class AttributeMap {
    /**
     * Creates an instance of AttributeMap.
     *
     * @param {AttributeSet} knownAttributes
     * @memberof AttributeMap
     */
    constructor(knownAttributes) {
        this.knownAttributes = knownAttributes;
        /**
         * @private
         * @type {object}
         * @memberof AttributeMap
         */
        this.attributes = {};
    }
    /**
     * @returns {object}
     * @memberof AttributeMap
     */
    all() {
        return this.attributes;
    }
    /**
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {(T | undefined)}
     * @memberof AttributeMap
     */
    get(key, defaultValue) {
        this.assertKnown(key);
        const value = utils_1.get(this.attributes, key, defaultValue);
        utils_2.assert.defined(value);
        return value;
    }
    /**
     * @template T
     * @param {string} key
     * @param {T} value
     * @returns {boolean}
     * @memberof AttributeMap
     */
    set(key, value) {
        this.assertKnown(key);
        utils_1.set(this.attributes, key, value);
        return this.has(key);
    }
    /**
     * @param {string} key
     * @returns {boolean}
     * @memberof AttributeMap
     */
    forget(key) {
        this.assertKnown(key);
        utils_1.unset(this.attributes, key);
        return !this.has(key);
    }
    /**
     * @returns {boolean}
     * @memberof AttributeMap
     */
    flush() {
        this.attributes = {};
        return Object.keys(this.attributes).length === 0;
    }
    /**
     * @param {string} key
     * @returns {boolean}
     * @memberof AttributeMap
     */
    has(key) {
        this.assertKnown(key);
        return utils_1.has(this.attributes, key);
    }
    /**
     * @private
     * @param {string} key
     * @memberof AttributeMap
     */
    assertKnown(key) {
        assert_1.strictEqual(this.knownAttributes.has(key), true, `Unknown attribute: ${key}`);
    }
}
exports.AttributeMap = AttributeMap;
//# sourceMappingURL=attribute-map.js.map