"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimestamp = void 0;
const crypto_1 = require("@arkecosystem/crypto");
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
exports.formatTimestamp = (epochStamp) => {
    const timestamp = dayjs_1.default.utc(crypto_1.Managers.configManager.getMilestone().epoch).add(epochStamp, "second");
    return {
        epoch: epochStamp,
        unix: timestamp.unix(),
        human: timestamp.toISOString(),
    };
};
//# sourceMappingURL=format-timestamp.js.map