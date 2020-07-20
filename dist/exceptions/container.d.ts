import { Exception } from "./base";
/**
 * @export
 * @class ContainerException
 * @extends {Exception}
 */
export declare class ContainerException extends Exception {
}
/**
 * @export
 * @class EntryNotFound
 * @extends {ContainerException}
 */
export declare class EntryNotFound extends ContainerException {
}
/**
 * @export
 * @class BindingResolution
 * @extends {ContainerException}
 */
export declare class BindingResolution extends ContainerException {
}
/**
 * @export
 * @class ParameterNotFound
 * @extends {ContainerException}
 */
export declare class ParameterNotFound extends ContainerException {
}
/**
 * @export
 * @class ServiceNotFound
 * @extends {ContainerException}
 */
export declare class ServiceNotFound extends ContainerException {
}
/**
 * @export
 * @class InvalidBindingName
 * @extends {KernelException}
 */
export declare class InvalidBindingName extends ContainerException {
    /**
     * @param {string} name
     * @memberof InvalidBindingName
     */
    constructor(name: string);
}
/**
 * @export
 * @class DriverCannotBeResolved
 * @extends {RuntimeException}
 */
export declare class DriverCannotBeResolved extends ContainerException {
    /**
     * @param {string} name
     * @memberof DriverCannotBeResolved
     */
    constructor(name: string);
}
