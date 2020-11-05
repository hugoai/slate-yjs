import { TextOperation } from 'slate';
import * as Y from 'yjs';
/**
 * Converts a Yjs Text event into Slate operations.
 *
 * @param event
 */
export declare const textEvent: (event: Y.YTextEvent) => TextOperation[];
export default textEvent;
