"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWhitelisted = void 0;
const nanomatch_1 = __importDefault(require("nanomatch"));
// todo: review the implementation
exports.isWhitelisted = (whitelist, remoteAddress) => {
    if (!Array.isArray(whitelist) || !whitelist.length) {
        return true;
    }
    for (const ip of whitelist) {
        try {
            if (nanomatch_1.default.isMatch(remoteAddress, ip)) {
                return true;
            }
        }
        catch { }
    }
    return false;
};
//# sourceMappingURL=is-whitelisted.js.map