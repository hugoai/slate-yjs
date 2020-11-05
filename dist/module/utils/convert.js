import { Element, Text } from 'slate';
import * as Y from 'yjs';
import { SyncElement } from '../model';
/**
 * Converts a sync element to a slate node
 *
 * @param element
 */
export const toSlateNode = (element) => {
    const text = SyncElement.getText(element);
    const children = SyncElement.getChildren(element);
    const node = {};
    if (text !== undefined) {
        node.text = text.toString();
    }
    if (children !== undefined) {
        node.children = children.map(toSlateNode);
    }
    for (const [key, value] of element.entries()) {
        if (key !== 'children' && key !== 'text') {
            node[key] = value;
        }
    }
    return node;
};
/**
 * Converts a SyncDoc to a Slate doc
 * @param doc
 */
export const toSlateDoc = (doc) => {
    return doc.map(toSlateNode);
};
/**
 * Converts all elements int a Slate doc to SyncElements and adds them
 * to the SyncDoc
 *
 * @param syncDoc
 * @param doc
 */
export const toSyncDoc = (syncDoc, doc) => {
    syncDoc.insert(0, doc.map(toSyncElement));
};
/**
 * Converts a slate node to a sync element
 *
 * @param node
 */
export const toSyncElement = (node) => {
    const element = new Y.Map();
    if (Element.isElement(node)) {
        const childElements = node.children.map(toSyncElement);
        const childContainer = new Y.Array();
        childContainer.insert(0, childElements);
        element.set('children', childContainer);
    }
    if (Text.isText(node)) {
        const textElement = new Y.Text(node.text);
        element.set('text', textElement);
    }
    for (const [key, value] of Object.entries(node)) {
        if (key !== 'children' && key !== 'text') {
            element.set(key, value);
        }
    }
    return element;
};
/**
 * Converts a SyncDoc path the a slate path
 *
 * @param path
 */
export const toSlatePath = (path) => {
    return path.filter((node) => typeof node === 'number');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQWMsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2xELE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO0FBQ3pCLE9BQU8sRUFBVyxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFaEQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQW9CLEVBQVEsRUFBRTtJQUN4RCxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbEQsTUFBTSxJQUFJLEdBQWtCLEVBQUUsQ0FBQztJQUMvQixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDN0I7SUFDRCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM1QyxJQUFJLEdBQUcsS0FBSyxVQUFVLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25CO0tBQ0Y7SUFFRCxPQUFPLElBQVksQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFZLEVBQVUsRUFBRTtJQUNqRCxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBZ0IsRUFBRSxHQUFXLEVBQVEsRUFBRTtJQUMvRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVUsRUFBZSxFQUFFO0lBQ3ZELE1BQU0sT0FBTyxHQUFnQixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUV6QyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDM0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDekM7SUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztLQUNsQztJQUVELEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQy9DLElBQUksR0FBRyxLQUFLLFVBQVUsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBeUIsRUFBUSxFQUFFO0lBQzdELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFTLENBQUM7QUFDakUsQ0FBQyxDQUFDIn0=