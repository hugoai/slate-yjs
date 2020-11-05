"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../model");
const path_1 = require("../../path");
const clone_1 = require("../../utils/clone");
/**
 * Applies a move node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
const moveNode = (doc, op) => {
    const [from, fromIndex] = path_1.getParent(doc, op.path);
    const [to, toIndex] = path_1.getParent(doc, op.newPath);
    if (model_1.SyncNode.getText(from) !== undefined ||
        model_1.SyncNode.getText(to) !== undefined) {
        throw new TypeError("Can't move node as child of a text node");
    }
    const fromChildren = model_1.SyncNode.getChildren(from);
    const toChildren = model_1.SyncNode.getChildren(to);
    const toMove = fromChildren.get(fromIndex);
    const toInsert = clone_1.cloneSyncElement(toMove);
    fromChildren.delete(fromIndex);
    toChildren.insert(Math.min(toIndex, toChildren.length), [toInsert]);
    return doc;
};
exports.default = moveNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHkvbm9kZS9tb3ZlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHVDQUF1QztBQUN2QyxxQ0FBdUM7QUFDdkMsNkNBQXFEO0FBR3JEOzs7OztHQUtHO0FBQ0gsTUFBTSxRQUFRLEdBQWlDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3pELE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWpELElBQ0UsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUztRQUNwQyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxTQUFTLEVBQ2xDO1FBQ0EsTUFBTSxJQUFJLFNBQVMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0tBQ2hFO0lBRUQsTUFBTSxZQUFZLEdBQUcsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsTUFBTSxVQUFVLEdBQUcsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsTUFBTSxNQUFNLEdBQUcsWUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxNQUFNLFFBQVEsR0FBRyx3QkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUxQyxZQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLFVBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUV0RSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLGtCQUFlLFFBQVEsQ0FBQyJ9