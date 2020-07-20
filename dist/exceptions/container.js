"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverCannotBeResolved = exports.InvalidBindingName = exports.ServiceNotFound = exports.ParameterNotFound = exports.BindingResolution = exports.EntryNotFound = exports.ContainerException = void 0;
const base_1 = require("./base");
/**
 * @export
 * @class ContainerException
 * @extends {Exception}
 */
class ContainerException extends base_1.Exception {
}
exports.ContainerException = ContainerException;
/**
 * @export
 * @class EntryNotFound
 * @extends {ContainerException}
 */
class EntryNotFound extends ContainerException {
}
exports.EntryNotFound = EntryNotFound;
/**
 * @export
 * @class BindingResolution
 * @extends {ContainerException}
 */
class BindingResolution extends ContainerException {
}
exports.BindingResolution = BindingResolution;
/**
 * @export
 * @class ParameterNotFound
 * @extends {ContainerException}
 */
class ParameterNotFound extends ContainerException {
}
exports.ParameterNotFound = ParameterNotFound;
/**
 * @export
 * @class ServiceNotFound
 * @extends {ContainerException}
 */
class ServiceNotFound extends ContainerException {
}
exports.ServiceNotFound = ServiceNotFound;
/**
 * @export
 * @class InvalidBindingName
 * @extends {KernelException}
 */
class InvalidBindingName extends ContainerException {
    /**
     * @param {string} name
     * @memberof InvalidBindingName
     */
    constructor(name) {
        super(`The name [${name}] is reserved.`);
    }
}
exports.InvalidBindingName = InvalidBindingName;
/**
 * @export
 * @class DriverCannotBeResolved
 * @extends {RuntimeException}
 */
class DriverCannotBeResolved extends ContainerException {
    /**
     * @param {string} name
     * @memberof DriverCannotBeResolved
     */
    constructor(name) {
        super(`Unable to resolve driver for [${name}].'`);
    }
}
exports.DriverCannotBeResolved = DriverCannotBeResolved;
//# sourceMappingURL=container.js.map