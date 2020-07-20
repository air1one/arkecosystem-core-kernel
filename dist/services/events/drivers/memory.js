"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryEventDispatcher = void 0;
const micromatch_1 = __importDefault(require("micromatch"));
const ioc_1 = require("../../../ioc");
const utils_1 = require("../../../utils");
/**
 * @class OnceListener
 * @implements {EventListener}
 */
class OnceListener {
    /**
     * @param {EventDispatcherContract} dispatcher
     * @param {EventListener} listener
     * @memberof OnceListener
     */
    constructor(dispatcher, listener) {
        this.dispatcher = dispatcher;
        this.listener = listener;
    }
    /**
     * @param {*} {name}
     * @returns {Promise<void>}
     * @memberof OnceListener
     */
    async handle({ name }) {
        this.dispatcher.forget(name, this.listener);
    }
}
/**
 * @export
 * @class MemoryEventDispatcher
 * @implements {EventDispatcherContract}
 */
let MemoryEventDispatcher = class MemoryEventDispatcher {
    constructor() {
        /**
         * @private
         * @type {Map<EventName, Set<EventListener>>}
         * @memberof MemoryEventDispatcher
         */
        this.listeners = new Map();
    }
    /**
     * @param {EventName} event
     * @param {EventListener} listener
     * @returns {() => void}
     * @memberof MemoryEventDispatcher
     */
    listen(event, listener) {
        this.getListenersByEvent(event).add(listener);
        return this.forget.bind(this, event, listener);
    }
    /**
     * @param {Array<[EventName, EventListener]>} events
     * @returns {Map<EventName, () => void>}
     * @memberof MemoryEventDispatcher
     */
    listenMany(events) {
        const listeners = new Map();
        for (const [event, listener] of events) {
            listeners.set(event, this.listen(event, listener));
        }
        return listeners;
    }
    /**
     * @param {EventName} name
     * @param {EventListener} listener
     * @memberof MemoryEventDispatcher
     */
    listenOnce(name, listener) {
        this.listen(name, listener);
        this.listen(name, new OnceListener(this, listener));
    }
    /**
     * @param {EventName} event
     * @param {EventListener} [listener]
     * @memberof MemoryEventDispatcher
     */
    forget(event, listener) {
        if (event && listener) {
            return this.getListenersByEvent(event).delete(listener);
        }
        return this.listeners.delete(event);
    }
    /**
     * @param {Array<[EventName, EventListener]>} events
     * @memberof MemoryEventDispatcher
     */
    forgetMany(events) {
        for (const event of events) {
            Array.isArray(event) ? this.forget(event[0], event[1]) : this.forget(event);
        }
    }
    /**
     * @memberof MemoryEventDispatcher
     */
    flush() {
        this.listeners.clear();
    }
    /**
     * @param {EventName} [event]
     * @returns {EventListener[]}
     * @memberof MemoryEventDispatcher
     */
    getListeners(event) {
        return [...this.getListenersByPattern(event || "*").values()];
    }
    /**
     * @param {EventName} event
     * @returns {boolean}
     * @memberof MemoryEventDispatcher
     */
    hasListeners(event) {
        return this.getListenersByPattern(event).length > 0;
    }
    /**
     * @param {EventName} event
     * @returns {number}
     * @memberof MemoryEventDispatcher
     */
    countListeners(event) {
        if (event) {
            return this.getListenersByPattern(event).length;
        }
        let totalCount = 0;
        for (const values of this.listeners.values()) {
            totalCount += values.size;
        }
        return totalCount;
    }
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    async dispatch(event, data) {
        await Promise.resolve();
        const resolvers = [];
        for (const listener of this.getListenersByPattern(event)) {
            resolvers.push(new Promise((resolve) => resolve(listener.handle({ name: event, data }))));
        }
        await Promise.all(resolvers);
    }
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    async dispatchSeq(event, data) {
        await Promise.resolve();
        for (const listener of this.getListenersByPattern(event)) {
            await listener.handle({ name: event, data });
        }
    }
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @memberof MemoryEventDispatcher
     */
    dispatchSync(event, data) {
        for (const listener of this.getListenersByPattern(event)) {
            listener.handle({ name: event, data });
        }
    }
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    async dispatchMany(events) {
        await Promise.all(Object.values(events).map((value) => this.dispatch(value[0], value[1])));
    }
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    async dispatchManySeq(events) {
        for (const value of Object.values(events)) {
            await this.dispatchSeq(value[0], value[1]);
        }
    }
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @memberof MemoryEventDispatcher
     */
    dispatchManySync(events) {
        for (const value of Object.values(events)) {
            this.dispatchSync(value[0], value[1]);
        }
    }
    /**
     * @private
     * @param {EventName} name
     * @returns {Set<EventListener>}
     * @memberof MemoryEventDispatcher
     */
    getListenersByEvent(name) {
        if (!this.listeners.has(name)) {
            this.listeners.set(name, new Set());
        }
        const listener = this.listeners.get(name);
        utils_1.assert.defined(listener);
        return listener;
    }
    /**
     * @private
     * @param {EventName} event
     * @returns {EventListener[]}
     * @memberof MemoryEventDispatcher
     */
    getListenersByPattern(event) {
        // @ts-ignore
        const matches = micromatch_1.default([...this.listeners.keys()], event);
        let eventListeners = [];
        if (this.listeners.has("*")) {
            eventListeners = eventListeners.concat([...(this.getListenersByEvent("*") || [])]);
        }
        for (const match of matches) {
            const matchListeners = this.getListenersByEvent(match);
            if (matchListeners && matchListeners.size > 0) {
                eventListeners = eventListeners.concat([...matchListeners]);
            }
        }
        return eventListeners;
    }
};
MemoryEventDispatcher = __decorate([
    ioc_1.injectable()
], MemoryEventDispatcher);
exports.MemoryEventDispatcher = MemoryEventDispatcher;
//# sourceMappingURL=memory.js.map