export declare enum SearchOperator {
    OP_EQ = "equals",
    OP_IN = "in",
    OP_GTE = "gte",
    OP_LTE = "lte",
    OP_LIKE = "like",
    OP_CONTAINS = "contains",
    OP_CUSTOM = "custom_operator"
}
export interface SearchParameter {
    field: string;
    value: any;
    operator: SearchOperator;
}
export interface SearchOrderBy {
    field: string;
    direction: "ASC" | "DESC";
}
export interface SearchPaginate {
    offset?: number;
    limit?: number;
}
export interface SearchParameters {
    parameters: SearchParameter[];
    orderBy?: SearchOrderBy[];
    paginate?: SearchPaginate;
}
