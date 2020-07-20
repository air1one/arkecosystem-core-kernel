export declare class Lock {
    private exclusivePromise?;
    private readonly nonExclusivePromises;
    runNonExclusive<T>(callback: () => Promise<T>): Promise<T>;
    runExclusive<T>(callback: () => Promise<T>): Promise<T>;
}
