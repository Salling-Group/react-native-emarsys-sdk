"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysInfoPlist = void 0;
const config_plugins_1 = require("expo/config-plugins");
const constants_1 = require("../../constants");
const withEmarsysInfoPlist = (config, options) => (0, config_plugins_1.withInfoPlist)(config, config => {
    const applicationCode = options.applicationCode;
    if (applicationCode) {
        config.modResults[`${constants_1.STORE_NAME}.applicationCode`] = applicationCode;
    }
    const merchantId = options.merchantId;
    if (merchantId) {
        config.modResults[`${constants_1.STORE_NAME}.merchantId`] = merchantId;
    }
    const enableConsoleLogging = options.enableConsoleLogging;
    if (enableConsoleLogging) {
        config.modResults[`${constants_1.STORE_NAME}.enableConsoleLogging`] = enableConsoleLogging;
    }
    const sharedKeychainAccessGroup = options.iosSharedKeychainAccessGroup;
    if (sharedKeychainAccessGroup) {
        config.modResults[`${constants_1.STORE_NAME}.sharedKeychainAccessGroup`] = sharedKeychainAccessGroup;
    }
    return config;
});
exports.withEmarsysInfoPlist = withEmarsysInfoPlist;
