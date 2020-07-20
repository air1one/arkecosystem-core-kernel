/// <reference types="node" />
import { Filesystem } from "../../../contracts/kernel/filesystem";
/**
 * @export
 * @class LocalFilesystem
 * @implements {Filesystem}
 */
export declare class LocalFilesystem implements Filesystem {
    /**
     * Create a new instance of the filesystem.
     *
     * @returns {Promise<Filesystem>}
     * @memberof LocalFilesystem
     */
    make(): Promise<Filesystem>;
    /**
     * Determine if a file exists.
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    exists(path: string): Promise<boolean>;
    /**
     * Get the contents of a file.
     *
     * @param {string} path
     * @returns {Promise<Buffer>}
     * @memberof LocalFilesystem
     */
    get(path: string): Promise<Buffer>;
    /**
     * Write the contents of a file.
     *
     * @param {string} path
     * @param {string} contents
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    put(path: string, contents: string): Promise<boolean>;
    /**
     * Delete the file at a given path.
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    delete(path: string): Promise<boolean>;
    /**
     * Copy a file to a new location.
     *
     * @param {string} from
     * @param {string} to
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    copy(from: string, to: string): Promise<boolean>;
    /**
     * Move a file to a new location.
     *
     * @param {string} from
     * @param {string} to
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    move(from: string, to: string): Promise<boolean>;
    /**
     * Get the file size of a given file.
     *
     * @param {string} path
     * @returns {Promise<number>}
     * @memberof LocalFilesystem
     */
    size(path: string): Promise<number>;
    /**
     * Get the file's last modification time.
     *
     * @param {string} path
     * @returns {Promise<number>}
     * @memberof LocalFilesystem
     */
    lastModified(path: string): Promise<number>;
    /**
     * Get an array of all files in a directory.
     *
     * @param {string} directory
     * @returns {Promise<string[]>}
     * @memberof LocalFilesystem
     */
    files(directory: string): Promise<string[]>;
    /**
     * Get all of the directories within a given directory.
     *
     * @param {string} directory
     * @returns {Promise<string>[]}
     * @memberof LocalFilesystem
     */
    directories(directory: string): Promise<string[]>;
    /**
     * Create a directory.
     *
     * @param {*} path
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    makeDirectory(path: any): Promise<boolean>;
    /**
     * Recursively delete a directory.
     *
     * @param {string} directory
     * @returns {Promise<boolean>}
     * @memberof LocalFilesystem
     */
    deleteDirectory(directory: string): Promise<boolean>;
}
