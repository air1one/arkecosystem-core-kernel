/**
 * @export
 * @class Watcher
 */
export declare class Watcher {
    /**
     * The application instance.
     *
     * @private
     * @type {Application}
     * @memberof Manager
     */
    private readonly app;
    /**
     * @private
     * @type {NSFW}
     * @memberof Watcher
     */
    private watcher;
    /**
     * @returns {Promise<void>}
     * @memberof Watcher
     */
    boot(): Promise<void>;
    /**
     * @returns {Promise<void>}
     * @memberof Watcher
     */
    dispose(): Promise<void>;
}
