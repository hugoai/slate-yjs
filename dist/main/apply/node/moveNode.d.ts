import { MoveNodeOperation } from 'slate';
import { ApplyFunc } from '../types';
/**
 * Applies a move node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
declare const moveNode: ApplyFunc<MoveNodeOperation>;
export default moveNode;
