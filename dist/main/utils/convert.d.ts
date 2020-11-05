import { Node, Path } from 'slate';
import { SyncDoc, SyncElement } from '../model';
/**
 * Converts a sync element to a slate node
 *
 * @param element
 */
export declare const toSlateNode: (element: SyncElement) => Node;
/**
 * Converts a SyncDoc to a Slate doc
 * @param doc
 */
export declare const toSlateDoc: (doc: SyncDoc) => Node[];
/**
 * Converts all elements int a Slate doc to SyncElements and adds them
 * to the SyncDoc
 *
 * @param syncDoc
 * @param doc
 */
export declare const toSyncDoc: (syncDoc: SyncDoc, doc: Node[]) => void;
/**
 * Converts a slate node to a sync element
 *
 * @param node
 */
export declare const toSyncElement: (node: Node) => SyncElement;
/**
 * Converts a SyncDoc path the a slate path
 *
 * @param path
 */
export declare const toSlatePath: (path: (string | number)[]) => Path;
