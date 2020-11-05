"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySlateOps = exports.applySlateOp = void 0;
const node_1 = __importDefault(require("./node"));
const text_1 = __importDefault(require("./text"));
const nullOp = (doc) => doc;
const opMappers = Object.assign(Object.assign(Object.assign({}, text_1.default), node_1.default), { 
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
exports.applySlateOp = applySlateOp;
/**
 * Applies a slate operations to a SyncDoc
 *
 * @param doc
 * @param op
 */
const applySlateOps = (doc, operations) => {
    return operations.reduce(applySlateOp, doc);
};
exports.applySlateOps = applySlateOps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwbHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsa0RBQTBCO0FBQzFCLGtEQUEwQjtBQUcxQixNQUFNLE1BQU0sR0FBYyxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0FBRWhELE1BQU0sU0FBUyxpREFDVixjQUFJLEdBQ0osY0FBSTtJQUVQLHFFQUFxRTtJQUNyRSxhQUFhLEVBQUUsTUFBTSxHQUN0QixDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDSCxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVksRUFBRSxFQUFhLEVBQVcsRUFBRTtJQUM1RCxJQUFJO1FBQ0YsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQXlCLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLENBQUM7S0FDWjtBQUNILENBQUMsQ0FBQztBQVlPLG9DQUFZO0FBVnJCOzs7OztHQUtHO0FBQ0gsTUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFZLEVBQUUsVUFBdUIsRUFBVyxFQUFFO0lBQ3ZFLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBRXFCLHNDQUFhIn0=