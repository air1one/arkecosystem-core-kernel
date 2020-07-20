"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
const crypto_1 = require("@arkecosystem/crypto");
const assert_1 = require("./assert");
// todo: review the implementation
exports.calculate = (height) => {
    const config = crypto_1.Managers.configManager.all();
    assert_1.assert.defined(config);
    const { genesisBlock, milestones } = config;
    const totalAmount = crypto_1.Utils.BigNumber.make(genesisBlock.totalAmount);
    if (height === 0 || milestones.length === 0) {
        return totalAmount.toFixed();
    }
    let rewards = crypto_1.Utils.BigNumber.ZERO;
    let currentHeight = 0;
    let constantIndex = 0;
    while (currentHeight < height) {
        const constants = milestones[constantIndex];
        const nextConstants = milestones[constantIndex + 1];
        let heightJump = height - currentHeight;
        if (nextConstants && height >= nextConstants.height && currentHeight < nextConstants.height - 1) {
            heightJump = nextConstants.height - 1 - currentHeight;
            constantIndex += 1;
        }
        currentHeight += heightJump;
        if (currentHeight >= constants.height) {
            rewards = rewards.plus(crypto_1.Utils.BigNumber.make(constants.reward).times(heightJump));
        }
    }
    return totalAmount.plus(rewards).toFixed();
};
//# sourceMappingURL=supply-calculator.js.map