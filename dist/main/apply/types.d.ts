import { Operation } from 'slate';
import { SyncDoc } from '../model';
export declare type ApplyFunc<O extends Operation = Operation> = (syncDoc: SyncDoc, op: O) => SyncDoc;
export declare type OpMapper<O extends Operation = Operation> = {
    [K in O['type']]: O extends {
        type: K;
    } ? ApplyFunc<O> : never;
};
