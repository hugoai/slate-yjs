import { MergeNodeOperation } from 'slate';
import { ApplyFunc } from '../types';
/**
 * Applies a merge node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
declare const mergeNode: ApplyFunc<MergeNodeOperation>;
export default mergeNode;
