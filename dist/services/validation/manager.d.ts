import { Validator } from "../../contracts/kernel/validation";
import { InstanceManager } from "../../support/instance-manager";
/**
 * @export
 * @class ValidationManager
 * @extends {Manager<Validator>}
 */
export declare class ValidationManager extends InstanceManager<Validator> {
    /**
     * Create an instance of the Joi driver.
     *
     * @protected
     * @returns {Validator}
     * @memberof ValidationManager
     */
    protected createJoiDriver(): Validator;
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof ValidationManager
     */
    protected getDefaultDriver(): string;
}
