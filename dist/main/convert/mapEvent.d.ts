import { SetNodeOperation } from 'slate';
import * as Y from 'yjs';
/**
 * Converts a Yjs Map event into Slate operations.
 *
 * @param event
 */
export declare const mapEvent: (event: Y.YMapEvent<any>) => SetNodeOperation[];
export default mapEvent;
