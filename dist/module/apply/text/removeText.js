import { SyncElement } from '../../model';
import { getTarget } from '../../path';
/**
 * Applies a remove text operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
export const removeText = (doc, op) => {
    const node = getTarget(doc, op.path);
    const nodeText = SyncElement.getText(node);
    nodeText.delete(op.offset, op.text.length);
    return doc;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS90ZXh0L3JlbW92ZVRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3ZDOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFtQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNwRSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQWdCLENBQUM7SUFDcEQsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUM1QyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyJ9