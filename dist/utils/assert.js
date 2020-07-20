"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = void 0;
const crypto_1 = require("@arkecosystem/crypto");
const runtime_1 = require("../exceptions/runtime");
const assertType = (condition, description) => {
    if (!condition) {
        throw new runtime_1.AssertionException(`Expected value which is "${description}".`);
    }
};
/**
 * Type assertions have to be declared with an explicit type.
 */
exports.assert = {
    array: (value) => {
        return assertType(Array.isArray(value), "array");
    },
    bigint: (value) => {
        return assertType(typeof value === "bigint", "bigint");
    },
    block: (value) => {
        return assertType(value instanceof crypto_1.Blocks.Block, "Crypto.Blocks.Block");
    },
    boolean: (value) => {
        return assertType(typeof value === "boolean", "boolean");
    },
    buffer: (value) => {
        return assertType(value instanceof Buffer, "buffer");
    },
    defined: (value) => {
        return assertType(value !== undefined && value !== null, "non-null and non-undefined");
    },
    number: (value) => {
        return assertType(typeof value === "number", "number");
    },
    object: (value) => {
        return assertType(typeof value === "object", "object");
    },
    string: (value) => {
        return assertType(typeof value === "string", "string");
    },
    symbol: (value) => {
        return assertType(typeof value === "symbol", "symbol");
    },
    transaction: (value) => {
        return assertType(value instanceof crypto_1.Transactions.Transaction, "Crypto.Transactions.Transaction");
    },
    undefined: (value) => {
        return assertType(typeof value === "undefined", "undefined");
    },
};
//# sourceMappingURL=assert.js.map