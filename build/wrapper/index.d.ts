import type { EventSubscription } from 'react-native';
import { type Event } from './native/NativeEmarsys';
declare const _default: {
    setEventHandler: (handler: (arg: Event) => void | Promise<void>) => EventSubscription;
    setContact: (contactFieldId: number, contactFieldValue: string) => Promise<void>;
    clearContact: () => Promise<void>;
    trackCustomEvent: (eventName: string, eventAttributes?: import("react-native/Libraries/Types/CodegenTypes").UnsafeObject | null) => Promise<void>;
    trackDeepLink: (url: string) => Promise<string>;
};
export default _default;
export type { Event };
