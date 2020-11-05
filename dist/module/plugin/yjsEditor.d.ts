import { Editor, Operation } from 'slate';
import * as Y from 'yjs';
import { SyncDoc } from '../model';
export interface YjsEditor extends Editor {
    isRemote: boolean;
    doc: Y.Doc;
    syncDoc: SyncDoc;
}
export declare const YjsEditor: {
    /**
     * Apply slate ops to Yjs
     */
    applySlateOps: (e: YjsEditor, operations: Operation[]) => void;
    /**
     * Apply Yjs events to slate
     */
    applyEvents: (e: YjsEditor, events: Y.YEvent[]) => void;
};
export declare const withYjs: <T extends Editor>(editor: T) => T & YjsEditor;
