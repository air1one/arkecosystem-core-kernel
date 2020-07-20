/// <reference types="node" />
import { ChildProcess } from "child_process";
declare type Actions<T extends {}> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? (ReturnType<T[K]> extends void ? K : never) : never;
}[keyof T];
declare type Requests<T extends {}> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? (ReturnType<T[K]> extends Promise<any> ? K : never) : never;
}[keyof T];
export declare class IpcSubprocess<T> {
    private lastId;
    private readonly subprocess;
    private readonly callbacks;
    constructor(subprocess: ChildProcess);
    getQueueSize(): number;
    sendAction<K extends Actions<T>>(method: K, ...args: Parameters<T[K]>): void;
    sendRequest<K extends Requests<T>>(method: K, ...args: Parameters<T[K]>): Promise<ReturnType<T[K]>>;
    private onSubprocessMessage;
}
export {};
