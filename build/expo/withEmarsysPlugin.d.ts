import { ConfigPlugin } from "expo/config-plugins";
declare const _default: ConfigPlugin<EMSOptions>;
export default _default;
export type EMSOptions = {
    applicationCode?: string;
    merchantId?: string;
    enableConsoleLogging?: boolean;
    androidSharedPackageNames?: string[];
    androidSharedSecret?: string;
    iosSharedKeychainAccessGroup?: string;
};
