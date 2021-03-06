"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseEvents = void 0;
// todo: move or remove these after the database rework
var DatabaseEvents;
(function (DatabaseEvents) {
    DatabaseEvents["PRE_CONNECT"] = "database.preConnect";
    DatabaseEvents["POST_CONNECT"] = "database.postConnect";
    DatabaseEvents["PRE_DISCONNECT"] = "database.preDisconnect";
    DatabaseEvents["POST_DISCONNECT"] = "database.postDisconnect";
})(DatabaseEvents = exports.DatabaseEvents || (exports.DatabaseEvents = {}));
//# sourceMappingURL=event-types.js.map