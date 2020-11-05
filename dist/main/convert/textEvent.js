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
exports.textEvent = void 0;
const Y = __importStar(require("yjs"));
const convert_1 = require("../utils/convert");
/**
 * Converts a Yjs Text event into Slate operations.
 *
 * @param event
 */
exports.textEvent = (event) => {
    const eventTargetPath = convert_1.toSlatePath(event.path);
    const createTextOp = (type, offset, text) => {
        return {
            type,
            offset,
            text,
            path: eventTargetPath,
        };
    };
    const removedValues = event.changes.deleted.values();
    let removeOffset = 0;
    let addOffset = 0;
    const removeOps = [];
    const addOps = [];
    for (const delta of event.changes.delta) {
        const d = delta;
        if (d.retain !== undefined) {
            removeOffset += d.retain;
            addOffset += d.retain;
        }
        else if (d.delete !== undefined) {
            let text = '';
            while (text.length < d.delete) {
                const item = removedValues.next().value;
                const { content } = item;
                if (!(content instanceof Y.ContentString)) {
                    throw new TypeError(`Unsupported content type ${item.content}`);
                }
                text = text.concat(content.str);
            }
            if (text.length !== d.delete) {
                throw new Error(`Unexpected length: expected ${d.delete}, got ${text.length}`);
            }
            removeOps.push(createTextOp('remove_text', removeOffset, text));
        }
        else if (d.insert !== undefined) {
            addOps.push(createTextOp('insert_text', addOffset, d.insert.join('')));
            addOffset += d.insert.length;
        }
    }
    return [...removeOps, ...addOps];
};
exports.default = exports.textEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dEV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnZlcnQvdGV4dEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBeUI7QUFDekIsOENBQStDO0FBRS9DOzs7O0dBSUc7QUFDVSxRQUFBLFNBQVMsR0FBRyxDQUFDLEtBQW1CLEVBQW1CLEVBQUU7SUFDaEUsTUFBTSxlQUFlLEdBQUcscUJBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEQsTUFBTSxZQUFZLEdBQUcsQ0FDbkIsSUFBbUMsRUFDbkMsTUFBYyxFQUNkLElBQVksRUFDRyxFQUFFO1FBQ2pCLE9BQU87WUFDTCxJQUFJO1lBQ0osTUFBTTtZQUNOLElBQUk7WUFDSixJQUFJLEVBQUUsZUFBZTtTQUN0QixDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixNQUFNLFNBQVMsR0FBb0IsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sTUFBTSxHQUFvQixFQUFFLENBQUM7SUFDbkMsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtRQUN2QyxNQUFNLENBQUMsR0FBRyxLQUFZLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMxQixZQUFZLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN6QixTQUFTLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN2QjthQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDakMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3pDLE1BQU0sSUFBSSxTQUFTLENBQUMsNEJBQTRCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUNqRTtnQkFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsTUFBTSxJQUFJLEtBQUssQ0FDYiwrQkFBK0IsQ0FBQyxDQUFDLE1BQU0sU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNsRTtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqRTthQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzlCO0tBQ0Y7SUFFRCxPQUFPLENBQUMsR0FBRyxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixrQkFBZSxpQkFBUyxDQUFDIn0=