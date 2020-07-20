"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkCannotBeDetermined = exports.EnvironmentConfigurationCannotBeLoaded = exports.ApplicationConfigurationCannotBeLoaded = exports.EnvParameter = exports.EnvNotFound = exports.InvalidConfiguration = exports.ConfigurationException = void 0;
const logic_1 = require("./logic");
/**
 * @export
 * @class ConfigurationException
 * @extends {InvalidArgumentException}
 */
class ConfigurationException extends logic_1.InvalidArgumentException {
}
exports.ConfigurationException = ConfigurationException;
/**
 * @export
 * @class InvalidConfigurationException
 * @extends {ConfigurationException}
 */
class InvalidConfiguration extends ConfigurationException {
}
exports.InvalidConfiguration = InvalidConfiguration;
/**
 * @export
 * @class EnvNotFoundException
 * @extends {ConfigurationException}
 */
class EnvNotFound extends ConfigurationException {
}
exports.EnvNotFound = EnvNotFound;
/**
 * @export
 * @class EnvParameterException
 * @extends {ConfigurationException}
 */
class EnvParameter extends ConfigurationException {
}
exports.EnvParameter = EnvParameter;
/**
 * @export
 * @class ApplicationConfigurationCannotBeLoaded
 * @extends {ConfigurationException}
 */
class ApplicationConfigurationCannotBeLoaded extends ConfigurationException {
    /**
     * @memberof ApplicationConfigurationCannotBeLoaded
     */
    constructor(message) {
        super(`Unable to load the application configuration file. ${message}`);
    }
}
exports.ApplicationConfigurationCannotBeLoaded = ApplicationConfigurationCannotBeLoaded;
/**
 * @export
 * @class EnvironmentConfigurationCannotBeLoaded
 * @extends {ConfigurationException}
 */
class EnvironmentConfigurationCannotBeLoaded extends ConfigurationException {
    /**
     * @memberof EnvironmentConfigurationCannotBeLoaded
     */
    constructor(message) {
        super(`Unable to load the environment file. ${message}`);
    }
}
exports.EnvironmentConfigurationCannotBeLoaded = EnvironmentConfigurationCannotBeLoaded;
/**
 * @export
 * @class NetworkCannotBeDetermined
 * @extends {ConfigurationException}
 */
class NetworkCannotBeDetermined extends ConfigurationException {
    /**
     * @memberof NetworkCannotBeDetermined
     */
    constructor() {
        super("Unable to discover application token or network.");
    }
}
exports.NetworkCannotBeDetermined = NetworkCannotBeDetermined;
//# sourceMappingURL=config.js.map