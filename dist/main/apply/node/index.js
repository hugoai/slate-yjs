"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insertNode_1 = __importDefault(require("./insertNode"));
const mergeNode_1 = __importDefault(require("./mergeNode"));
const moveNode_1 = __importDefault(require("./moveNode"));
const removeNode_1 = __importDefault(require("./removeNode"));
const setNode_1 = __importDefault(require("./setNode"));
const splitNode_1 = __importDefault(require("./splitNode"));
const mapper = {
    insert_node: insertNode_1.default,
    merge_node: mergeNode_1.default,
    move_node: moveNode_1.default,
    remove_node: removeNode_1.default,
    set_node: setNode_1.default,
    split_node: splitNode_1.default,
};
exports.default = mapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHkvbm9kZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLDhEQUFzQztBQUN0Qyw0REFBb0M7QUFDcEMsMERBQWtDO0FBQ2xDLDhEQUFzQztBQUN0Qyx3REFBZ0M7QUFDaEMsNERBQW9DO0FBRXBDLE1BQU0sTUFBTSxHQUE0QjtJQUN0QyxXQUFXLEVBQUUsb0JBQVU7SUFDdkIsVUFBVSxFQUFFLG1CQUFTO0lBQ3JCLFNBQVMsRUFBRSxrQkFBUTtJQUNuQixXQUFXLEVBQUUsb0JBQVU7SUFDdkIsUUFBUSxFQUFFLGlCQUFPO0lBQ2pCLFVBQVUsRUFBRSxtQkFBUztDQUN0QixDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDIn0=