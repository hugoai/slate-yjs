import { SyncNode } from '../../model';
import { getParent } from '../../path';
import { toSyncElement } from '../../utils/convert';
/**
 * Applies an insert node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
const insertNode = (doc, op) => {
    const [parent, index] = getParent(doc, op.path);
    const children = SyncNode.getChildren(parent);
    if (SyncNode.getText(parent) !== undefined || !children) {
        throw new TypeError("Can't insert node into text node");
    }
    SyncNode.getChildren(parent).insert(index, [toSyncElement(op.node)]);
    return doc;
};
export default insertNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0Tm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS9ub2RlL2luc2VydE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdwRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxHQUFtQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM3RCxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUN2RCxNQUFNLElBQUksU0FBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDekQ7SUFFRCxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLGVBQWUsVUFBVSxDQUFDIn0=