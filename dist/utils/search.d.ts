import { NumericCriteria, OrCriteria } from "../contracts/search/criteria";
import { AndExpression, BetweenExpression, EqualExpression, Expression, GreaterThanEqualExpression, LessThanEqualExpression, OrExpression } from "../contracts/search/expressions";
export declare const optimizeExpression: <TEntity>(expression: Expression<TEntity>) => Expression<TEntity>;
export declare const someOrCriteria: <TCriteria>(criteria: OrCriteria<TCriteria>, predicate: (c: TCriteria) => boolean) => boolean;
export declare const everyOrCriteria: <TCriteria>(criteria: OrCriteria<TCriteria>, predicate: (c: TCriteria) => boolean) => boolean;
export declare const hasOrCriteria: <TCriteria>(criteria: OrCriteria<TCriteria>) => boolean;
export declare const handleAndCriteria: <TEntity, TCriteria>(criteria: TCriteria, cb: <K extends keyof TCriteria>(key: K) => Promise<Expression<TEntity>>) => Promise<AndExpression<TEntity>>;
export declare const handleOrCriteria: <TEntity, TCriteria>(criteria: OrCriteria<TCriteria>, cb: (criteria: TCriteria) => Promise<Expression<TEntity>>) => Promise<OrExpression<TEntity>>;
export declare const handleNumericCriteria: <TEntity, TProperty extends keyof TEntity>(property: TProperty, criteria: NumericCriteria<NonNullable<TEntity[TProperty]>>) => Promise<EqualExpression<TEntity> | BetweenExpression<TEntity> | GreaterThanEqualExpression<TEntity> | LessThanEqualExpression<TEntity>>;
