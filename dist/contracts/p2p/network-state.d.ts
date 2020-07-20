export interface NetworkState {
    readonly status: any;
    nodeHeight: number | undefined;
    lastBlockId: string | undefined;
    setLastBlock(lastBlock: any): any;
    getQuorum(): any;
    getOverHeightBlockHeaders(): any;
    toJson(): any;
}
