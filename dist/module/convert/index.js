import _ from 'lodash';
import * as Y from 'yjs';
import arrayEvent from './arrayEvent';
import mapEvent from './mapEvent';
import textEvent from './textEvent';
/**
 * Converts yjs events into slate operations.
 *
 * @param events
 */
export const toSlateOps = (events) => {
    return _.flatten(events.map(toSlateOp));
};
/**
 * Converts a yjs event into slate operations.
 *
 * @param event
 */
export const toSlateOp = (event) => {
    if (event instanceof Y.YArrayEvent) {
        return arrayEvent(event);
    }
    if (event instanceof Y.YMapEvent) {
        return mapEvent(event);
    }
    if (event instanceof Y.YTextEvent) {
        return textEvent(event);
    }
    throw new Error('Unsupported yjs event');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udmVydC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7QUFDekIsT0FBTyxVQUFVLE1BQU0sY0FBYyxDQUFDO0FBQ3RDLE9BQU8sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFFcEM7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQWtCLEVBQWUsRUFBRTtJQUM1RCxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFlLEVBQWUsRUFBRTtJQUN4RCxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQ2xDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCO0lBRUQsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRTtRQUNoQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4QjtJQUVELElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxVQUFVLEVBQUU7UUFDakMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDIn0=