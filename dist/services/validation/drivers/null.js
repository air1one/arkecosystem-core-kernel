"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullValidator = void 0;
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class JoiValidator
 * @implements {Validator}
 */
let NullValidator = class NullValidator {
    /**
     * Run the schema against the given data.
     *
     * @param {JsonObject} data
     * @param {object} schema
     * @memberof JoiValidator
     */
    validate(data, schema) {
        //
    }
    /**
     * Determine if the data passes the validation rules.
     *
     * @returns {boolean}
     * @memberof Validator
     */
    passes() {
        return false;
    }
    /**
     * Determine if the data fails the validation rules.
     *
     * @returns {boolean}
     * @memberof Validator
     */
    fails() {
        return true;
    }
    /**
     * Get the failed validation rules.
     *
     * @returns {Record<string, string[]>}
     * @memberof Validator
     */
    failed() {
        return {};
    }
    /**
     * Get all of the validation error messages.
     *
     * @returns {Record<string, string[]>}
     * @memberof Validator
     */
    errors() {
        return {};
    }
    /**
     * Returns the data which was valid.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    valid() {
        return undefined;
    }
    /**
     * Returns the data which was invalid.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    invalid() {
        return {};
    }
    /**
     * Get the data under validation.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    attributes() {
        return {};
    }
};
NullValidator = __decorate([
    ioc_1.injectable()
], NullValidator);
exports.NullValidator = NullValidator;
//# sourceMappingURL=null.js.map