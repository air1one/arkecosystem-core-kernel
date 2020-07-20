import { AttributeSet } from "./attribute-set";
export declare class AttributeMap {
    private readonly knownAttributes;
    /**
     * @private
     * @type {object}
     * @memberof AttributeMap
     */
    private attributes;
    /**
     * Creates an instance of AttributeMap.
     *
     * @param {AttributeSet} knownAttributes
     * @memberof AttributeMap
     */
    constructor(knownAttributes: AttributeSet);
    /**
     * @returns {object}
     * @memberof AttributeMap
     */
    all(): object;
    /**
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {(T | undefined)}
     * @memberof AttributeMap
     */
    get<T>(key: string, defaultValue?: T): T;
    /**
     * @template T
     * @param {string} key
     * @param {T} value
     * @returns {boolean}
     * @memberof AttributeMap
     */
    set<T>(key: string, value: T): boolean;
    /**
     * @param {string} key
     * @returns {boolean}
     * @memberof AttributeMap
     */
    forget(key: string): boolean;
    /**
     * @returns {boolean}
     * @memberof AttributeMap
     */
    flush(): boolean;
    /**
     * @param {string} key
     * @returns {boolean}
     * @memberof AttributeMap
     */
    has(key: string): boolean;
    /**
     * @private
     * @param {string} key
     * @memberof AttributeMap
     */
    private assertKnown;
}
