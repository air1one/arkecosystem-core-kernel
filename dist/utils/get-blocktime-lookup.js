"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockTimeLookup = void 0;
const crypto_1 = require("@arkecosystem/crypto");
const identifiers_1 = require("../ioc/identifiers");
const mapHeightToMilestoneSpanTimestamp = async (height, findBlockTimestampByHeight) => {
    let nextMilestone = crypto_1.Managers.configManager.getNextMilestoneWithNewKey(1, "blocktime");
    // TODO: could cache this object here to reduce slow calls to DB.
    const heightMappedToBlockTimestamp = new Map();
    heightMappedToBlockTimestamp.set(1, 0); // Block of height one always has a timestamp of 0
    while (nextMilestone.found && nextMilestone.height <= height) {
        // to calculate the timespan between two milestones we need to look up the timestamp of the last block
        const endSpanBlockHeight = nextMilestone.height - 1;
        heightMappedToBlockTimestamp.set(endSpanBlockHeight, await findBlockTimestampByHeight(endSpanBlockHeight));
        nextMilestone = crypto_1.Managers.configManager.getNextMilestoneWithNewKey(nextMilestone.height, "blocktime");
    }
    return (height) => {
        const result = heightMappedToBlockTimestamp.get(height);
        if (result === undefined) {
            throw new Error(`Attempted lookup of block height ${height} for milestone span calculation, but none exists.`);
        }
        else {
            return result;
        }
    };
};
exports.getBlockTimeLookup = async (app, height) => {
    const databaseService = app.get(identifiers_1.Identifiers.DatabaseService);
    const getBlockTimestampByHeight = async (height) => {
        const blocks = await databaseService.getBlocksByHeight([height]);
        return blocks[0].timestamp;
    };
    return await mapHeightToMilestoneSpanTimestamp(height, getBlockTimestampByHeight);
};
//# sourceMappingURL=get-blocktime-lookup.js.map