"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullFilesystem = void 0;
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class LocalFilesystem
 * @implements {Filesystem}
 */
let NullFilesystem = class NullFilesystem {
    /**
     * Create a new instance of the filesystem.
     *
     * @returns {Promise<Filesystem>}
     * @memberof LocalFilesystem
     */
    async make() {
        return this;
    }
    /**
     * Determine if a file exists.
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async exists(path) {
        return false;
    }
    /**
     * Get the contents of a file.
     *
     * @param {string} path
     * @returns {Promise<Buffer>}
     * @memberof LocalFilesystem
     */
    async get(path) {
        return Buffer.alloc(0);
    }
    /**
     * Write the contents of a file.
     *
     * @param {string} path
     * @param {string} contents
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async put(path, contents) {
        return false;
    }
    /**
     * Delete the file at a given path.
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async delete(path) {
        return false;
    }
    /**
     * Copy a file to a new location.
     *
     * @param {string} from
     * @param {string} to
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async copy(from, to) {
        return false;
    }
    /**
     * Move a file to a new location.
     *
     * @param {string} from
     * @param {string} to
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async move(from, to) {
        return false;
    }
    /**
     * Get the file size of a given file.
     *
     * @param {string} path
     * @returns {Promise<number>}
     * @memberof LocalFilesystem
     */
    async size(path) {
        return 0;
    }
    /**
     * Get the file's last modification time.
     *
     * @param {string} path
     * @returns {Promise<number>}
     * @memberof LocalFilesystem
     */
    async lastModified(path) {
        return 0;
    }
    /**
     * Get an array of all files in a directory.
     *
     * @param {string} directory
     * @returns {Promise<string[]>}
     * @memberof LocalFilesystem
     */
    async files(directory) {
        return [];
    }
    /**
     * Get all of the directories within a given directory.
     *
     * @param {string} directory
     * @returns {Promise<string>[]}
     * @memberof LocalFilesystem
     */
    async directories(directory) {
        return [];
    }
    /**
     * Create a directory.
     *
     * @param {*} path
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async makeDirectory(path) {
        return false;
    }
    /**
     * Recursively delete a directory.
     *
     * @param {string} directory
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async deleteDirectory(directory) {
        return false;
    }
};
NullFilesystem = __decorate([
    ioc_1.injectable()
], NullFilesystem);
exports.NullFilesystem = NullFilesystem;
//# sourceMappingURL=null.js.map