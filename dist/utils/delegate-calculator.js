"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateForgedTotal = exports.calculateApproval = void 0;
const utils_1 = require("../utils");
const supply_calculator_1 = require("./supply-calculator");
const toDecimal = (voteBalance, totalSupply) => {
    const decimals = 2;
    const exponent = totalSupply.toString().length - voteBalance.toString().length + 4;
    // @ts-ignore
    const div = voteBalance.times(Math.pow(10, exponent)).dividedBy(totalSupply) / Math.pow(10, exponent - decimals);
    return +Number(div).toFixed(2);
};
exports.calculateApproval = (delegate, height = 1) => {
    const totalSupply = utils_1.BigNumber.make(supply_calculator_1.calculate(height));
    const voteBalance = delegate.getAttribute("delegate.voteBalance");
    return toDecimal(voteBalance, totalSupply);
};
/**
 * todo: review the implementation
 *
 * review the implementation - currently it is coupled to the container because wallet is coupled to the container
 * a better approach would be to pass in a delegate object rather then letting the function make assumptions about
 * from where the data is coming that needs to be processed.
 */
exports.calculateForgedTotal = (wallet) => {
    const delegate = wallet.getAttribute("delegate");
    const forgedFees = utils_1.BigNumber.make(delegate.forgedFees);
    const forgedRewards = utils_1.BigNumber.make(delegate.forgedRewards);
    return forgedFees.plus(forgedRewards).toFixed();
};
//# sourceMappingURL=delegate-calculator.js.map