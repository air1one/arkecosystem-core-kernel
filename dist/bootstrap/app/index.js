"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * These service providers don't rely on any configuration and are
 * necessary to be available early on during the application lifecycle.
 */
__exportStar(require("./register-base-service-providers"), exports);
// Foundation
__exportStar(require("./register-error-handler"), exports);
__exportStar(require("./register-base-configuration"), exports);
__exportStar(require("./register-base-bindings"), exports);
__exportStar(require("./register-base-namespace"), exports);
__exportStar(require("./register-base-paths"), exports);
// Configuration
__exportStar(require("./load-environment-variables"), exports);
__exportStar(require("./load-configuration"), exports);
__exportStar(require("./load-cryptography"), exports);
// export * from "./watch-configuration";
// Service Providers - Application
__exportStar(require("./load-service-providers"), exports);
//# sourceMappingURL=index.js.map