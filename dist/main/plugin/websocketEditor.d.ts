import { Editor } from 'slate';
import { WebsocketProvider } from 'y-websocket';
import { YjsEditor } from './yjsEditor';
export interface WebsocketEditor extends Editor {
    connect: () => void;
    disconnect: () => void;
    destroy: () => void;
    websocketProvider: WebsocketProvider;
}
export declare type WebsocketEditorOptions = {
    roomName: string;
    endpoint: string;
    onConnect?: () => void;
    onDisconnect?: () => void;
} & NonNullable<ConstructorParameters<typeof WebsocketProvider>[3]>;
export declare const withWebsocket: <T extends YjsEditor>(editor: T, { endpoint, roomName, onConnect, onDisconnect, ...options }: WebsocketEditorOptions) => T & WebsocketEditor;
