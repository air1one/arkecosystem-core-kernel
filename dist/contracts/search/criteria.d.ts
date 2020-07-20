export declare type EqualCriteria<T> = T;
export declare type NumericCriteria<T> = T | {
    from: T;
} | {
    to: T;
} | {
    from: T;
    to: T;
};
export declare type LikeCriteria<T> = T;
export declare type ContainsCriteria<T> = T;
export declare type OrCriteria<TCriteria> = TCriteria | TCriteria[];
export declare type OrEqualCriteria<T> = OrCriteria<EqualCriteria<T>>;
export declare type OrNumericCriteria<T> = OrCriteria<NumericCriteria<T>>;
export declare type OrLikeCriteria<T> = OrCriteria<LikeCriteria<T>>;
export declare type OrContainsCriteria<T> = OrCriteria<ContainsCriteria<T>>;
