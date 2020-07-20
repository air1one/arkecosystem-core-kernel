"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pm2ProcessActionsService = void 0;
const io_1 = __importDefault(require("@pm2/io"));
const ioc_1 = require("../../../ioc");
let Pm2ProcessActionsService = class Pm2ProcessActionsService {
    register(remoteAction) {
        io_1.default.action(remoteAction.name, (reply) => {
            remoteAction
                .handler()
                .then((response) => {
                reply({ response: response });
            })
                .catch((err) => {
                reply({ error: err.stack });
            });
        });
    }
};
Pm2ProcessActionsService = __decorate([
    ioc_1.injectable()
], Pm2ProcessActionsService);
exports.Pm2ProcessActionsService = Pm2ProcessActionsService;
//# sourceMappingURL=pm2.js.map