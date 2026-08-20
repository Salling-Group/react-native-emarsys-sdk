import { type TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    setPushToken(pushToken: string): Promise<void>;
    clearPushToken(): Promise<void>;
    getPushToken(): Promise<string>;
}
declare const _default: Spec;
export default _default;
