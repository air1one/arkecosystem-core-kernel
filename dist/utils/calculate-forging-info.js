"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateForgingInfo = exports.getMilestonesWhichAffectActiveDelegateCount = void 0;
const crypto_1 = require("@arkecosystem/crypto");
exports.getMilestonesWhichAffectActiveDelegateCount = () => {
    const milestones = [
        {
            found: true,
            height: 1,
            data: crypto_1.Managers.configManager.getMilestone(1).activeDelegates,
        },
    ];
    let nextMilestone = crypto_1.Managers.configManager.getNextMilestoneWithNewKey(1, "activeDelegates");
    while (nextMilestone.found) {
        milestones.push(nextMilestone);
        nextMilestone = crypto_1.Managers.configManager.getNextMilestoneWithNewKey(nextMilestone.height, "activeDelegates");
    }
    return milestones;
};
const findIndex = (height, slotNumber, getTimeStampForBlock) => {
    let currentForger;
    let nextForger;
    let slotsNeededAboveSpanToCompleteRound = 0;
    let previousMilestoneActiveDelegates = crypto_1.Managers.configManager.getMilestone(1).activeDelegates;
    let nextMilestone = crypto_1.Managers.configManager.getNextMilestoneWithNewKey(1, "activeDelegates");
    let lastSlotInfo = crypto_1.Crypto.Slots.getSlotInfo(getTimeStampForBlock, 0, 1);
    let previousForgerIndex = 0;
    const milestones = exports.getMilestonesWhichAffectActiveDelegateCount();
    if (milestones.length === 1) {
        return [slotNumber % previousMilestoneActiveDelegates, (slotNumber + 1) % previousMilestoneActiveDelegates];
    }
    for (let i = 0; i < milestones.length - 1; i++) {
        if (height <= nextMilestone.height) {
            currentForger = (slotNumber - slotsNeededAboveSpanToCompleteRound) % previousMilestoneActiveDelegates;
            nextForger = (currentForger + 1) % previousMilestoneActiveDelegates;
            return [currentForger, nextForger];
        }
        else {
            const spanEndBlockTimestamp = getTimeStampForBlock(nextMilestone.height - 1);
            const newSlotInfo = crypto_1.Crypto.Slots.getSlotInfo(getTimeStampForBlock, spanEndBlockTimestamp, nextMilestone.height - 1);
            previousForgerIndex = (newSlotInfo.slotNumber - lastSlotInfo.slotNumber) % previousMilestoneActiveDelegates;
            slotsNeededAboveSpanToCompleteRound = previousMilestoneActiveDelegates - previousForgerIndex - 1;
            lastSlotInfo = newSlotInfo;
            if (i !== 0)
                previousMilestoneActiveDelegates = nextMilestone.data;
            const nextMilestoneData = crypto_1.Managers.configManager.getNextMilestoneWithNewKey(nextMilestone.height, "activeDelegates");
            if (nextMilestoneData.found) {
                nextMilestone = nextMilestoneData;
            }
        }
    }
    if (slotNumber - lastSlotInfo.slotNumber <= slotsNeededAboveSpanToCompleteRound) {
        currentForger = previousForgerIndex + (slotNumber - lastSlotInfo.slotNumber);
        nextForger = (currentForger + 1) % previousMilestoneActiveDelegates;
    }
    else {
        const slotInThisSpan = slotNumber - (lastSlotInfo.slotNumber + slotsNeededAboveSpanToCompleteRound + 1);
        currentForger = slotInThisSpan % nextMilestone.data;
        nextForger = (currentForger + 1) % nextMilestone.data;
    }
    return [currentForger, nextForger];
};
exports.calculateForgingInfo = (timestamp, height, getTimeStampForBlock) => {
    const slotInfo = crypto_1.Crypto.Slots.getSlotInfo(getTimeStampForBlock, timestamp, height);
    const indexes = findIndex(height, slotInfo.slotNumber, getTimeStampForBlock);
    const currentForger = indexes[0];
    const nextForger = indexes[1];
    const canForge = slotInfo.forgingStatus;
    return { currentForger, nextForger, blockTimestamp: slotInfo.startTime, canForge };
};
//# sourceMappingURL=calculate-forging-info.js.map