import { RemoveNodeOperation } from 'slate';
import { ApplyFunc } from '../types';
/**
 * Applies a remove node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
export declare const removeNode: ApplyFunc<RemoveNodeOperation>;
export default removeNode;
