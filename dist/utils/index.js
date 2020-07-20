"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWhitelisted = exports.isBlacklisted = exports.getBlockNotChainedErrorMessage = exports.isBlockChained = exports.formatTimestamp = exports.forgingInfoCalculator = exports.supplyCalculator = exports.roundCalculator = exports.expirationCalculator = exports.delegateCalculator = void 0;
const calculate_forging_info_1 = require("./calculate-forging-info");
const delegate_calculator_1 = require("./delegate-calculator");
const expiration_calculator_1 = require("./expiration-calculator");
const format_timestamp_1 = require("./format-timestamp");
Object.defineProperty(exports, "formatTimestamp", { enumerable: true, get: function () { return format_timestamp_1.formatTimestamp; } });
const get_blocktime_lookup_1 = require("./get-blocktime-lookup");
const is_block_chained_1 = require("./is-block-chained");
Object.defineProperty(exports, "getBlockNotChainedErrorMessage", { enumerable: true, get: function () { return is_block_chained_1.getBlockNotChainedErrorMessage; } });
Object.defineProperty(exports, "isBlockChained", { enumerable: true, get: function () { return is_block_chained_1.isBlockChained; } });
const is_blacklisted_1 = require("./is-blacklisted");
Object.defineProperty(exports, "isBlacklisted", { enumerable: true, get: function () { return is_blacklisted_1.isBlacklisted; } });
const is_whitelisted_1 = require("./is-whitelisted");
Object.defineProperty(exports, "isWhitelisted", { enumerable: true, get: function () { return is_whitelisted_1.isWhitelisted; } });
const round_calculator_1 = require("./round-calculator");
exports.Search = __importStar(require("./search"));
const supply_calculator_1 = require("./supply-calculator");
__exportStar(require("@arkecosystem/utils"), exports);
__exportStar(require("./expiration-calculator"), exports);
__exportStar(require("./assert"), exports);
__exportStar(require("./ipc-handler"), exports);
__exportStar(require("./ipc-subprocess"), exports);
__exportStar(require("./lock"), exports);
exports.delegateCalculator = { calculateApproval: delegate_calculator_1.calculateApproval, calculateForgedTotal: delegate_calculator_1.calculateForgedTotal };
exports.expirationCalculator = { calculateTransactionExpiration: expiration_calculator_1.calculateTransactionExpiration, calculateLockExpirationStatus: expiration_calculator_1.calculateLockExpirationStatus };
exports.roundCalculator = { calculateRound: round_calculator_1.calculateRound, isNewRound: round_calculator_1.isNewRound };
exports.supplyCalculator = { calculate: supply_calculator_1.calculate };
exports.forgingInfoCalculator = { calculateForgingInfo: calculate_forging_info_1.calculateForgingInfo, getBlockTimeLookup: get_blocktime_lookup_1.getBlockTimeLookup };
//# sourceMappingURL=index.js.map