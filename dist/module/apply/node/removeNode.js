import { SyncNode } from '../../model';
import { getParent } from '../../path';
/**
 * Applies a remove node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
export const removeNode = (doc, op) => {
    const [parent, index] = getParent(doc, op.path);
    if (SyncNode.getText(parent) !== undefined) {
        throw new TypeError("Can't remove node from text node");
    }
    SyncNode.getChildren(parent).delete(index);
    return doc;
};
export default removeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS9ub2RlL3JlbW92ZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3ZDOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFtQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNwRSxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDMUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0tBQ3pEO0lBRUQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixlQUFlLFVBQVUsQ0FBQyJ9