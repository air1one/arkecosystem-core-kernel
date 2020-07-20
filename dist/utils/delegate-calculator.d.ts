import { Wallet } from "../contracts/state";
export declare const calculateApproval: (delegate: Wallet, height?: number) => number;
/**
 * todo: review the implementation
 *
 * review the implementation - currently it is coupled to the container because wallet is coupled to the container
 * a better approach would be to pass in a delegate object rather then letting the function make assumptions about
 * from where the data is coming that needs to be processed.
 */
export declare const calculateForgedTotal: (wallet: Wallet) => string;
