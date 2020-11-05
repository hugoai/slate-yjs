"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../model");
const path_1 = require("../../path");
const clone_1 = require("../../utils/clone");
/**
 * Applies a merge node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
const mergeNode = (doc, op) => {
    const [parent, index] = path_1.getParent(doc, op.path);
    const children = model_1.SyncNode.getChildren(parent);
    const prev = children.get(index - 1);
    const next = children.get(index);
    const prevText = model_1.SyncNode.getText(prev);
    const nextText = model_1.SyncNode.getText(next);
    if (prevText && nextText) {
        prevText.insert(prevText.length, nextText.toString());
    }
    else {
        const toPush = model_1.SyncNode.getChildren(next).map(clone_1.cloneSyncElement);
        model_1.SyncNode.getChildren(prev).push(toPush);
    }
    model_1.SyncNode.getChildren(parent).delete(index, 1);
    return doc;
};
exports.default = mergeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcGx5L25vZGUvbWVyZ2VOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUF1QztBQUN2Qyw2Q0FBcUQ7QUFHckQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFNBQVMsR0FBa0MsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDM0QsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxnQkFBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEQsTUFBTSxRQUFRLEdBQUcsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsTUFBTSxJQUFJLEdBQUcsUUFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsTUFBTSxJQUFJLEdBQUcsUUFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsQyxNQUFNLFFBQVEsR0FBRyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxNQUFNLFFBQVEsR0FBRyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QyxJQUFJLFFBQVEsSUFBSSxRQUFRLEVBQUU7UUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZEO1NBQU07UUFDTCxNQUFNLE1BQU0sR0FBRyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQWdCLENBQUMsQ0FBQztRQUNqRSxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUM7SUFFRCxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIn0=