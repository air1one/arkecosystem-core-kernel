import { Logger } from "../../../contracts/kernel/log";
export declare class NullLogger implements Logger {
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
}
