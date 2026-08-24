import { ConfigPlugin } from "expo/config-plugins";
declare const _default: ConfigPlugin<EMSOptions>;
export default _default;
export type EMSOptions = {
    applicationCode?: string;
    merchantId?: string;
    enableConsoleLogging?: boolean;
    androidGoogleServicesJsonPath?: string;
    androidSmallNotificationIconPath?: string;
    androidSharedPackageNames?: string[];
    androidSharedSecret?: string;
    iosSharedKeychainAccessGroup?: string;
};
