import { NodeOperation } from 'slate';
import * as Y from 'yjs';
import { SyncElement } from '../model';
/**
 * Converts a Yjs Array event into Slate operations.
 *
 * @param event
 */
export declare const arrayEvent: (event: Y.YArrayEvent<SyncElement>) => NodeOperation[];
export default arrayEvent;
