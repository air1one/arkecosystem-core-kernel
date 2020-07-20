import { InvalidArgumentException } from "./logic";
/**
 * @export
 * @class ConfigurationException
 * @extends {InvalidArgumentException}
 */
export declare class ConfigurationException extends InvalidArgumentException {
}
/**
 * @export
 * @class InvalidConfigurationException
 * @extends {ConfigurationException}
 */
export declare class InvalidConfiguration extends ConfigurationException {
}
/**
 * @export
 * @class EnvNotFoundException
 * @extends {ConfigurationException}
 */
export declare class EnvNotFound extends ConfigurationException {
}
/**
 * @export
 * @class EnvParameterException
 * @extends {ConfigurationException}
 */
export declare class EnvParameter extends ConfigurationException {
}
/**
 * @export
 * @class ApplicationConfigurationCannotBeLoaded
 * @extends {ConfigurationException}
 */
export declare class ApplicationConfigurationCannotBeLoaded extends ConfigurationException {
    /**
     * @memberof ApplicationConfigurationCannotBeLoaded
     */
    constructor(message: string);
}
/**
 * @export
 * @class EnvironmentConfigurationCannotBeLoaded
 * @extends {ConfigurationException}
 */
export declare class EnvironmentConfigurationCannotBeLoaded extends ConfigurationException {
    /**
     * @memberof EnvironmentConfigurationCannotBeLoaded
     */
    constructor(message: string);
}
/**
 * @export
 * @class NetworkCannotBeDetermined
 * @extends {ConfigurationException}
 */
export declare class NetworkCannotBeDetermined extends ConfigurationException {
    /**
     * @memberof NetworkCannotBeDetermined
     */
    constructor();
}
