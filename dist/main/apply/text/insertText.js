"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertText = void 0;
const model_1 = require("../../model");
const path_1 = require("../../path");
/**
 * Applies a insert text operation to a SyncDoc.
 *
 * @param doc
 * @param op
 */
exports.insertText = (doc, op) => {
    const node = path_1.getTarget(doc, op.path);
    const nodeText = model_1.SyncElement.getText(node);
    nodeText.insert(op.offset, op.text);
    return doc;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0VGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS90ZXh0L2luc2VydFRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQTBDO0FBQzFDLHFDQUF1QztBQUd2Qzs7Ozs7R0FLRztBQUNVLFFBQUEsVUFBVSxHQUFtQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNwRSxNQUFNLElBQUksR0FBRyxnQkFBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFnQixDQUFDO0lBQ3BELE1BQU0sUUFBUSxHQUFHLG1CQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQzVDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMifQ==