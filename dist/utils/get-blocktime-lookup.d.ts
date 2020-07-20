import { Application } from "../contracts/kernel/application";
export declare const getBlockTimeLookup: (app: Application, height: number) => Promise<(height: number) => number>;
