import { Operation } from 'slate';
import * as Y from 'yjs';
/**
 * Converts yjs events into slate operations.
 *
 * @param events
 */
export declare const toSlateOps: (events: Y.YEvent[]) => Operation[];
/**
 * Converts a yjs event into slate operations.
 *
 * @param event
 */
export declare const toSlateOp: (event: Y.YEvent) => Operation[];
