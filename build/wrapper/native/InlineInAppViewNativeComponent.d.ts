import React from 'react';
import type { HostComponent, ViewProps } from 'react-native';
import type { BubblingEventHandler, UnsafeMixed } from 'react-native/Libraries/Types/CodegenTypes';
export interface NativeProps extends ViewProps {
    onEvent?: BubblingEventHandler<Event> | null;
    onCompletion?: BubblingEventHandler<Completion> | null;
    onClose?: BubblingEventHandler<Close> | null;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
export interface NativeCommands {
    loadInApp: (viewRef: React.ElementRef<HostComponent<NativeProps>>, viewId: string) => void;
}
export declare const Commands: NativeCommands;
export type Event = {
    name: string;
    payload?: UnsafeMixed | null;
};
export type Completion = {
    error?: string | null;
};
export type Close = {};
