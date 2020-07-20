import { Validator } from "../../../contracts/kernel/validation";
import { JsonObject } from "../../../types";
/**
 * @export
 * @class JoiValidator
 * @implements {Validator}
 */
export declare class NullValidator implements Validator {
    /**
     * Run the schema against the given data.
     *
     * @param {JsonObject} data
     * @param {object} schema
     * @memberof JoiValidator
     */
    validate(data: JsonObject, schema: object): void;
    /**
     * Determine if the data passes the validation rules.
     *
     * @returns {boolean}
     * @memberof Validator
     */
    passes(): boolean;
    /**
     * Determine if the data fails the validation rules.
     *
     * @returns {boolean}
     * @memberof Validator
     */
    fails(): boolean;
    /**
     * Get the failed validation rules.
     *
     * @returns {Record<string, string[]>}
     * @memberof Validator
     */
    failed(): Record<string, string[]>;
    /**
     * Get all of the validation error messages.
     *
     * @returns {Record<string, string[]>}
     * @memberof Validator
     */
    errors(): Record<string, string[]>;
    /**
     * Returns the data which was valid.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    valid(): JsonObject | undefined;
    /**
     * Returns the data which was invalid.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    invalid(): JsonObject;
    /**
     * Get the data under validation.
     *
     * @returns {JsonObject}
     * @memberof Validator
     */
    attributes(): JsonObject;
}
