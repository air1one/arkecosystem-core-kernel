import { Enums, Interfaces } from "@arkecosystem/crypto";
import { IpcSubprocess } from "../../utils/ipc-subprocess";
export declare type SerializedTransaction = {
    id: string;
    serialized: string;
};
export interface WorkerScriptHandler {
    loadCryptoPackage(packageName: string): void;
    setConfig(networkConfig: any): void;
    setHeight(height: number): void;
    getTransactionFromData(transactionData: Interfaces.ITransactionData): Promise<SerializedTransaction>;
}
export declare type WorkerIpcSubprocess = IpcSubprocess<WorkerScriptHandler>;
export declare type WorkerIpcSubprocessFactory = () => WorkerIpcSubprocess;
export interface Worker {
    getQueueSize(): number;
    loadCryptoPackage(packageName: string): void;
    getTransactionFromData(transactionData: Interfaces.ITransactionData): Promise<Interfaces.ITransaction>;
}
export declare type WorkerFactory = () => Worker;
export interface WorkerPool {
    isTypeGroupSupported(typeGroup: Enums.TransactionTypeGroup): boolean;
    getTransactionFromData(transactionData: Interfaces.ITransactionData): Promise<Interfaces.ITransaction>;
}
