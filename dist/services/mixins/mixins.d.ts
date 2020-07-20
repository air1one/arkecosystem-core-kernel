import { Constructor } from "../../types/container";
export declare class MixinService {
    /**
     * @private
     * @type {Map<string, Function>}
     * @memberof MixinService
     */
    private readonly mixins;
    /**
     * @param {string} name
     * @returns {Function}
     * @memberof MixinService
     */
    get(name: string): Function;
    /**
     * @param {string} name
     * @param {Function} macro
     * @memberof MixinService
     */
    set(name: string, macro: Function): void;
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof MixinService
     */
    forget(name: string): boolean;
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof MixinService
     */
    has(name: string): boolean;
    /**
     * @template T
     * @param {(string | string[])} names
     * @param {Constructor<T>} value
     * @returns {Constructor<T>}
     * @memberof MixinService
     */
    apply<T>(names: string | string[], value: Constructor): Constructor<T>;
}
