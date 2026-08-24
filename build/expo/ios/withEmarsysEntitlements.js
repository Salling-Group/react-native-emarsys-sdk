"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysEntitlements = void 0;
const config_plugins_1 = require("expo/config-plugins");
const withEmarsysEntitlements = (config, options) => (0, config_plugins_1.withEntitlementsPlist)(config, config => {
    if (options.iosSharedKeychainAccessGroup) {
        if (!config.modResults['keychain-access-groups']) {
            config.modResults['keychain-access-groups'] = [];
        }
        const keychainGroups = config.modResults['keychain-access-groups'];
        if (!keychainGroups.includes(options.iosSharedKeychainAccessGroup)) {
            keychainGroups.push(options.iosSharedKeychainAccessGroup);
        }
    }
    return config;
});
exports.withEmarsysEntitlements = withEmarsysEntitlements;
