"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpcHandler = void 0;
class IpcHandler {
    constructor(handler) {
        this.handler = handler;
    }
    handleAction(method) {
        process.on("message", (message) => {
            if (message.method === method) {
                this.handler[method](...message.args);
            }
        });
    }
    handleRequest(method) {
        process.on("message", async (message) => {
            if (message.method === method) {
                try {
                    const result = await this.handler[method](...message.args);
                    process.send({ id: message.id, result });
                }
                catch (error) {
                    process.send({ id: message.id, error: error.message });
                }
            }
        });
    }
}
exports.IpcHandler = IpcHandler;
//# sourceMappingURL=ipc-handler.js.map