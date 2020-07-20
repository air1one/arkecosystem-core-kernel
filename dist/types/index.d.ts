import { CacheStore, Pipeline, Queue } from "../contracts/kernel";
import { JsonObject, PackageJson, Primitive } from "type-fest";
export { JsonObject, PackageJson, Primitive };
export declare type KeyValuePair<T = any> = Record<string, T>;
export declare type ActionArguments = Record<string, any>;
export declare type CacheFactory<K, T> = <K, T>() => CacheStore<K, T>;
export declare type PipelineFactory = () => Pipeline;
export declare type QueueFactory = () => Queue;
