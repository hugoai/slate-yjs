"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSlatePath = exports.toSyncElement = exports.toSyncDoc = exports.toSlateDoc = exports.toSlateNode = void 0;
const slate_1 = require("slate");
const Y = __importStar(require("yjs"));
const model_1 = require("../model");
/**
 * Converts a sync element to a slate node
 *
 * @param element
 */
exports.toSlateNode = (element) => {
    const text = model_1.SyncElement.getText(element);
    const children = model_1.SyncElement.getChildren(element);
    const node = {};
    if (text !== undefined) {
        node.text = text.toString();
    }
    if (children !== undefined) {
        node.children = children.map(exports.toSlateNode);
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
exports.toSlateDoc = (doc) => {
    return doc.map(exports.toSlateNode);
};
/**
 * Converts all elements int a Slate doc to SyncElements and adds them
 * to the SyncDoc
 *
 * @param syncDoc
 * @param doc
 */
exports.toSyncDoc = (syncDoc, doc) => {
    syncDoc.insert(0, doc.map(exports.toSyncElement));
};
/**
 * Converts a slate node to a sync element
 *
 * @param node
 */
exports.toSyncElement = (node) => {
    const element = new Y.Map();
    if (slate_1.Element.isElement(node)) {
        const childElements = node.children.map(exports.toSyncElement);
        const childContainer = new Y.Array();
        childContainer.insert(0, childElements);
        element.set('children', childContainer);
    }
    if (slate_1.Text.isText(node)) {
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
exports.toSlatePath = (path) => {
    return path.filter((node) => typeof node === 'number');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBa0Q7QUFDbEQsdUNBQXlCO0FBQ3pCLG9DQUFnRDtBQUVoRDs7OztHQUlHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FBQyxPQUFvQixFQUFRLEVBQUU7SUFDeEQsTUFBTSxJQUFJLEdBQUcsbUJBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsTUFBTSxRQUFRLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbEQsTUFBTSxJQUFJLEdBQWtCLEVBQUUsQ0FBQztJQUMvQixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDN0I7SUFDRCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFXLENBQUMsQ0FBQztLQUMzQztJQUVELEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDNUMsSUFBSSxHQUFHLEtBQUssVUFBVSxJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNuQjtLQUNGO0lBRUQsT0FBTyxJQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FBQyxHQUFZLEVBQVUsRUFBRTtJQUNqRCxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQVcsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsT0FBZ0IsRUFBRSxHQUFXLEVBQVEsRUFBRTtJQUMvRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDVSxRQUFBLGFBQWEsR0FBRyxDQUFDLElBQVUsRUFBZSxFQUFFO0lBQ3ZELE1BQU0sT0FBTyxHQUFnQixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUV6QyxJQUFJLGVBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDM0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQWEsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0tBQ3pDO0lBRUQsSUFBSSxZQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDbEM7SUFFRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMvQyxJQUFJLEdBQUcsS0FBSyxVQUFVLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QjtLQUNGO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNVLFFBQUEsV0FBVyxHQUFHLENBQUMsSUFBeUIsRUFBUSxFQUFFO0lBQzdELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFTLENBQUM7QUFDakUsQ0FBQyxDQUFDIn0=