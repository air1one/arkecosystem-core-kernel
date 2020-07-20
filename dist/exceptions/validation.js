"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFailed = void 0;
const logic_1 = require("./logic");
/**
 * @export
 * @class ValidationFailed
 * @extends {InvalidArgumentException}
 */
class ValidationFailed extends logic_1.InvalidArgumentException {
    constructor() {
        super("The given data was invalid.");
    }
}
exports.ValidationFailed = ValidationFailed;
//# sourceMappingURL=validation.js.map