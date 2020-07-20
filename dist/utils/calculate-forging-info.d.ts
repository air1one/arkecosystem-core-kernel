import { ForgingInfo } from "../contracts/shared";
export interface MilestoneSearchResult {
    found: boolean;
    height: number;
    data: any;
}
export declare const getMilestonesWhichAffectActiveDelegateCount: () => Array<MilestoneSearchResult>;
export declare const calculateForgingInfo: (timestamp: number, height: number, getTimeStampForBlock: (blockheight: number) => number) => ForgingInfo;
