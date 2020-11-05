"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withYjs = exports.YjsEditor = void 0;
const slate_1 = require("slate");
const Y = __importStar(require("yjs"));
const apply_1 = require("../apply");
const convert_1 = require("../convert");
exports.YjsEditor = {
    /**
     * Apply slate ops to Yjs
     */
    applySlateOps: (e, operations) => {
        try {
            e.doc.transact(() => {
                apply_1.applySlateOps(e.syncDoc, operations);
            });
        }
        catch (e) {
            console.error(e);
        }
    },
    /**
     * Apply Yjs events to slate
     */
    applyEvents: (e, events) => {
        const remoteEvents = events.filter((event) => !event.transaction.local);
        if (remoteEvents.length == 0) {
            return;
        }
        e.isRemote = true;
        slate_1.Editor.withoutNormalizing(e, () => {
            convert_1.toSlateOps(remoteEvents).forEach((op) => {
                e.apply(op);
            });
        });
        Promise.resolve().then(() => (e.isRemote = false));
    },
};
exports.withYjs = (editor) => {
    const e = editor;
    const doc = new Y.Doc();
    const syncDoc = doc.getArray('content');
    syncDoc.observeDeep((events) => {
        exports.YjsEditor.applyEvents(e, events);
    });
    e.doc = doc;
    e.syncDoc = syncDoc;
    e.isRemote = false;
    const { onChange } = editor;
    e.onChange = () => {
        if (!e.isRemote) {
            exports.YjsEditor.applySlateOps(e, e.operations);
        }
        if (onChange) {
            onChange();
        }
    };
    return e;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWpzRWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbi95anNFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUEwQztBQUMxQyx1Q0FBeUI7QUFDekIsb0NBQWlFO0FBQ2pFLHdDQUF3QztBQVMzQixRQUFBLFNBQVMsR0FBRztJQUN2Qjs7T0FFRztJQUNILGFBQWEsRUFBRSxDQUFDLENBQVksRUFBRSxVQUF1QixFQUFFLEVBQUU7UUFDdkQsSUFBSTtZQUNGLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDbEIscUJBQW9CLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxFQUFFLENBQUMsQ0FBWSxFQUFFLE1BQWtCLEVBQUUsRUFBRTtRQUNoRCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVsQixjQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNoQyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUN0QyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxDQUFtQixNQUFTLEVBQWlCLEVBQUU7SUFDcEUsTUFBTSxDQUFDLEdBQUcsTUFBdUIsQ0FBQztJQUVsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFjLFNBQVMsQ0FBQyxDQUFDO0lBRXJELE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUM3QixpQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNaLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRW5CLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDNUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDZixpQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLEVBQUUsQ0FBQztTQUNaO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMifQ==