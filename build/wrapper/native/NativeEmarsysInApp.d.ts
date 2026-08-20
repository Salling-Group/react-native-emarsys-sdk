import { type TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    pause(): Promise<void>;
    resume(): Promise<void>;
    isPaused(): Promise<boolean>;
}
declare const _default: Spec;
export default _default;
