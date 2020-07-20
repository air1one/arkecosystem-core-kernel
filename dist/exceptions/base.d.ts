/**
 * @export
 * @class Exception
 * @extends {Error}
 */
export declare class Exception extends Error {
    /**
     * Creates an instance of Exception.
     *
     * @param {string} message
     * @param {string} [code]
     * @memberof Exception
     */
    constructor(message: string, code?: string);
}
