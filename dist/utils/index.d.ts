import { formatTimestamp } from "./format-timestamp";
import { getBlockNotChainedErrorMessage, isBlockChained } from "./is-block-chained";
import { isBlacklisted } from "./is-blacklisted";
import { isWhitelisted } from "./is-whitelisted";
export * as Search from "./search";
export * from "@arkecosystem/utils";
export * from "./expiration-calculator";
export * from "./assert";
export * from "./ipc-handler";
export * from "./ipc-subprocess";
export * from "./lock";
export declare const delegateCalculator: {
    calculateApproval: (delegate: import("../contracts/state").Wallet, height?: number) => number;
    calculateForgedTotal: (wallet: import("../contracts/state").Wallet) => string;
};
export declare const expirationCalculator: {
    calculateTransactionExpiration: (transaction: import("@arkecosystem/crypto/dist/interfaces").ITransactionData, context: {
        blockTime: number;
        currentHeight: number;
        now: number;
        maxTransactionAge: number;
    }) => number | undefined;
    calculateLockExpirationStatus: (lastBlock: import("@arkecosystem/crypto/dist/interfaces").IBlock, expiration: import("@arkecosystem/crypto/dist/interfaces").IHtlcExpiration) => boolean;
};
export declare const roundCalculator: {
    calculateRound: (height: number) => import("../contracts/shared").RoundInfo;
    isNewRound: (height: number) => boolean;
};
export declare const supplyCalculator: {
    calculate: (height: number) => string;
};
export declare const forgingInfoCalculator: {
    calculateForgingInfo: (timestamp: number, height: number, getTimeStampForBlock: (blockheight: number) => number) => import("../contracts/shared").ForgingInfo;
    getBlockTimeLookup: (app: import("../contracts/kernel").Application, height: number) => Promise<(height: number) => number>;
};
export { formatTimestamp, isBlockChained, getBlockNotChainedErrorMessage, isBlacklisted, isWhitelisted };
