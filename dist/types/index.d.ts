import { CacheStore, Pipeline, Queue } from "../contracts/kernel";
export * from "type-fest";
export declare type KeyValuePair<T = any> = Record<string, T>;
export declare type ActionArguments = Record<string, any>;
export declare type CacheFactory<K, T> = <K, T>() => CacheStore<K, T>;
export declare type PipelineFactory = () => Pipeline;
export declare type QueueFactory = () => Queue;
