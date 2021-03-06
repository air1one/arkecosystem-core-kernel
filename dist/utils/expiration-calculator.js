"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLockExpirationStatus = exports.calculateTransactionExpiration = void 0;
const crypto_1 = require("@arkecosystem/crypto");
/**
 * Calculate the expiration height of a transaction.
 * An expiration height H means that the transaction cannot be included in block at height
 * H or any higher block.
 * If the user did not specify an expiration height when creating the transaction then
 * we calculate one from the timestamp of the transaction creation and the configured
 * maximum transaction age (for v1 transactions). v2 transactions have a dedicated
 * expiration property.
 * @return number expiration height or null if the transaction does not expire
 */
exports.calculateTransactionExpiration = (transaction, context) => {
    // We ignore transaction.expiration in v1 transactions because it is not signed
    // by the transaction creator.
    // TODO: check if ok
    if (transaction.version && transaction.version >= 2) {
        return transaction.expiration || undefined;
    }
    // Since the user did not specify an expiration we set one by calculating
    // approximately the height of the chain as of the time the transaction was
    // created and adding maxTransactionAge to that.
    // Both now and transaction.timestamp use [number of seconds since the genesis block].
    const createdSecondsAgo = context.now - transaction.timestamp;
    const createdBlocksAgo = Math.floor(createdSecondsAgo / context.blockTime);
    const createdAtHeight = context.currentHeight - createdBlocksAgo;
    return createdAtHeight + context.maxTransactionAge;
};
exports.calculateLockExpirationStatus = (lastBlock, expiration) => (expiration.type === crypto_1.Enums.HtlcLockExpirationType.EpochTimestamp && expiration.value <= lastBlock.data.timestamp) ||
    (expiration.type === crypto_1.Enums.HtlcLockExpirationType.BlockHeight && expiration.value <= lastBlock.data.height);
//# sourceMappingURL=expiration-calculator.js.map