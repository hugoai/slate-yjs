import node from './node';
import text from './text';
const nullOp = (doc) => doc;
const opMappers = Object.assign(Object.assign(Object.assign({}, text), node), { 
    // SetSelection is currently a null op since we don't support cursors
    set_selection: nullOp });
/**
 * Applies a slate operation to a SyncDoc
 *
 * @param doc
 * @param op
 */
const applySlateOp = (doc, op) => {
    try {
        const apply = opMappers[op.type];
        if (!apply) {
            throw new Error(`Unknown operation: ${op.type}`);
        }
        return apply(doc, op);
    }
    catch (e) {
        console.error(e, op, doc.toJSON());
        return doc;
    }
};
/**
 * Applies a slate operations to a SyncDoc
 *
 * @param doc
 * @param op
 */
const applySlateOps = (doc, operations) => {
    return operations.reduce(applySlateOp, doc);
};
export { applySlateOp, applySlateOps };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwbHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBQzFCLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUcxQixNQUFNLE1BQU0sR0FBYyxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0FBRWhELE1BQU0sU0FBUyxpREFDVixJQUFJLEdBQ0osSUFBSTtJQUVQLHFFQUFxRTtJQUNyRSxhQUFhLEVBQUUsTUFBTSxHQUN0QixDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDSCxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVksRUFBRSxFQUFhLEVBQVcsRUFBRTtJQUM1RCxJQUFJO1FBQ0YsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQXlCLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLENBQUM7S0FDWjtBQUNILENBQUMsQ0FBQztBQUVGOzs7OztHQUtHO0FBQ0gsTUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFZLEVBQUUsVUFBdUIsRUFBVyxFQUFFO0lBQ3ZFLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBRUYsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsQ0FBQyJ9