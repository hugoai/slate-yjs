import { Path } from 'slate';
import * as Y from 'yjs';
import { SyncDoc, SyncNode } from '../model';
/**
 * Returns the SyncNode referenced by the path
 *
 * @param doc
 * @param path
 */
export declare const getTarget: (doc: SyncDoc, path: Path) => SyncNode | undefined;
export declare const getParent: (doc: SyncDoc, path: Path, level?: number) => [SyncNode, number];
/**
 * Returns the document path of a sync item
 *
 * @param item
 */
export declare const getSyncItemPath: (item: Y.Item) => Path;
/**
 * Returns the position of the sync item inside inside it's parent array.
 *
 * @param item
 */
export declare const getArrayPosition: (item: Y.Item) => number;
