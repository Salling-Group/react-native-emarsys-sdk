declare const _default: {
    push: import("./wrapper/native/NativeEmarsysPush").Spec;
    inApp: {
        pause: () => Promise<void>;
        resume: () => Promise<void>;
        isPaused: () => Promise<boolean>;
        loadInlineInApp: (viewRef: React.ElementRef<import("react-native").HostComponent<import("./wrapper/native/InlineInAppViewNativeComponent").NativeProps>>, viewId: string) => void;
    };
    inbox: import("./wrapper/native/NativeEmarsysInbox").Spec;
    geofence: import("./wrapper/native/NativeEmarsysGeofence").Spec;
    predict: {
        trackCart: (items: import("./wrapper/predict").CartItem[]) => Promise<void>;
        trackPurchase: (orderId: string, items: import("./wrapper/predict").CartItem[]) => Promise<void>;
        trackItemView: (itemId: string) => Promise<void>;
        trackCategoryView: (categoryPath: string) => Promise<void>;
        trackSearchTerm: (searchTerm: string) => Promise<void>;
        trackTag: (tag: string, attributes?: import("react-native/Libraries/Types/CodegenTypes").UnsafeObject | null) => Promise<void>;
        recommendProducts: (logic: import("./wrapper/native/NativeEmarsysPredict").Logic, filters?: import("./wrapper/native/NativeEmarsysPredict").Filter[] | null, limit?: number | null, availabilityZone?: string | null) => Promise<import("./wrapper/predict").Product[]>;
        trackRecommendationClick: (product: import("./wrapper/predict").Product) => Promise<void>;
    };
    config: import("./wrapper/native/NativeEmarsysConfig").Spec;
    setEventHandler: (handler: (arg: import("./wrapper").Event) => void | Promise<void>) => import("react-native").EventSubscription;
    setContact: (contactFieldId: number, contactFieldValue: string) => Promise<void>;
    clearContact: () => Promise<void>;
    trackCustomEvent: (eventName: string, eventAttributes?: import("react-native/Libraries/Types/CodegenTypes").UnsafeObject | null) => Promise<void>;
    trackDeepLink: (url: string) => Promise<string>;
};
export default _default;
export type { Event } from './wrapper';
export { default as InlineInAppView, type Event as InlineInAppEvent, type Completion as InlineInAppCompletion, type Close as InlineInAppClose } from './wrapper/native/InlineInAppViewNativeComponent';
export { type Message, Tag, type ActionModel } from './wrapper/inbox';
export { type Geofence, type Trigger } from './wrapper/geofence';
export { type CartItem, Logic, Filter, type Product } from './wrapper/predict';
