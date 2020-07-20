"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchScope = exports.WalletIndexes = void 0;
var WalletIndexes;
(function (WalletIndexes) {
    WalletIndexes["Addresses"] = "addresses";
    WalletIndexes["PublicKeys"] = "publicKeys";
    WalletIndexes["Usernames"] = "usernames";
    WalletIndexes["Resignations"] = "resignations";
    WalletIndexes["Locks"] = "locks";
    WalletIndexes["Ipfs"] = "ipfs";
    WalletIndexes["Businesses"] = "businesses";
    WalletIndexes["BridgeChains"] = "bridgechains";
})(WalletIndexes = exports.WalletIndexes || (exports.WalletIndexes = {}));
var SearchScope;
(function (SearchScope) {
    SearchScope[SearchScope["Wallets"] = 0] = "Wallets";
    SearchScope[SearchScope["Delegates"] = 1] = "Delegates";
    SearchScope[SearchScope["Locks"] = 2] = "Locks";
    SearchScope[SearchScope["Entities"] = 3] = "Entities";
})(SearchScope = exports.SearchScope || (exports.SearchScope = {}));
//# sourceMappingURL=wallets.js.map