"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../model");
const path_1 = require("../../path");
const convert_1 = require("../../utils/convert");
/**
 * Applies an insert node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
const insertNode = (doc, op) => {
    const [parent, index] = path_1.getParent(doc, op.path);
    const children = model_1.SyncNode.getChildren(parent);
    if (model_1.SyncNode.getText(parent) !== undefined || !children) {
        throw new TypeError("Can't insert node into text node");
    }
    model_1.SyncNode.getChildren(parent).insert(index, [convert_1.toSyncElement(op.node)]);
    return doc;
};
exports.default = insertNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0Tm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS9ub2RlL2luc2VydE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBdUM7QUFDdkMscUNBQXVDO0FBQ3ZDLGlEQUFvRDtBQUdwRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxHQUFtQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM3RCxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLGdCQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxNQUFNLFFBQVEsR0FBRyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxJQUFJLGdCQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUN2RCxNQUFNLElBQUksU0FBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDekQ7SUFFRCxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsdUJBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsVUFBVSxDQUFDIn0=