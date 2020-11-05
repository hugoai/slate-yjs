import { toSlatePath } from '../utils/convert';
/**
 * Converts a Yjs Map event into Slate operations.
 *
 * @param event
 */
export const mapEvent = (event) => {
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
        path: toSlatePath(event.path),
    };
    // Combine changes into a single set node operation
    return [changes.reduce(combineMapOp, baseOp)];
};
export default mapEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udmVydC9tYXBFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFRL0M7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQXVCLEVBQXNCLEVBQUU7SUFDdEUsTUFBTSxZQUFZLEdBQUcsQ0FDbkIsV0FBZ0MsRUFDSixFQUFFO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ2xDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFxQixDQUFDO1FBRWxELE9BQU87WUFDTCxhQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEQsVUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFO1NBQ3ZDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixNQUFNLFlBQVksR0FBRyxDQUNuQixFQUFvQixFQUNwQixLQUFpQyxFQUNmLEVBQUU7UUFDcEIsdUNBQ0ssRUFBRSxLQUNMLGFBQWEsa0NBQU8sRUFBRSxDQUFDLGFBQWEsR0FBSyxLQUFLLENBQUMsYUFBYSxHQUM1RCxVQUFVLGtDQUFPLEVBQUUsQ0FBQyxVQUFVLEdBQUssS0FBSyxDQUFDLFVBQVUsS0FDbkQ7SUFDSixDQUFDLENBQUM7SUFFRixzRUFBc0U7SUFDdEUsTUFBTSxJQUFJLEdBQUksS0FBSyxDQUFDLE9BQWUsQ0FBQyxJQUE4QixDQUFDO0lBQ25FLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRXpELE1BQU0sTUFBTSxHQUFxQjtRQUMvQixJQUFJLEVBQUUsVUFBVTtRQUNoQixhQUFhLEVBQUUsRUFBRTtRQUNqQixVQUFVLEVBQUUsRUFBRTtRQUNkLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztLQUM5QixDQUFDO0lBRUYsbURBQW1EO0lBQ25ELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFtQixZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFFRixlQUFlLFFBQVEsQ0FBQyJ9