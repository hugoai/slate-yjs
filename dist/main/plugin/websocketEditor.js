"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withWebsocket = void 0;
const y_websocket_1 = require("y-websocket");
exports.withWebsocket = (editor, _a) => {
    var { endpoint, roomName, onConnect, onDisconnect } = _a, options = __rest(_a, ["endpoint", "roomName", "onConnect", "onDisconnect"]);
    const e = editor;
    e.websocketProvider = new y_websocket_1.WebsocketProvider(endpoint, roomName, e.doc, Object.assign({ connect: false }, options));
    e.websocketProvider.on('status', (event) => {
        if (event.status === 'connected' && onConnect) {
            onConnect();
        }
        if (event.status === 'disconnected' && onDisconnect) {
            onDisconnect();
        }
    });
    e.connect = () => {
        e.websocketProvider.connect();
    };
    e.disconnect = () => {
        e.websocketProvider.disconnect();
    };
    e.destroy = () => {
        e.websocketProvider.destroy();
    };
    return e;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0RWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbi93ZWJzb2NrZXRFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBZ0Q7QUFpQm5DLFFBQUEsYUFBYSxHQUFHLENBQzNCLE1BQVMsRUFDVCxFQU15QixFQUNKLEVBQUU7UUFQdkIsRUFDRSxRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLE9BRVcsRUFEcEIsT0FBTyxjQUxaLHFEQU1DLENBRFc7SUFHWixNQUFNLENBQUMsR0FBRyxNQUE2QixDQUFDO0lBRXhDLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLCtCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsa0JBQ25FLE9BQU8sRUFBRSxLQUFLLElBQ1gsT0FBTyxFQUNWLENBQUM7SUFFSCxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQXlCLEVBQUUsRUFBRTtRQUM3RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssV0FBVyxJQUFJLFNBQVMsRUFBRTtZQUM3QyxTQUFTLEVBQUUsQ0FBQztTQUNiO1FBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLGNBQWMsSUFBSSxZQUFZLEVBQUU7WUFDbkQsWUFBWSxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2YsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUVGLENBQUMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNmLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyJ9