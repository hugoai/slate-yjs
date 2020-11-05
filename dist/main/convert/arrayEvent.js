"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayEvent = void 0;
const convert_1 = require("../utils/convert");
/**
 * Converts a Yjs Array event into Slate operations.
 *
 * @param event
 */
exports.arrayEvent = (event) => {
    const eventTargetPath = convert_1.toSlatePath(event.path);
    const createRemoveNode = (index) => {
        const path = [...eventTargetPath, index];
        const node = { type: 'paragraph', children: [{ text: '' }] };
        return { type: 'remove_node', path, node };
    };
    const createInsertNode = (index, element) => {
        const path = [...eventTargetPath, index];
        const node = convert_1.toSlateNode(element);
        return { type: 'insert_node', path, node };
    };
    const sortFunc = (a, b) => a.path[a.path.length - 1] > b.path[b.path.length - 1] ? 1 : 0;
    let removeIndex = 0;
    let addIndex = 0;
    let removeOps = [];
    let addOps = [];
    for (const delta of event.changes.delta) {
        const d = delta;
        if (d.retain !== undefined) {
            removeIndex += d.retain;
            addIndex += d.retain;
        }
        else if (d.delete !== undefined) {
            for (let i = 0; i < d.delete; i += 1) {
                removeOps.push(createRemoveNode(removeIndex));
            }
        }
        else if (d.insert !== undefined) {
            addOps = addOps.concat(d.insert.map((e, i) => createInsertNode(addIndex + i, e)));
            addIndex += d.insert.length;
        }
    }
    removeOps = removeOps.sort(sortFunc);
    addOps = addOps.sort(sortFunc);
    return [...removeOps, ...addOps];
};
exports.default = exports.arrayEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXlFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb252ZXJ0L2FycmF5RXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsOENBQTREO0FBRTVEOzs7O0dBSUc7QUFDVSxRQUFBLFVBQVUsR0FBRyxDQUN4QixLQUFpQyxFQUNoQixFQUFFO0lBQ25CLE1BQU0sZUFBZSxHQUFHLHFCQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFhLEVBQWlCLEVBQUU7UUFDeEQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxNQUFNLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzdELE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDLENBQUM7SUFFRixNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLE9BQW9CLEVBQUUsRUFBRTtRQUMvRCxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLHFCQUFXLENBQUMsT0FBc0IsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQWdCLEVBQUUsQ0FBZ0IsRUFBRSxFQUFFLENBQ3RELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJLFNBQVMsR0FBb0IsRUFBRSxDQUFDO0lBQ3BDLElBQUksTUFBTSxHQUFvQixFQUFFLENBQUM7SUFDakMsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtRQUN2QyxNQUFNLENBQUMsR0FBRyxLQUFZLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMxQixXQUFXLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN4QixRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN0QjthQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7YUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWMsRUFBRSxDQUFTLEVBQUUsRUFBRSxDQUN6QyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNsQyxDQUNGLENBQUM7WUFDRixRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDN0I7S0FDRjtJQUVELFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9CLE9BQU8sQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLGtCQUFlLGtCQUFVLENBQUMifQ==