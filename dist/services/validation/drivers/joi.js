"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidator = void 0;
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class JoiValidator
 * @implements {Validator}
 */
let JoiValidator = class JoiValidator {
    /**
     * Run the schema against the given data.
     *
     * @param {JsonObject} data
     * @param {object} schema
     * @memberof JoiValidator
     */
    validate(data, schema) {
        this.data = data;
        const { error, value } = schema.validate(this.data);
        this.resultValue = error ? undefined : value;
        if (error) {
            this.resultError = error.details;
        }
    }
    /**
     * Determine if the data passes the validation rules.
     *
     * @returns {boolean}
     * @memberof Validator
     */
    passes() {
        return !this.resultError;
    }
    /**
     * Determine if the data fails the validation rules.
     *
     * @returns {boolean}
     * @memberof Validator
     */
    fails() {
        return !this.passes();
    }
    /**
     * Get the failed validation rules.
     *
     * @returns {Record<string, string[]>}
     * @memberof Validator
     */
    failed() {
        return this.groupErrors("type");
    }
    /**
     * Get all of the validation error messages.
     *
     * @returns {Record<string, string[]>}
     * @memberof Validator
     */
    errors() {
        return this.groupErrors("message");
    }
    /**
     * Returns the data which was valid.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    valid() {
        return this.resultValue;
    }
    /**
     * Returns the data which was invalid.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    invalid() {
        const errors = {};
        if (!this.resultError) {
            return errors;
        }
        for (const error of this.resultError) {
            if (error.context && error.context.key) {
                errors[error.context.key] = error.context.value;
            }
        }
        return errors;
    }
    /**
     * Get the data under validation.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    attributes() {
        return this.data;
    }
    /**
     * @private
     * @param {string} attribute
     * @returns {Record<string, string[]>}
     * @memberof JoiValidator
     */
    groupErrors(attribute) {
        const errors = {};
        if (!this.resultError) {
            return errors;
        }
        for (const error of this.resultError) {
            const errorKey = error.path[0];
            if (!Array.isArray(errors[errorKey])) {
                errors[errorKey] = [];
            }
            errors[errorKey].push(error[attribute]);
        }
        return errors;
    }
};
JoiValidator = __decorate([
    ioc_1.injectable()
], JoiValidator);
exports.JoiValidator = JoiValidator;
//# sourceMappingURL=joi.js.map