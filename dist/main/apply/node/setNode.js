"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("../../path");
/**
 * Applies a setNode operation to a SyncDoc
 *
 * @param doc
 * @param op
 */
const setNode = (doc, op) => {
    const node = path_1.getTarget(doc, op.path);
    for (const [key, value] of Object.entries(op.newProperties)) {
        if (key === 'children' || key === 'text') {
            throw new Error(`Cannot set the "${key}" property of nodes!`);
        }
        node.set(key, value);
    }
    return doc;
};
exports.default = setNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0Tm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS9ub2RlL3NldE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxxQ0FBdUM7QUFHdkM7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sR0FBZ0MsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDdkQsTUFBTSxJQUFJLEdBQUcsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBZ0IsQ0FBQztJQUVwRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDM0QsSUFBSSxHQUFHLEtBQUssVUFBVSxJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdEI7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQyJ9