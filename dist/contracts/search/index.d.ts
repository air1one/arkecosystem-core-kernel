export * from "./criteria";
export * from "./expressions";
export declare type ListOrder = {
    property: string;
    direction: "asc" | "desc";
}[];
export declare type ListPage = {
    offset: number;
    limit: number;
};
export declare type ListResult<T> = {
    rows: T[];
    count: number;
    countIsEstimate: boolean;
};
export declare type ListOptions = {
    estimateTotalCount?: boolean;
};
