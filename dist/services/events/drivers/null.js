"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullEventDispatcher = void 0;
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class MemoryEventDispatcher
 * @implements {EventDispatcherContract}
 */
let NullEventDispatcher = class NullEventDispatcher {
    /**
     * @param {EventName} event
     * @param {EventListener} listener
     * @returns {() => void}
     * @memberof MemoryEventDispatcher
     */
    listen(event, listener) {
        return () => { };
    }
    /**
     * @param {Array<[EventName, EventListener]>} events
     * @returns {Map<EventName, () => void>}
     * @memberof MemoryEventDispatcher
     */
    listenMany(events) {
        const map = new Map();
        for (const [name] of events) {
            map.set(name, () => { });
        }
        return map;
    }
    /**
     * @param {EventName} name
     * @param {EventListener} listener
     * @memberof MemoryEventDispatcher
     */
    listenOnce(name, listener) {
        //
    }
    /**
     * @param {EventName} event
     * @param {EventListener} [listener]
     * @memberof MemoryEventDispatcher
     */
    forget(event, listener) { }
    /**
     * @param {Array<[EventName, EventListener]>} events
     * @memberof MemoryEventDispatcher
     */
    forgetMany(events) {
        //
    }
    /**
     * @memberof MemoryEventDispatcher
     */
    flush() {
        //
    }
    /**
     * @param {EventName} [event]
     * @returns {EventListener[]}
     * @memberof MemoryEventDispatcher
     */
    getListeners(event) {
        return [];
    }
    /**
     * @param {EventName} event
     * @returns {boolean}
     * @memberof MemoryEventDispatcher
     */
    hasListeners(event) {
        return false;
    }
    /**
     * @param {EventName} event
     * @returns {number}
     * @memberof MemoryEventDispatcher
     */
    countListeners(event) {
        return 0;
    }
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    async dispatch(event, data) {
        //
    }
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    async dispatchSeq(event, data) {
        //
    }
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @memberof MemoryEventDispatcher
     */
    dispatchSync(event, data) {
        //
    }
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    async dispatchMany(events) {
        //
    }
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    async dispatchManySeq(events) {
        //
    }
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @memberof MemoryEventDispatcher
     */
    dispatchManySync(events) {
        //
    }
};
NullEventDispatcher = __decorate([
    ioc_1.injectable()
], NullEventDispatcher);
exports.NullEventDispatcher = NullEventDispatcher;
//# sourceMappingURL=null.js.map