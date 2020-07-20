import { ActionArguments } from "../../types";
export declare abstract class Action<T = any> {
    /**
     * @private
     * @type {Set<Function>}
     * @memberof Action
     */
    private readonly beforeHooks;
    /**
     * @private
     * @type {Set<Function>}
     * @memberof Action
     */
    private readonly errorHooks;
    /**
     * @private
     * @type {Set<Function>}
     * @memberof Action
     */
    private readonly afterHooks;
    /**
     * @param {Function} fn
     * @memberof Action
     */
    before(fn: Function): this;
    /**
     * @param {Function} fn
     * @memberof Action
     */
    error(fn: Function): this;
    /**
     * @param {Function} fn
     * @memberof Action
     */
    after(fn: Function): this;
    /**
     * @param {string} type
     * @returns {Set<Function>}
     * @memberof Action
     */
    hooks(type: string): Set<Function>;
    /**
     * @abstract
     * @template T
     * @param {ActionArguments} args
     * @returns {T}
     * @memberof Action
     */
    abstract execute<U>(args: ActionArguments): Promise<U>;
    abstract execute<T>(args: ActionArguments): Promise<T>;
}
