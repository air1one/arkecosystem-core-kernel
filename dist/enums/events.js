"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueEvent = exports.ScheduleEvent = exports.TransactionEvent = exports.StateEvent = exports.RoundEvent = exports.PeerEvent = exports.ForgerEvent = exports.DelegateEvent = exports.BlockEvent = exports.CryptoEvent = exports.CacheEvent = exports.KernelEvent = void 0;
/**
 * @export
 * @enum {number}
 */
var KernelEvent;
(function (KernelEvent) {
    KernelEvent["Booted"] = "kernel.booted";
    KernelEvent["Booting"] = "kernel.booting";
    KernelEvent["Bootstrapped"] = "kernel.bootstrapper.bootstrapped";
    KernelEvent["Bootstrapping"] = "kernel.bootstrapper.bootstrapping";
    KernelEvent["ServiceProviderBooted"] = "kernel.serviceProvider.booted";
    KernelEvent["ServiceProviderDisposed"] = "kernel.serviceProvider.disposed";
    KernelEvent["ServiceProviderRegistered"] = "kernel.serviceProvider.registered";
})(KernelEvent = exports.KernelEvent || (exports.KernelEvent = {}));
/**
 * @export
 * @enum {number}
 */
var CacheEvent;
(function (CacheEvent) {
    CacheEvent["Flushed"] = "cache.flushed";
    CacheEvent["Forgotten"] = "cache.forgotten";
    CacheEvent["Hit"] = "cache.hit";
    CacheEvent["Missed"] = "cache.missed";
    CacheEvent["Written"] = "cache.written";
})(CacheEvent = exports.CacheEvent || (exports.CacheEvent = {}));
/**
 * @export
 * @enum {number}
 */
var CryptoEvent;
(function (CryptoEvent) {
    CryptoEvent["MilestoneChanged"] = "crypto.milestone.changed";
})(CryptoEvent = exports.CryptoEvent || (exports.CryptoEvent = {}));
/**
 * @export
 * @enum {number}
 */
var BlockEvent;
(function (BlockEvent) {
    BlockEvent["Applied"] = "block.applied";
    BlockEvent["Disregarded"] = "block.disregarded";
    BlockEvent["Forged"] = "block.forged";
    BlockEvent["Received"] = "block.received";
    BlockEvent["Reverted"] = "block.reverted";
})(BlockEvent = exports.BlockEvent || (exports.BlockEvent = {}));
/**
 * @export
 * @enum {number}
 */
var DelegateEvent;
(function (DelegateEvent) {
    DelegateEvent["Registered"] = "delegate.registered";
    DelegateEvent["Resigned"] = "delegate.resigned";
})(DelegateEvent = exports.DelegateEvent || (exports.DelegateEvent = {}));
/**
 * @export
 * @enum {number}
 */
var ForgerEvent;
(function (ForgerEvent) {
    ForgerEvent["Failed"] = "forger.failed";
    ForgerEvent["Missing"] = "forger.missing";
    ForgerEvent["Started"] = "forger.started";
})(ForgerEvent = exports.ForgerEvent || (exports.ForgerEvent = {}));
/**
 * @export
 * @enum {number}
 */
var PeerEvent;
(function (PeerEvent) {
    PeerEvent["Added"] = "peer.added";
    PeerEvent["Disconnect"] = "peer.disconnect";
    PeerEvent["Disconnected"] = "peer.disconnected";
    PeerEvent["Disconnecting"] = "peer.disconnecting";
    PeerEvent["Removed"] = "peer.removed";
})(PeerEvent = exports.PeerEvent || (exports.PeerEvent = {}));
/**
 * @export
 * @enum {number}
 */
var RoundEvent;
(function (RoundEvent) {
    RoundEvent["Applied"] = "round.applied";
    RoundEvent["Created"] = "round.created";
    RoundEvent["Missed"] = "round.missed";
})(RoundEvent = exports.RoundEvent || (exports.RoundEvent = {}));
/**
 * @export
 * @enum {number}
 */
var StateEvent;
(function (StateEvent) {
    StateEvent["BuilderFinished"] = "state.builder.finished";
    StateEvent["Started"] = "state.started";
    StateEvent["Starting"] = "state.starting";
})(StateEvent = exports.StateEvent || (exports.StateEvent = {}));
/**
 * @export
 * @enum {number}
 */
var TransactionEvent;
(function (TransactionEvent) {
    TransactionEvent["AddedToPool"] = "transaction.pool.added";
    TransactionEvent["Applied"] = "transaction.applied";
    TransactionEvent["Expired"] = "transaction.expired";
    TransactionEvent["Forged"] = "transaction.forged";
    TransactionEvent["RejectedByPool"] = "transaction.pool.rejected";
    TransactionEvent["RemovedFromPool"] = "transaction.pool.removed";
    TransactionEvent["Reverted"] = "transaction.reverted";
})(TransactionEvent = exports.TransactionEvent || (exports.TransactionEvent = {}));
/**
 * @export
 * @enum {number}
 */
var ScheduleEvent;
(function (ScheduleEvent) {
    ScheduleEvent["BlockJobFinished"] = "schedule.blockJob.finished";
    ScheduleEvent["CronJobFinished"] = "schedule.cronJob.finished";
})(ScheduleEvent = exports.ScheduleEvent || (exports.ScheduleEvent = {}));
/**
 * @export
 * @enum {number}
 */
var QueueEvent;
(function (QueueEvent) {
    QueueEvent["Finished"] = "queue.finished";
    QueueEvent["Failed"] = "queue.finished";
})(QueueEvent = exports.QueueEvent || (exports.QueueEvent = {}));
//# sourceMappingURL=events.js.map