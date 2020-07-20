"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockNotChainedErrorMessage = exports.isBlockChained = void 0;
const crypto_1 = require("@arkecosystem/crypto");
const getBlockChainedDetails = (previousBlock, nextBlock, getTimeStampForBlock) => {
    const followsPrevious = nextBlock.previousBlock === previousBlock.id;
    const isPlusOne = nextBlock.height === previousBlock.height + 1;
    const previousSlot = crypto_1.Crypto.Slots.getSlotNumber(getTimeStampForBlock, previousBlock.timestamp);
    const nextSlot = crypto_1.Crypto.Slots.getSlotNumber(getTimeStampForBlock, nextBlock.timestamp);
    const isAfterPreviousSlot = previousSlot < nextSlot;
    const isChained = followsPrevious && isPlusOne && isAfterPreviousSlot;
    return { followsPrevious, isPlusOne, previousSlot, nextSlot, isAfterPreviousSlot, isChained };
};
exports.isBlockChained = (previousBlock, nextBlock, getTimeStampForBlock) => {
    const details = getBlockChainedDetails(previousBlock, nextBlock, getTimeStampForBlock);
    return details.isChained;
};
exports.getBlockNotChainedErrorMessage = (previousBlock, nextBlock, getTimeStampForBlock) => {
    const details = getBlockChainedDetails(previousBlock, nextBlock, getTimeStampForBlock);
    if (details.isChained) {
        throw new Error("Block had no chain error");
    }
    const messagePrefix = `Block { height: ${nextBlock.height}, id: ${nextBlock.id}, ` +
        `previousBlock: ${nextBlock.previousBlock} } is not chained to the ` +
        `previous block { height: ${previousBlock.height}, id: ${previousBlock.id} }`;
    let messageDetail;
    if (!details.followsPrevious) {
        messageDetail = `previous block id mismatch`;
    }
    else if (!details.isPlusOne) {
        messageDetail = `height is not plus one`;
    }
    else if (!details.isAfterPreviousSlot) {
        messageDetail =
            `previous slot is not smaller: ` +
                `${details.previousSlot} (derived from timestamp ${previousBlock.timestamp}) VS ` +
                `${details.nextSlot} (derived from timestamp ${nextBlock.timestamp})`;
    }
    return `${messagePrefix}: ${messageDetail}`;
};
//# sourceMappingURL=is-block-chained.js.map