/// <reference types="node" />
import { Blocks, Transactions } from "@arkecosystem/crypto";
interface Assert {
    boolean: (value: unknown) => asserts value is boolean;
    buffer: (value: unknown) => asserts value is Buffer;
    number: (value: unknown) => asserts value is number;
    object: (value: unknown) => asserts value is Record<string, any>;
    string: (value: unknown) => asserts value is string;
    symbol: (value: unknown) => asserts value is symbol;
    undefined: (value: unknown) => asserts value is undefined;
    array: <T>(value: unknown) => asserts value is Array<T>;
    bigint: (value: unknown) => asserts value is bigint;
    block(value: unknown): asserts value is Blocks.Block;
    defined<T>(value: unknown): asserts value is NonNullable<T>;
    transaction(value: unknown): asserts value is Transactions.Transaction;
}
/**
 * Type assertions have to be declared with an explicit type.
 */
export declare const assert: Assert;
export {};
