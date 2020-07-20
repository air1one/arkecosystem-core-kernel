/**
 * @export
 * @enum {number}
 */
export declare enum KernelEvent {
    Booted = "kernel.booted",
    Booting = "kernel.booting",
    Bootstrapped = "kernel.bootstrapper.bootstrapped",
    Bootstrapping = "kernel.bootstrapper.bootstrapping",
    ServiceProviderBooted = "kernel.serviceProvider.booted",
    ServiceProviderDisposed = "kernel.serviceProvider.disposed",
    ServiceProviderRegistered = "kernel.serviceProvider.registered"
}
/**
 * @export
 * @enum {number}
 */
export declare enum CacheEvent {
    Flushed = "cache.flushed",
    Forgotten = "cache.forgotten",
    Hit = "cache.hit",
    Missed = "cache.missed",
    Written = "cache.written"
}
/**
 * @export
 * @enum {number}
 */
export declare enum CryptoEvent {
    MilestoneChanged = "crypto.milestone.changed"
}
/**
 * @export
 * @enum {number}
 */
export declare enum BlockEvent {
    Applied = "block.applied",
    Disregarded = "block.disregarded",
    Forged = "block.forged",
    Received = "block.received",
    Reverted = "block.reverted"
}
/**
 * @export
 * @enum {number}
 */
export declare enum DelegateEvent {
    Registered = "delegate.registered",
    Resigned = "delegate.resigned"
}
/**
 * @export
 * @enum {number}
 */
export declare enum ForgerEvent {
    Failed = "forger.failed",
    Missing = "forger.missing",
    Started = "forger.started"
}
/**
 * @export
 * @enum {number}
 */
export declare enum PeerEvent {
    Added = "peer.added",
    Disconnect = "peer.disconnect",
    Disconnected = "peer.disconnected",
    Disconnecting = "peer.disconnecting",
    Removed = "peer.removed"
}
/**
 * @export
 * @enum {number}
 */
export declare enum RoundEvent {
    Applied = "round.applied",
    Created = "round.created",
    Missed = "round.missed"
}
/**
 * @export
 * @enum {number}
 */
export declare enum StateEvent {
    BuilderFinished = "state.builder.finished",
    Started = "state.started",
    Starting = "state.starting"
}
/**
 * @export
 * @enum {number}
 */
export declare enum TransactionEvent {
    AddedToPool = "transaction.pool.added",
    Applied = "transaction.applied",
    Expired = "transaction.expired",
    Forged = "transaction.forged",
    RejectedByPool = "transaction.pool.rejected",
    RemovedFromPool = "transaction.pool.removed",
    Reverted = "transaction.reverted"
}
/**
 * @export
 * @enum {number}
 */
export declare enum ScheduleEvent {
    BlockJobFinished = "schedule.blockJob.finished",
    CronJobFinished = "schedule.cronJob.finished"
}
/**
 * @export
 * @enum {number}
 */
export declare enum QueueEvent {
    Finished = "queue.finished",
    Failed = "queue.finished"
}
