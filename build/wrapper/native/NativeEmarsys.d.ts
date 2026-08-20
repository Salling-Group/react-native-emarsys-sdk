import { type TurboModule } from 'react-native';
import type { EventEmitter, UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';
export interface Spec extends TurboModule {
    readonly onEvent: EventEmitter<Event>;
    setEventHandler(): Promise<void>;
    setContact(contactFieldId: number, contactFieldValue: string): Promise<void>;
    clearContact(): Promise<void>;
    trackCustomEvent(eventName: string, eventAttributes?: UnsafeObject | null): Promise<void>;
    trackDeepLink(url: string): Promise<string>;
}
declare const _default: Spec;
export default _default;
export type Event = {
    name: string;
    payload?: UnsafeObject | null;
};
