import { Pipeline, Stage } from "../../../contracts/kernel";
/**
 * @export
 * @class MemoryPipeline
 */
export declare class MemoryPipeline implements Pipeline {
    private readonly stages;
    /**
     * Creates an instance of Pipeline.
     *
     * @param {(Array<Function | Stage>)} stages
     * @memberof MemoryPipeline
     */
    constructor(stages?: Array<Function | Stage>);
    /**
     * Create a new pipeline with an appended stage.
     *
     * @param {Function} stage
     * @returns {Pipeline}
     * @memberof MemoryPipeline
     */
    pipe(stage: Function | Stage): Pipeline;
    /**
     * Process the payload. (Asynchronous)
     *
     * @template T
     * @param {T} payload
     * @returns {(Promise<T | undefined>)}
     * @memberof MemoryPipeline
     */
    process<T>(payload: T): Promise<T | undefined>;
    /**
     * Process the payload. (Synchronous)
     *
     * @template T
     * @param {T} payload
     * @returns {(T | undefined)}
     * @memberof MemoryPipeline
     */
    processSync<T>(payload: T): T | undefined;
}
