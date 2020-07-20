import * as Contracts from "./contracts";
import { JsonObject } from "./types";
/**
 * @export
 * @class Application
 * @extends {Container}
 * @implements {Application}
 */
export declare class Application implements Contracts.Kernel.Application {
    readonly container: Contracts.Kernel.Container.Container;
    /**
     * @private
     * @type {boolean}
     * @memberof Application
     */
    private booted;
    /**
     * Creates an instance of Application.
     *
     * @param {Contracts.Kernel.Container.Container} container
     * @memberof Contracts.Kernel.Application
     */
    constructor(container: Contracts.Kernel.Container.Container);
    /**
     * @param {{ flags: JsonObject; plugins: JsonObject; }} options
     * @returns {Promise<void>}
     * @memberof Application
     */
    bootstrap(options: {
        flags: JsonObject;
        plugins?: JsonObject;
    }): Promise<void>;
    /**
     * @returns {Promise<void>}
     * @memberof Application
     */
    boot(): Promise<void>;
    /**
     * @returns {Promise<void>}
     * @memberof Application
     */
    reboot(): Promise<void>;
    /**
     * @template T
     * @param {string} key
     * @param {T} [value]
     * @returns {T}
     * @memberof Application
     */
    config<T = any>(key: string, value?: T): T | undefined;
    /**
     * @returns {string}
     * @memberof Application
     */
    dirPrefix(): string;
    /**
     * @returns {string}
     * @memberof Application
     */
    namespace(): string;
    /**
     * @returns {string}
     * @memberof Application
     */
    version(): string;
    /**
     * @returns {string}
     * @memberof Application
     */
    token(): string;
    /**
     * @returns {string}
     * @memberof Application
     */
    network(): string;
    /**
     * @param {string} value
     * @memberof Application
     */
    useNetwork(value: string): void;
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    dataPath(path?: string): string;
    /**
     * @param {string} path
     * @memberof Application
     */
    useDataPath(path: string): void;
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    configPath(path?: string): string;
    /**
     * @param {string} path
     * @memberof Application
     */
    useConfigPath(path: string): void;
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    cachePath(path?: string): string;
    /**
     * @param {string} path
     * @memberof Application
     */
    useCachePath(path: string): void;
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    logPath(path?: string): string;
    /**
     * @param {string} path
     * @memberof Application
     */
    useLogPath(path: string): void;
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    tempPath(path?: string): string;
    /**
     * @param {string} path
     * @memberof Application
     */
    useTempPath(path: string): void;
    /**
     * @returns {string}
     * @memberof Application
     */
    environmentFile(): string;
    /**
     * @returns {string}
     * @memberof Application
     */
    environment(): string;
    /**
     * @param {string} value
     * @memberof Application
     */
    useEnvironment(value: string): void;
    /**
     * @returns {boolean}
     * @memberof Application
     */
    isProduction(): boolean;
    /**
     * @returns {boolean}
     * @memberof Application
     */
    isDevelopment(): boolean;
    /**
     * @returns {boolean}
     * @memberof Application
     */
    runningTests(): boolean;
    /**
     * @returns {boolean}
     * @memberof Application
     */
    isBooted(): boolean;
    /**
     * @memberof Application
     */
    enableMaintenance(): void;
    /**
     * @memberof Application
     */
    disableMaintenance(): void;
    /**
     * @returns {boolean}
     * @memberof Application
     */
    isDownForMaintenance(): boolean;
    /**
     * @param {string} [reason]
     * @param {Error} [error]
     * @returns {Promise<void>}
     * @memberof Application
     */
    terminate(reason?: string, error?: Error): Promise<void>;
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {Contracts.Kernel.Container.BindingToSyntax<T>}
     * @memberof Application
     */
    bind<T>(serviceIdentifier: Contracts.Kernel.Container.ServiceIdentifier<T>): Contracts.Kernel.Container.BindingToSyntax<T>;
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {Contracts.Kernel.Container.BindingToSyntax<T>}
     * @memberof Application
     */
    rebind<T>(serviceIdentifier: Contracts.Kernel.Container.ServiceIdentifier<T>): Contracts.Kernel.Container.BindingToSyntax<T>;
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {void}
     * @memberof Application
     */
    unbind<T>(serviceIdentifier: Contracts.Kernel.Container.ServiceIdentifier<T>): void;
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {T}
     * @memberof Application
     */
    get<T>(serviceIdentifier: Contracts.Kernel.Container.ServiceIdentifier<T>): T;
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @param {string|number|symbol} key
     * @param {any} value
     * @returns {T}
     * @memberof Application
     */
    getTagged<T>(serviceIdentifier: Contracts.Kernel.Container.ServiceIdentifier<T>, key: string | number | symbol, value: any): T;
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {boolean}
     * @memberof Application
     */
    isBound<T>(serviceIdentifier: Contracts.Kernel.Container.ServiceIdentifier<T>): boolean;
    /**
     * @template T
     * @param {Contracts.Kernel.Container.Newable<T>} constructorFunction
     * @returns {T}
     * @memberof Application
     */
    resolve<T>(constructorFunction: Contracts.Kernel.Container.Newable<T>): T;
    /**
     * Run the given type of bootstrap classes.
     *
     * @param {string} type
     * @returns {Promise<void>}
     * @memberof Application
     */
    private bootstrapWith;
    /**
     * @private
     * @returns {Promise<void>}
     * @memberof Application
     */
    private registerEventDispatcher;
    /**
     * @private
     * @returns {Promise<void>}
     * @memberof Application
     */
    private disposeServiceProviders;
    /**
     * @private
     * @param {string} type
     * @returns {string}
     * @memberof Application
     */
    private getPath;
    /**
     * @private
     * @param {string} type
     * @param {string} path
     * @memberof Application
     */
    private usePath;
}
