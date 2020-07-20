"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpcSubprocess = void 0;
class IpcSubprocess {
    constructor(subprocess) {
        this.lastId = 1;
        this.callbacks = new Map();
        this.subprocess = subprocess;
        this.subprocess.on("message", this.onSubprocessMessage.bind(this));
    }
    getQueueSize() {
        return this.callbacks.size;
    }
    sendAction(method, ...args) {
        this.subprocess.send({ method, args });
    }
    sendRequest(method, ...args) {
        return new Promise((resolve, reject) => {
            const id = this.lastId++;
            this.callbacks.set(id, { resolve, reject });
            this.subprocess.send({ id, method, args });
        });
    }
    onSubprocessMessage(message) {
        var _a, _b;
        try {
            if ("error" in message) {
                (_a = this.callbacks.get(message.id)) === null || _a === void 0 ? void 0 : _a.reject(new Error(message.error));
            }
            else {
                (_b = this.callbacks.get(message.id)) === null || _b === void 0 ? void 0 : _b.resolve(message.result);
            }
        }
        finally {
            this.callbacks.delete(message.id);
        }
    }
}
exports.IpcSubprocess = IpcSubprocess;
//# sourceMappingURL=ipc-subprocess.js.map