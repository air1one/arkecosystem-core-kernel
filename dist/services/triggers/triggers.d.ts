import { ActionArguments } from "../../types";
import { Action } from "./action";
/**
 * @export
 * @class Triggers
 */
export declare class Triggers {
    /**
     * All of the registered triggers.
     *
     * @private
     * @type {Map<string, Action>}
     * @memberof Actions
     */
    private readonly triggers;
    /**
     * Register a new trigger.
     *
     * @param {string} name
     * @param {Function} fn
     * @returns {Action}
     * @memberof Actions
     */
    bind(name: string, action: Action): Action;
    /**
     * Get an trigger.
     *
     * @param {string} name
     * @returns {Action}
     * @memberof Actions
     */
    get(name: string): Action;
    /**
     * Call an trigger by the given name and execute its hooks in sequence.
     *
     * @template T
     * @param {string} name
     * @param {...Array<any>} args
     * @returns {(Promise<T | undefined>)}
     * @memberof Actions
     */
    call<T>(name: string, args?: ActionArguments): Promise<T | undefined>;
    /**
     * Call all before hooks for the given trigger in sequence.
     *
     * @private
     * @param {string} type
     * @param {string} trigger
     * @param args
     * @param resultOrError
     * @returns {Promise<void>}
     * @memberof Actions
     */
    private callBeforeHooks;
    /**
     * Call all after hooks for the given trigger in sequence.
     *
     * @private
     * @param {string} trigger
     * @param args
     * @param result
     * @returns {Promise<void>}
     * @memberof Actions
     */
    private callAfterHooks;
    /**
     * Call all error hooks for the given trigger in sequence.
     *
     * @private
     * @param {string} trigger
     * @param args
     * @param result
     * @param err
     * @param stage
     * @returns {Promise<void>}
     * @memberof Actions
     */
    private callErrorHooks;
    /**
     * Throw an exception if the given trigger doesn't exist.
     *
     * @private
     * @param {string} name
     * @memberof Actions
     */
    private throwIfActionIsMissing;
    /**
     * Determine if the given trigger name is reserved.
     *
     * @private
     * @param {string} name
     * @returns {boolean}
     * @memberof Container
     */
    private usesReservedBindingName;
}
