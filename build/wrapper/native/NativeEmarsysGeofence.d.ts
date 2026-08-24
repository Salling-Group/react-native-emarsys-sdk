import { type TurboModule } from 'react-native';
import type { UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';
export interface Spec extends TurboModule {
    requestAlwaysAuthorization(): Promise<void>;
    enable(): Promise<void>;
    disable(): Promise<void>;
    isEnabled(): Promise<boolean>;
    setInitialEnterTriggerEnabled(enabled: boolean): Promise<void>;
    getRegisteredGeofences(): Promise<Geofence[]>;
}
declare const _default: Spec;
export default _default;
export type Geofence = {
    id: string;
    lat: number;
    lon: number;
    radius: number;
    waitInterval: number;
    triggers: Trigger[];
};
export type Trigger = {
    id: string;
    type: string;
    loiteringDelay: number;
    action: UnsafeObject;
};
