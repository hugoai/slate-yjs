"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNode = void 0;
const model_1 = require("../../model");
const path_1 = require("../../path");
/**
 * Applies a remove node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
exports.removeNode = (doc, op) => {
    const [parent, index] = path_1.getParent(doc, op.path);
    if (model_1.SyncNode.getText(parent) !== undefined) {
        throw new TypeError("Can't remove node from text node");
    }
    model_1.SyncNode.getChildren(parent).delete(index);
    return doc;
};
exports.default = exports.removeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS9ub2RlL3JlbW92ZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUF1QztBQUd2Qzs7Ozs7R0FLRztBQUNVLFFBQUEsVUFBVSxHQUFtQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNwRSxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLGdCQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxJQUFJLGdCQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUMxQyxNQUFNLElBQUksU0FBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDekQ7SUFFRCxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixrQkFBZSxrQkFBVSxDQUFDIn0=