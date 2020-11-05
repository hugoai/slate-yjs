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
exports.getArrayPosition = exports.getSyncItemPath = exports.getParent = exports.getTarget = void 0;
const Y = __importStar(require("yjs"));
const model_1 = require("../model");
const convert_1 = require("../utils/convert");
const isTree = (node) => !!model_1.SyncNode.getChildren(node);
/**
 * Returns the SyncNode referenced by the path
 *
 * @param doc
 * @param path
 */
exports.getTarget = (doc, path) => {
    const iterate = (current, idx) => {
        var _a;
        if (!isTree(current) || !((_a = model_1.SyncNode.getChildren(current)) === null || _a === void 0 ? void 0 : _a.get(idx))) {
            throw new TypeError(`path ${path.toString()} does not match doc ${JSON.stringify(convert_1.toSlateDoc(doc))}`);
        }
        return model_1.SyncNode.getChildren(current).get(idx);
    };
    return path.reduce(iterate, doc);
};
const getParentPath = (path, level = 1) => {
    if (level > path.length) {
        throw new TypeError('requested ancestor is higher than root');
    }
    return [path[path.length - level], path.slice(0, path.length - level)];
};
exports.getParent = (doc, path, level = 1) => {
    const [idx, parentPath] = getParentPath(path, level);
    return [exports.getTarget(doc, parentPath), idx];
};
/**
 * Returns the document path of a sync item
 *
 * @param item
 */
exports.getSyncItemPath = (item) => {
    if (!item) {
        return [];
    }
    const parent = item.parent;
    if (parent instanceof Y.Array) {
        return [...exports.getSyncItemPath(parent._item), exports.getArrayPosition(item)];
    }
    if (parent instanceof Y.Map) {
        return exports.getSyncItemPath(parent._item);
    }
    throw new Error(`Unknown parent type ${parent}`);
};
/**
 * Returns the position of the sync item inside inside it's parent array.
 *
 * @param item
 */
exports.getArrayPosition = (item) => {
    let i = 0;
    let c = item.parent._start;
    while (c !== item && c !== null) {
        if (!c.deleted) {
            i++;
        }
        c = c.right;
    }
    return i;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGF0aC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQXlCO0FBQ3pCLG9DQUEwRDtBQUMxRCw4Q0FBOEM7QUFFOUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFjLEVBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6RTs7Ozs7R0FLRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsR0FBWSxFQUFFLElBQVUsRUFBd0IsRUFBRTtJQUMxRSxNQUFNLE9BQU8sR0FBRyxDQUFDLE9BQWlCLEVBQUUsR0FBVyxFQUFFLEVBQUU7O1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksUUFBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsMENBQUUsR0FBRyxDQUFDLEdBQUcsRUFBQyxFQUFFO1lBQ2hFLE1BQU0sSUFBSSxTQUFTLENBQ2pCLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsSUFBSSxDQUFDLFNBQVMsQ0FDMUQsb0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FDaEIsRUFBRSxDQUNKLENBQUM7U0FDSDtRQUVELE9BQU8sZ0JBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQztJQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBVyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFVLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBa0IsRUFBRTtJQUM5RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ3ZCLE1BQU0sSUFBSSxTQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQztLQUMvRDtJQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUcsQ0FDdkIsR0FBWSxFQUNaLElBQVUsRUFDVixLQUFLLEdBQUcsQ0FBQyxFQUNXLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELE9BQU8sQ0FBQyxpQkFBUyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1UsUUFBQSxlQUFlLEdBQUcsQ0FBQyxJQUFZLEVBQVEsRUFBRTtJQUNwRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0IsSUFBSSxNQUFNLFlBQVksQ0FBQyxDQUFDLEtBQUssRUFBRTtRQUM3QixPQUFPLENBQUMsR0FBRyx1QkFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsRUFBRSx3QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3BFO0lBRUQsSUFBSSxNQUFNLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUMzQixPQUFPLHVCQUFlLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1UsUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLElBQVksRUFBVSxFQUFFO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxHQUFJLElBQUksQ0FBQyxNQUErQixDQUFDLE1BQU0sQ0FBQztJQUNyRCxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNkLENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUNiO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMifQ==