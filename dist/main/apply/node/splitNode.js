"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../model");
const path_1 = require("../../path");
const clone_1 = require("../../utils/clone");
/**
 * Applies a split node operation to a SyncDoc
 *
 * @param doc
 * @param op
 */
const splitNode = (doc, op) => {
    const [parent, index] = path_1.getParent(doc, op.path);
    const target = model_1.SyncNode.getChildren(parent).get(index);
    const inject = clone_1.cloneSyncElement(target);
    model_1.SyncNode.getChildren(parent).insert(index + 1, [inject]);
    if (model_1.SyncNode.getText(target) !== undefined) {
        const targetText = model_1.SyncNode.getText(target);
        const injectText = model_1.SyncNode.getText(inject);
        if (targetText.length > op.position) {
            targetText.delete(op.position, targetText.length - op.position);
        }
        if (injectText !== undefined && op.position !== undefined) {
            injectText.delete(0, op.position);
        }
    }
    else {
        const targetChildren = model_1.SyncNode.getChildren(target);
        const injectChildren = model_1.SyncNode.getChildren(inject);
        targetChildren.delete(op.position, targetChildren.length - op.position);
        if (op.position !== undefined) {
            injectChildren.delete(0, op.position);
        }
    }
    return doc;
};
exports.default = splitNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXROb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcGx5L25vZGUvc3BsaXROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUF1QztBQUN2Qyw2Q0FBcUQ7QUFHckQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFNBQVMsR0FBa0MsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDM0QsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBdUIsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBFLE1BQU0sTUFBTSxHQUFHLGdCQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxNQUFNLE1BQU0sR0FBRyx3QkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFMUQsSUFBSSxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDMUMsTUFBTSxVQUFVLEdBQUcsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDN0MsTUFBTSxVQUFVLEdBQUcsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLENBQUM7UUFFN0MsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3pELFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQztLQUNGO1NBQU07UUFDTCxNQUFNLGNBQWMsR0FBRyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUNyRCxNQUFNLGNBQWMsR0FBRyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUVyRCxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEUsSUFBSSxFQUFFLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUM3QixjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7S0FDRjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIn0=