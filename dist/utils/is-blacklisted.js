"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBlacklisted = void 0;
const nanomatch_1 = __importDefault(require("nanomatch"));
// todo: review the implementation
exports.isBlacklisted = (blacklist, remoteAddress) => {
    if (!Array.isArray(blacklist) || !blacklist.length) {
        return false;
    }
    for (const ip of blacklist) {
        try {
            if (nanomatch_1.default.isMatch(remoteAddress, ip)) {
                return true;
            }
        }
        catch { }
    }
    return false;
};
//# sourceMappingURL=is-blacklisted.js.map