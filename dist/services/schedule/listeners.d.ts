import { EventListener } from "../../contracts/kernel";
/**
 * @export
 * @class ExecuteCallbackWhenReady
 * @implements {EventListener}
 */
export declare class ExecuteCallbackWhenReady implements EventListener {
    /**
     * @private
     * @type {number}
     * @memberof ExecuteCallbackWhenReady
     */
    private blockCount;
    /**
     * @private
     * @type {Function}
     * @memberof ExecuteCallbackWhenReady
     */
    private callback;
    /**
     * @param {Function} callback
     * @param {number} blockCount
     * @returns {this}
     * @memberof ExecuteCallbackWhenReady
     */
    constructor(callback: Function, blockCount: number);
    /**
     * @param {*} {data}
     * @returns {Promise<void>}
     * @memberof ExecuteCallbackWhenReady
     */
    handle({ data }: {
        data: any;
    }): Promise<void>;
}
