export declare class AttributeSet {
    /**
     * @private
     * @type {Set<string>}
     * @memberof AttributeSet
     */
    private readonly attributes;
    /**
     * @returns {string[]}
     * @memberof AttributeSet
     */
    all(): string[];
    /**
     * @param {string} attribute
     * @returns {boolean}
     * @memberof AttributeSet
     */
    set(attribute: string): boolean;
    /**
     * @param {string} attribute
     * @returns {boolean}
     * @memberof AttributeSet
     */
    forget(attribute: string): boolean;
    /**
     * @returns {boolean}
     * @memberof AttributeSet
     */
    flush(): boolean;
    /**
     * @param {string} attribute
     * @returns {boolean}
     * @memberof AttributeSet
     */
    has(attribute: string): boolean;
}
