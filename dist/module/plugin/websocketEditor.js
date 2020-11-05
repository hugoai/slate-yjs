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
import { WebsocketProvider } from 'y-websocket';
export const withWebsocket = (editor, _a) => {
    var { endpoint, roomName, onConnect, onDisconnect } = _a, options = __rest(_a, ["endpoint", "roomName", "onConnect", "onDisconnect"]);
    const e = editor;
    e.websocketProvider = new WebsocketProvider(endpoint, roomName, e.doc, Object.assign({ connect: false }, options));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0RWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbi93ZWJzb2NrZXRFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFpQmhELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixNQUFTLEVBQ1QsRUFNeUIsRUFDSixFQUFFO1FBUHZCLEVBQ0UsUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsWUFBWSxPQUVXLEVBRHBCLE9BQU8sY0FMWixxREFNQyxDQURXO0lBR1osTUFBTSxDQUFDLEdBQUcsTUFBNkIsQ0FBQztJQUV4QyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLGtCQUNuRSxPQUFPLEVBQUUsS0FBSyxJQUNYLE9BQU8sRUFDVixDQUFDO0lBRUgsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUF5QixFQUFFLEVBQUU7UUFDN0QsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7WUFDN0MsU0FBUyxFQUFFLENBQUM7U0FDYjtRQUVELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxjQUFjLElBQUksWUFBWSxFQUFFO1lBQ25ELFlBQVksRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNmLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtRQUNsQixDQUFDLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBRUYsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDZixDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMifQ==