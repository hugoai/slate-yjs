"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapEvent = void 0;
const convert_1 = require("../utils/convert");
/**
 * Converts a Yjs Map event into Slate operations.
 *
 * @param event
 */
exports.mapEvent = (event) => {
    const convertMapOp = (actionEntry) => {
        const [key, action] = actionEntry;
        const targetElement = event.target;
        return {
            newProperties: { [key]: targetElement.get(key) },
            properties: { [key]: action.oldValue },
        };
    };
    const combineMapOp = (op, props) => {
        return Object.assign(Object.assign({}, op), { newProperties: Object.assign(Object.assign({}, op.newProperties), props.newProperties), properties: Object.assign(Object.assign({}, op.properties), props.properties) });
    };
    // Yjs typings are incomplete so we need to use this hacky workaround.
    const keys = event.changes.keys;
    const changes = Array.from(keys.entries(), convertMapOp);
    const baseOp = {
        type: 'set_node',
        newProperties: {},
        properties: {},
        path: convert_1.toSlatePath(event.path),
    };
    // Combine changes into a single set node operation
    return [changes.reduce(combineMapOp, baseOp)];
};
exports.default = exports.mapEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udmVydC9tYXBFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSw4Q0FBK0M7QUFRL0M7Ozs7R0FJRztBQUNVLFFBQUEsUUFBUSxHQUFHLENBQUMsS0FBdUIsRUFBc0IsRUFBRTtJQUN0RSxNQUFNLFlBQVksR0FBRyxDQUNuQixXQUFnQyxFQUNKLEVBQUU7UUFDOUIsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDbEMsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUM7UUFFbEQsT0FBTztZQUNMLGFBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoRCxVQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUU7U0FDdkMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLENBQ25CLEVBQW9CLEVBQ3BCLEtBQWlDLEVBQ2YsRUFBRTtRQUNwQix1Q0FDSyxFQUFFLEtBQ0wsYUFBYSxrQ0FBTyxFQUFFLENBQUMsYUFBYSxHQUFLLEtBQUssQ0FBQyxhQUFhLEdBQzVELFVBQVUsa0NBQU8sRUFBRSxDQUFDLFVBQVUsR0FBSyxLQUFLLENBQUMsVUFBVSxLQUNuRDtJQUNKLENBQUMsQ0FBQztJQUVGLHNFQUFzRTtJQUN0RSxNQUFNLElBQUksR0FBSSxLQUFLLENBQUMsT0FBZSxDQUFDLElBQThCLENBQUM7SUFDbkUsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFekQsTUFBTSxNQUFNLEdBQXFCO1FBQy9CLElBQUksRUFBRSxVQUFVO1FBQ2hCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsSUFBSSxFQUFFLHFCQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztLQUM5QixDQUFDO0lBRUYsbURBQW1EO0lBQ25ELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFtQixZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFFRixrQkFBZSxnQkFBUSxDQUFDIn0=