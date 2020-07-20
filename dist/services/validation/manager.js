"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationManager = void 0;
const instance_manager_1 = require("../../support/instance-manager");
const joi_1 = require("./drivers/joi");
/**
 * @export
 * @class ValidationManager
 * @extends {Manager<Validator>}
 */
class ValidationManager extends instance_manager_1.InstanceManager {
    /**
     * Create an instance of the Joi driver.
     *
     * @protected
     * @returns {Validator}
     * @memberof ValidationManager
     */
    createJoiDriver() {
        return this.app.resolve(joi_1.JoiValidator);
    }
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof ValidationManager
     */
    getDefaultDriver() {
        return "joi";
    }
}
exports.ValidationManager = ValidationManager;
//# sourceMappingURL=manager.js.map