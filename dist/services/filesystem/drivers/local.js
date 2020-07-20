"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalFilesystem = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const ioc_1 = require("../../../ioc");
/**
 * @export
 * @class LocalFilesystem
 * @implements {Filesystem}
 */
let LocalFilesystem = class LocalFilesystem {
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
        return fs_extra_1.pathExists(path);
    }
    /**
     * Get the contents of a file.
     *
     * @param {string} path
     * @returns {Promise<Buffer>}
     * @memberof LocalFilesystem
     */
    async get(path) {
        return fs_extra_1.readFile(path);
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
        try {
            await fs_extra_1.writeFile(path, contents);
            return true;
        }
        catch {
            return false;
        }
    }
    /**
     * Delete the file at a given path.
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async delete(path) {
        try {
            await fs_extra_1.remove(path);
            return true;
        }
        catch {
            return false;
        }
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
        try {
            await fs_extra_1.copyFile(from, to);
            return true;
        }
        catch {
            return false;
        }
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
        try {
            await fs_extra_1.move(from, to);
            return true;
        }
        catch {
            return false;
        }
    }
    /**
     * Get the file size of a given file.
     *
     * @param {string} path
     * @returns {Promise<number>}
     * @memberof LocalFilesystem
     */
    async size(path) {
        return (await fs_extra_1.stat(path)).size;
    }
    /**
     * Get the file's last modification time.
     *
     * @param {string} path
     * @returns {Promise<number>}
     * @memberof LocalFilesystem
     */
    async lastModified(path) {
        return +(await fs_extra_1.stat(path)).mtime;
    }
    /**
     * Get an array of all files in a directory.
     *
     * @param {string} directory
     * @returns {Promise<string[]>}
     * @memberof LocalFilesystem
     */
    async files(directory) {
        directory = path_1.resolve(directory);
        return (await fs_extra_1.readdir(directory))
            .map((item) => `${directory}/${item}`)
            .filter(async (item) => (await fs_extra_1.lstat(item)).isFile());
    }
    /**
     * Get all of the directories within a given directory.
     *
     * @param {string} directory
     * @returns {Promise<string>[]}
     * @memberof LocalFilesystem
     */
    async directories(directory) {
        directory = path_1.resolve(directory);
        return (await fs_extra_1.readdir(directory))
            .map((item) => `${directory}/${item}`)
            .filter(async (item) => (await fs_extra_1.lstat(item)).isDirectory());
    }
    /**
     * Create a directory.
     *
     * @param {*} path
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async makeDirectory(path) {
        try {
            await fs_extra_1.ensureDir(path);
            return true;
        }
        catch {
            return false;
        }
    }
    /**
     * Recursively delete a directory.
     *
     * @param {string} directory
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    async deleteDirectory(directory) {
        try {
            await fs_extra_1.rmdir(directory);
            return true;
        }
        catch {
            return false;
        }
    }
};
LocalFilesystem = __decorate([
    ioc_1.injectable()
], LocalFilesystem);
exports.LocalFilesystem = LocalFilesystem;
//# sourceMappingURL=local.js.map