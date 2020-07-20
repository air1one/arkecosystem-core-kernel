import { InvalidArgumentException, OutOfRangeException } from "./logic";
import { RuntimeException } from "./runtime";
/**
 * @export
 * @class InvalidPluginConfiguration
 * @extends {InvalidArgumentException}
 */
export declare class InvalidPluginConfiguration extends InvalidArgumentException {
    /**
     * @param {string} name
     * @param {Record<string, string[]>} errors
     * @memberof InvalidPluginConfiguration
     */
    constructor(name: string, errors: Record<string, string[]>);
}
/**
 * @export
 * @class ServiceProviderCannotBeRegistered
 * @extends {RuntimeException}
 */
export declare class ServiceProviderCannotBeRegistered extends RuntimeException {
    /**
     * @param {string} name
     * @param {string} error
     * @memberof ServiceProviderCannotBeRegistered
     */
    constructor(name: string, error: string);
}
/**
 * @export
 * @class ServiceProviderCannotBeBooted
 * @extends {RuntimeException}
 */
export declare class ServiceProviderCannotBeBooted extends RuntimeException {
    /**
     * @param {string} name
     * @param {string} error
     * @memberof ServiceProviderCannotBeBooted
     */
    constructor(name: string, error: string);
}
/**
 * @export
 * @class DependencyVersionOutOfRange
 * @extends {OutOfRangeException}
 */
export declare class DependencyVersionOutOfRange extends OutOfRangeException {
    /**
     * @param {string} dep
     * @param {string} expected
     * @param {string} given
     * @memberof DependencyVersionOutOfRange
     */
    constructor(dep: string, expected: string, given: string);
}
/**
 * @export
 * @class OptionalDependencyCannotBeFound
 * @extends {RuntimeException}
 */
export declare class OptionalDependencyCannotBeFound extends RuntimeException {
    /**
     * @param {string} serviceProvider
     * @param {string} dependency
     * @memberof OptionalDependencyCannotBeFound
     */
    constructor(serviceProvider: string, dependency: string);
}
/**
 * @export
 * @class RequiredDependencyCannotBeFound
 * @extends {RuntimeException}
 */
export declare class RequiredDependencyCannotBeFound extends RuntimeException {
    /**
     * @param {string} serviceProvider
     * @param {string} dependency
     * @memberof RequiredDependencyCannotBeFound
     */
    constructor(serviceProvider: string, dependency: string);
}
/**
 * @export
 * @class InvalidVersion
 * @extends {InvalidArgumentException}
 */
export declare class InvalidVersion extends InvalidArgumentException {
    /**
     * @param {string} version
     * @memberof InvalidVersion
     */
    constructor(version: string);
}
/**
 * @export
 * @class UnsupportedVersionConstraint
 * @extends {RuntimeException}
 */
export declare class UnsupportedVersionConstraint extends RuntimeException {
    /**
     * @param {string} version
     * @memberof InvalidVersion
     */
    constructor(version: string);
}
