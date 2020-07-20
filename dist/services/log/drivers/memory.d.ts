import { Logger } from "../../../contracts/kernel/log";
export declare class MemoryLogger implements Logger {
    /**
     * @private
     * @type {Record<string, Chalk>}
     * @memberof MemoryLogger
     */
    private readonly levelStyles;
    /**
     * @private
     * @type {boolean}
     * @memberof MemoryLogger
     */
    private silentConsole;
    /**
     * @private
     * @type {Dayjs}
     * @memberof MemoryLogger
     */
    private lastTimestamp;
    /**
     * @param {*} [options]
     * @returns {Promise<Logger>}
     * @memberof MemoryLogger
     */
    make(options?: any): Promise<Logger>;
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    emergency(message: any): void;
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    alert(message: any): void;
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    critical(message: any): void;
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    error(message: any): void;
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    warning(message: any): void;
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    notice(message: any): void;
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    info(message: any): void;
    /**
     * @param {*} message
     * @memberof MemoryLogger
     */
    debug(message: any): void;
    /**
     * @param {boolean} suppress
     * @memberof MemoryLogger
     */
    suppressConsoleOutput(suppress: boolean): void;
    /**
     * @private
     * @param {*} level
     * @param {*} message
     * @returns {void}
     * @memberof MemoryLogger
     */
    private log;
    /**
     * @private
     * @returns {string}
     * @memberof MemoryLogger
     */
    private getTimestampDiff;
}
