declare type Actions<T extends {}> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? (ReturnType<T[K]> extends void ? K : never) : never;
}[keyof T];
declare type Requests<T extends {}> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? (ReturnType<T[K]> extends Promise<any> ? K : never) : never;
}[keyof T];
export declare class IpcHandler<T> {
    private readonly handler;
    constructor(handler: T);
    handleAction<K extends Actions<T>>(method: K): void;
    handleRequest<K extends Requests<T>>(method: K): void;
}
export {};
