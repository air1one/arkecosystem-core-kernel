export declare type TrueExpression = {
    op: "true";
};
export declare type FalseExpression = {
    op: "false";
};
export declare type EqualExpression<TEntity> = {
    property: keyof TEntity;
    op: "equal";
    value: any;
};
export declare type BetweenExpression<TEntity> = {
    property: keyof TEntity;
    op: "between";
    from: any;
    to: any;
};
export declare type GreaterThanEqualExpression<TEntity> = {
    property: keyof TEntity;
    op: "greaterThanEqual";
    value: any;
};
export declare type LessThanEqualExpression<TEntity> = {
    property: keyof TEntity;
    op: "lessThanEqual";
    value: any;
};
export declare type LikeExpression<TEntity> = {
    property: keyof TEntity;
    op: "like";
    pattern: any;
};
export declare type ContainsExpression<TEntity> = {
    property: keyof TEntity;
    op: "contains";
    value: any;
};
export declare type AndExpression<TEntity> = {
    op: "and";
    expressions: Expression<TEntity>[];
};
export declare type OrExpression<TEntity> = {
    op: "or";
    expressions: Expression<TEntity>[];
};
export declare type Expression<TEntity> = TrueExpression | FalseExpression | EqualExpression<TEntity> | BetweenExpression<TEntity> | GreaterThanEqualExpression<TEntity> | LessThanEqualExpression<TEntity> | LikeExpression<TEntity> | ContainsExpression<TEntity> | AndExpression<TEntity> | OrExpression<TEntity>;
