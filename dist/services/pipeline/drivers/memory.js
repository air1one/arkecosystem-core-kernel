"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MemoryPipeline_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryPipeline = void 0;
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class MemoryPipeline
 */
let MemoryPipeline = MemoryPipeline_1 = class MemoryPipeline {
    /**
     * Creates an instance of Pipeline.
     *
     * @param {(Array<Function | Stage>)} stages
     * @memberof MemoryPipeline
     */
    constructor(stages = []) {
        this.stages = stages;
    }
    /**
     * Create a new pipeline with an appended stage.
     *
     * @param {Function} stage
     * @returns {Pipeline}
     * @memberof MemoryPipeline
     */
    pipe(stage) {
        const stages = [...this.stages];
        stages.push(stage);
        return new MemoryPipeline_1(stages);
    }
    /**
     * Process the payload. (Asynchronous)
     *
     * @template T
     * @param {T} payload
     * @returns {(Promise<T | undefined>)}
     * @memberof MemoryPipeline
     */
    async process(payload) {
        for (const stage of this.stages) {
            if ("process" in stage) {
                payload = await stage.process(payload);
            }
            else if (typeof stage === "function") {
                payload = await stage(payload);
            }
        }
        return payload;
    }
    /**
     * Process the payload. (Synchronous)
     *
     * @template T
     * @param {T} payload
     * @returns {(T | undefined)}
     * @memberof MemoryPipeline
     */
    processSync(payload) {
        for (const stage of this.stages) {
            if ("process" in stage) {
                payload = stage.process(payload);
            }
            else if (typeof stage === "function") {
                payload = stage(payload);
            }
        }
        return payload;
    }
};
MemoryPipeline = MemoryPipeline_1 = __decorate([
    ioc_1.injectable(),
    __metadata("design:paramtypes", [Array])
], MemoryPipeline);
exports.MemoryPipeline = MemoryPipeline;
//# sourceMappingURL=memory.js.map