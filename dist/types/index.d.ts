import { CacheStore, Pipeline, Queue } from "../contracts/kernel";
import { JsonObject, PackageJson, Primitive, Class } from "type-fest";
export { JsonObject, PackageJson, Primitive, Class };
export declare type KeyValuePair<T = any> = Record<string, T>;
export declare type ActionArguments = Record<string, any>;
export declare type CacheFactory<K, T> = <K, T>() => CacheStore<K, T>;
export declare type PipelineFactory = () => Pipeline;
export declare type QueueFactory = () => Queue;
