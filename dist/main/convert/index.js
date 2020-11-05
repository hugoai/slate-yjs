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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSlateOp = exports.toSlateOps = void 0;
const lodash_1 = __importDefault(require("lodash"));
const Y = __importStar(require("yjs"));
const arrayEvent_1 = __importDefault(require("./arrayEvent"));
const mapEvent_1 = __importDefault(require("./mapEvent"));
const textEvent_1 = __importDefault(require("./textEvent"));
/**
 * Converts yjs events into slate operations.
 *
 * @param events
 */
exports.toSlateOps = (events) => {
    return lodash_1.default.flatten(events.map(exports.toSlateOp));
};
/**
 * Converts a yjs event into slate operations.
 *
 * @param event
 */
exports.toSlateOp = (event) => {
    if (event instanceof Y.YArrayEvent) {
        return arrayEvent_1.default(event);
    }
    if (event instanceof Y.YMapEvent) {
        return mapEvent_1.default(event);
    }
    if (event instanceof Y.YTextEvent) {
        return textEvent_1.default(event);
    }
    throw new Error('Unsupported yjs event');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udmVydC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXVCO0FBRXZCLHVDQUF5QjtBQUN6Qiw4REFBc0M7QUFDdEMsMERBQWtDO0FBQ2xDLDREQUFvQztBQUVwQzs7OztHQUlHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FBQyxNQUFrQixFQUFlLEVBQUU7SUFDNUQsT0FBTyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDVSxRQUFBLFNBQVMsR0FBRyxDQUFDLEtBQWUsRUFBZSxFQUFFO0lBQ3hELElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUU7UUFDbEMsT0FBTyxvQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCO0lBRUQsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRTtRQUNoQyxPQUFPLGtCQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7SUFFRCxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsVUFBVSxFQUFFO1FBQ2pDLE9BQU8sbUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6QjtJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMifQ==