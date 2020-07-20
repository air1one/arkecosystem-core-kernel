"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedVersionConstraint = exports.InvalidVersion = exports.RequiredDependencyCannotBeFound = exports.OptionalDependencyCannotBeFound = exports.DependencyVersionOutOfRange = exports.ServiceProviderCannotBeBooted = exports.ServiceProviderCannotBeRegistered = exports.InvalidPluginConfiguration = void 0;
const logic_1 = require("./logic");
const runtime_1 = require("./runtime");
/**
 * @export
 * @class InvalidPluginConfiguration
 * @extends {InvalidArgumentException}
 */
class InvalidPluginConfiguration extends logic_1.InvalidArgumentException {
    /**
     * @param {string} name
     * @param {Record<string, string[]>} errors
     * @memberof InvalidPluginConfiguration
     */
    constructor(name, errors) {
        super(`[${name}] Failed to validate the configuration: "${JSON.stringify(errors, undefined, 4)}".`);
    }
}
exports.InvalidPluginConfiguration = InvalidPluginConfiguration;
/**
 * @export
 * @class ServiceProviderCannotBeRegistered
 * @extends {RuntimeException}
 */
class ServiceProviderCannotBeRegistered extends runtime_1.RuntimeException {
    /**
     * @param {string} name
     * @param {string} error
     * @memberof ServiceProviderCannotBeRegistered
     */
    constructor(name, error) {
        super(`[${name}] Failed to register: "${error}".`);
    }
}
exports.ServiceProviderCannotBeRegistered = ServiceProviderCannotBeRegistered;
/**
 * @export
 * @class ServiceProviderCannotBeBooted
 * @extends {RuntimeException}
 */
class ServiceProviderCannotBeBooted extends runtime_1.RuntimeException {
    /**
     * @param {string} name
     * @param {string} error
     * @memberof ServiceProviderCannotBeBooted
     */
    constructor(name, error) {
        super(`[${name}] Failed to boot: "${error}".`);
    }
}
exports.ServiceProviderCannotBeBooted = ServiceProviderCannotBeBooted;
/**
 * @export
 * @class DependencyVersionOutOfRange
 * @extends {OutOfRangeException}
 */
class DependencyVersionOutOfRange extends logic_1.OutOfRangeException {
    /**
     * @param {string} dep
     * @param {string} expected
     * @param {string} given
     * @memberof DependencyVersionOutOfRange
     */
    constructor(dep, expected, given) {
        super(`Expected "${dep}" to satisfy "${expected}" but received "${given}".`);
    }
}
exports.DependencyVersionOutOfRange = DependencyVersionOutOfRange;
/**
 * @export
 * @class OptionalDependencyCannotBeFound
 * @extends {RuntimeException}
 */
class OptionalDependencyCannotBeFound extends runtime_1.RuntimeException {
    /**
     * @param {string} serviceProvider
     * @param {string} dependency
     * @memberof OptionalDependencyCannotBeFound
     */
    constructor(serviceProvider, dependency) {
        super(`The "${serviceProvider}" package is missing. Please, make sure to install this library to take advantage of ${dependency}.`);
    }
}
exports.OptionalDependencyCannotBeFound = OptionalDependencyCannotBeFound;
/**
 * @export
 * @class RequiredDependencyCannotBeFound
 * @extends {RuntimeException}
 */
class RequiredDependencyCannotBeFound extends runtime_1.RuntimeException {
    /**
     * @param {string} serviceProvider
     * @param {string} dependency
     * @memberof RequiredDependencyCannotBeFound
     */
    constructor(serviceProvider, dependency) {
        super(`The "${serviceProvider}" package is required but missing. Please, make sure to install this library to take advantage of ${dependency}.`);
    }
}
exports.RequiredDependencyCannotBeFound = RequiredDependencyCannotBeFound;
/**
 * @export
 * @class InvalidVersion
 * @extends {InvalidArgumentException}
 */
class InvalidVersion extends logic_1.InvalidArgumentException {
    /**
     * @param {string} version
     * @memberof InvalidVersion
     */
    constructor(version) {
        super(`"${version}" is not a valid semantic version. Please check https://semver.org/ and make sure you follow the spec.`);
    }
}
exports.InvalidVersion = InvalidVersion;
/**
 * @export
 * @class UnsupportedVersionConstraint
 * @extends {RuntimeException}
 */
class UnsupportedVersionConstraint extends runtime_1.RuntimeException {
    /**
     * @param {string} version
     * @memberof InvalidVersion
     */
    constructor(version) {
        super(`"${version}" is not a valid semantic version. Please check https://semver.org/ and make sure you follow the spec.`);
    }
}
exports.UnsupportedVersionConstraint = UnsupportedVersionConstraint;
//# sourceMappingURL=plugins.js.map