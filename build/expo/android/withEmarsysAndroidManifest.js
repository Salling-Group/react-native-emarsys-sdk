"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysAndroidManifest = void 0;
const config_plugins_1 = require("expo/config-plugins");
const withEmarsysAndroidHelpers_1 = require("./withEmarsysAndroidHelpers");
const constants_1 = require("../../constants");
const withEmarsysAndroidManifest = (config, options) => (0, config_plugins_1.withAndroidManifest)(config, config => {
    const applicationArray = config.modResults.manifest.application;
    if (!Array.isArray(applicationArray) || applicationArray.length === 0) {
        throw new Error("AndroidManifest.xml does not contain an <application> element.");
    }
    const app = applicationArray[0];
    if (options.applicationCode) {
        (0, withEmarsysAndroidHelpers_1.setMetaData)(app, `${constants_1.STORE_NAME}.applicationCode`, options.applicationCode);
    }
    if (options.merchantId) {
        (0, withEmarsysAndroidHelpers_1.setMetaData)(app, `${constants_1.STORE_NAME}.merchantId`, options.merchantId);
    }
    if (options.enableConsoleLogging) {
        (0, withEmarsysAndroidHelpers_1.setMetaData)(app, `${constants_1.STORE_NAME}.enableConsoleLogging`, 'true');
    }
    if (options.androidSharedPackageNames && options.androidSharedPackageNames.length > 0) {
        (0, withEmarsysAndroidHelpers_1.setMetaData)(app, `${constants_1.STORE_NAME}.sharedPackageNames`, options.androidSharedPackageNames);
    }
    if (options.androidSharedSecret) {
        (0, withEmarsysAndroidHelpers_1.setMetaData)(app, `${constants_1.STORE_NAME}.sharedSecret`, options.androidSharedSecret);
    }
    (0, withEmarsysAndroidHelpers_1.addEmarsysMessagingService)(app);
    return config;
});
exports.withEmarsysAndroidManifest = withEmarsysAndroidManifest;
