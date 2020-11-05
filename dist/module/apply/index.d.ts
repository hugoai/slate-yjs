import { Operation } from 'slate';
import { SyncDoc } from '../model';
/**
 * Applies a slate operation to a SyncDoc
 *
 * @param doc
 * @param op
 */
declare const applySlateOp: (doc: SyncDoc, op: Operation) => SyncDoc;
/**
 * Applies a slate operations to a SyncDoc
 *
 * @param doc
 * @param op
 */
declare const applySlateOps: (doc: SyncDoc, operations: Operation[]) => SyncDoc;
export { applySlateOp, applySlateOps };
