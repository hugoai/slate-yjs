import { getTarget } from '../../path';
/**
 * Applies a setNode operation to a SyncDoc
 *
 * @param doc
 * @param op
 */
const setNode = (doc, op) => {
    const node = getTarget(doc, op.path);
    for (const [key, value] of Object.entries(op.newProperties)) {
        if (key === 'children' || key === 'text') {
            throw new Error(`Cannot set the "${key}" property of nodes!`);
        }
        node.set(key, value);
    }
    return doc;
};
export default setNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0Tm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS9ub2RlL3NldE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUd2Qzs7Ozs7R0FLRztBQUNILE1BQU0sT0FBTyxHQUFnQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUN2RCxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQWdCLENBQUM7SUFFcEQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQzNELElBQUksR0FBRyxLQUFLLFVBQVUsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO1lBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixlQUFlLE9BQU8sQ0FBQyJ9