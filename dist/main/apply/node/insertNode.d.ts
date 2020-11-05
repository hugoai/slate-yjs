import { InsertNodeOperation } from 'slate';
import { ApplyFunc } from '../types';
/**
 * Applies an insert node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
declare const insertNode: ApplyFunc<InsertNodeOperation>;
export default insertNode;
