import { SyncNode } from '../../model';
import { getParent } from '../../path';
import { cloneSyncElement } from '../../utils/clone';
/**
 * Applies a move node operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
const moveNode = (doc, op) => {
    const [from, fromIndex] = getParent(doc, op.path);
    const [to, toIndex] = getParent(doc, op.newPath);
    if (SyncNode.getText(from) !== undefined ||
        SyncNode.getText(to) !== undefined) {
        throw new TypeError("Can't move node as child of a text node");
    }
    const fromChildren = SyncNode.getChildren(from);
    const toChildren = SyncNode.getChildren(to);
    const toMove = fromChildren.get(fromIndex);
    const toInsert = cloneSyncElement(toMove);
    fromChildren.delete(fromIndex);
    toChildren.insert(Math.min(toIndex, toChildren.length), [toInsert]);
    return doc;
};
export default moveNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHkvbm9kZS9tb3ZlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHckQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFFBQVEsR0FBaUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDekQsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWpELElBQ0UsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTO1FBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxFQUNsQztRQUNBLE1BQU0sSUFBSSxTQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztLQUNoRTtJQUVELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxNQUFNLE1BQU0sR0FBRyxZQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTFDLFlBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsVUFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXRFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsZUFBZSxRQUFRLENBQUMifQ==