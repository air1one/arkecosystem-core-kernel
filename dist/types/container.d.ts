/**
 * A class constructor.
 */
export declare type Constructor<T = {}> = new (...args: any[]) => T;
/**
 * Function that returns T.
 */
export declare type FunctionReturning<T> = (...args: Array<any>) => T;
/**
 * A class or function returning T.
 */
export declare type ClassOrFunctionReturning<T> = FunctionReturning<T> | Constructor<T>;
