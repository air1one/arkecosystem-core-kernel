import { Interfaces } from "@arkecosystem/crypto";
export declare const isBlockChained: (previousBlock: Interfaces.IBlockData, nextBlock: Interfaces.IBlockData, getTimeStampForBlock: (blockheight: number) => number) => boolean;
export declare const getBlockNotChainedErrorMessage: (previousBlock: Interfaces.IBlockData, nextBlock: Interfaces.IBlockData, getTimeStampForBlock: (blockheight: number) => number) => string;
