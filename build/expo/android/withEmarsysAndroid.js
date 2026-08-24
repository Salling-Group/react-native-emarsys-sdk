"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysAndroid = void 0;
const withEmarsysProjectBuildGradle_1 = require("./withEmarsysProjectBuildGradle");
const withEmarsysAppBuildGradle_1 = require("./withEmarsysAppBuildGradle");
const withEmarsysAndroidManifest_1 = require("./withEmarsysAndroidManifest");
const withEmarsysSmallNotificationIcon_1 = require("./withEmarsysSmallNotificationIcon");
const withEmarsysGoogleServicesJson_1 = require("./withEmarsysGoogleServicesJson");
const withEmarsysAndroid = (config, options) => {
    config = (0, withEmarsysProjectBuildGradle_1.withEmarsysProjectBuildGradle)(config);
    config = (0, withEmarsysAppBuildGradle_1.withEmarsysAppBuildGradle)(config);
    config = (0, withEmarsysAndroidManifest_1.withEmarsysAndroidManifest)(config, options);
    config = (0, withEmarsysGoogleServicesJson_1.withEmarsysGoogleServicesJson)(config, options);
    config = (0, withEmarsysSmallNotificationIcon_1.withEmarsysSmallNotificationIcon)(config, options);
    return config;
};
exports.withEmarsysAndroid = withEmarsysAndroid;
