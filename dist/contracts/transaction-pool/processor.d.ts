import { Interfaces } from "@arkecosystem/crypto";
export declare type ProcessorError = {
    type: string;
    message: string;
};
export interface Processor {
    accept: string[];
    broadcast: string[];
    excess: string[];
    invalid: string[];
    errors?: {
        [id: string]: ProcessorError;
    };
    process(data: Interfaces.ITransactionData[]): Promise<void>;
}
export declare type ProcessorFactory = () => Processor;
