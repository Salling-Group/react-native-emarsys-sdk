declare const _default: {
    pause: () => Promise<void>;
    resume: () => Promise<void>;
    isPaused: () => Promise<boolean>;
    loadInlineInApp: (viewRef: React.ElementRef<import("react-native").HostComponent<import("./native/InlineInAppViewNativeComponent").NativeProps>>, viewId: string) => void;
};
export default _default;
