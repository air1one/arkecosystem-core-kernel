import { EventDispatcher as EventDispatcherContract, EventListener, EventName } from "../../../contracts/kernel/events";
/**
 * @export
 * @class MemoryEventDispatcher
 * @implements {EventDispatcherContract}
 */
export declare class MemoryEventDispatcher implements EventDispatcherContract {
    /**
     * @private
     * @type {Map<EventName, Set<EventListener>>}
     * @memberof MemoryEventDispatcher
     */
    private readonly listeners;
    /**
     * @param {EventName} event
     * @param {EventListener} listener
     * @returns {() => void}
     * @memberof MemoryEventDispatcher
     */
    listen(event: EventName, listener: EventListener): () => void;
    /**
     * @param {Array<[EventName, EventListener]>} events
     * @returns {Map<EventName, () => void>}
     * @memberof MemoryEventDispatcher
     */
    listenMany(events: Array<[EventName, EventListener]>): Map<EventName, () => void>;
    /**
     * @param {EventName} name
     * @param {EventListener} listener
     * @memberof MemoryEventDispatcher
     */
    listenOnce(name: EventName, listener: EventListener): void;
    /**
     * @param {EventName} event
     * @param {EventListener} [listener]
     * @memberof MemoryEventDispatcher
     */
    forget(event: EventName, listener?: EventListener): boolean;
    /**
     * @param {Array<[EventName, EventListener]>} events
     * @memberof MemoryEventDispatcher
     */
    forgetMany(events: EventName[] | Array<[EventName, EventListener]>): void;
    /**
     * @memberof MemoryEventDispatcher
     */
    flush(): void;
    /**
     * @param {EventName} [event]
     * @returns {EventListener[]}
     * @memberof MemoryEventDispatcher
     */
    getListeners(event?: EventName): EventListener[];
    /**
     * @param {EventName} event
     * @returns {boolean}
     * @memberof MemoryEventDispatcher
     */
    hasListeners(event: EventName): boolean;
    /**
     * @param {EventName} event
     * @returns {number}
     * @memberof MemoryEventDispatcher
     */
    countListeners(event?: EventName): number;
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    dispatch<T = any>(event: EventName, data?: T): Promise<void>;
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    dispatchSeq<T = any>(event: EventName, data?: T): Promise<void>;
    /**
     * @template T
     * @param {EventName} event
     * @param {T} [data]
     * @memberof MemoryEventDispatcher
     */
    dispatchSync<T = any>(event: EventName, data?: T): void;
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    dispatchMany<T = any>(events: Array<[EventName, T]>): Promise<void>;
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @returns {Promise<void>}
     * @memberof MemoryEventDispatcher
     */
    dispatchManySeq<T = any>(events: Array<[EventName, T]>): Promise<void>;
    /**
     * @template T
     * @param {Array<[EventName, T]>} events
     * @memberof MemoryEventDispatcher
     */
    dispatchManySync<T = any>(events: Array<[EventName, T]>): void;
    /**
     * @private
     * @param {EventName} name
     * @returns {Set<EventListener>}
     * @memberof MemoryEventDispatcher
     */
    private getListenersByEvent;
    /**
     * @private
     * @param {EventName} event
     * @returns {EventListener[]}
     * @memberof MemoryEventDispatcher
     */
    private getListenersByPattern;
}
