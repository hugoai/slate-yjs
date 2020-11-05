import * as Y from 'yjs';
import { toSlatePath } from '../utils/convert';
/**
 * Converts a Yjs Text event into Slate operations.
 *
 * @param event
 */
export const textEvent = (event) => {
    const eventTargetPath = toSlatePath(event.path);
    const createTextOp = (type, offset, text) => {
        return {
            type,
            offset,
            text,
            path: eventTargetPath,
        };
    };
    const removedValues = event.changes.deleted.values();
    let removeOffset = 0;
    let addOffset = 0;
    const removeOps = [];
    const addOps = [];
    for (const delta of event.changes.delta) {
        const d = delta;
        if (d.retain !== undefined) {
            removeOffset += d.retain;
            addOffset += d.retain;
        }
        else if (d.delete !== undefined) {
            let text = '';
            while (text.length < d.delete) {
                const item = removedValues.next().value;
                const { content } = item;
                if (!(content instanceof Y.ContentString)) {
                    throw new TypeError(`Unsupported content type ${item.content}`);
                }
                text = text.concat(content.str);
            }
            if (text.length !== d.delete) {
                throw new Error(`Unexpected length: expected ${d.delete}, got ${text.length}`);
            }
            removeOps.push(createTextOp('remove_text', removeOffset, text));
        }
        else if (d.insert !== undefined) {
            addOps.push(createTextOp('insert_text', addOffset, d.insert.join('')));
            addOffset += d.insert.length;
        }
    }
    return [...removeOps, ...addOps];
};
export default textEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dEV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnZlcnQvdGV4dEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQzs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBbUIsRUFBbUIsRUFBRTtJQUNoRSxNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELE1BQU0sWUFBWSxHQUFHLENBQ25CLElBQW1DLEVBQ25DLE1BQWMsRUFDZCxJQUFZLEVBQ0csRUFBRTtRQUNqQixPQUFPO1lBQ0wsSUFBSTtZQUNKLE1BQU07WUFDTixJQUFJO1lBQ0osSUFBSSxFQUFFLGVBQWU7U0FDdEIsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JELElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNyQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbEIsTUFBTSxTQUFTLEdBQW9CLEVBQUUsQ0FBQztJQUN0QyxNQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO0lBQ25DLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7UUFDdkMsTUFBTSxDQUFDLEdBQUcsS0FBWSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDMUIsWUFBWSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDekIsU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDdkI7YUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ2pDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUM3QixNQUFNLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUN4QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUN6QyxNQUFNLElBQUksU0FBUyxDQUFDLDRCQUE0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDakU7Z0JBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzVCLE1BQU0sSUFBSSxLQUFLLENBQ2IsK0JBQStCLENBQUMsQ0FBQyxNQUFNLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDbEU7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakU7YUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLFNBQVMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtLQUNGO0lBRUQsT0FBTyxDQUFDLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsZUFBZSxTQUFTLENBQUMifQ==