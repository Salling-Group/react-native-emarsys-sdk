"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysSmallNotificationIcon = void 0;
const config_plugins_1 = require("expo/config-plugins");
const withEmarsysAndroidHelpers_1 = require("./withEmarsysAndroidHelpers");
const withEmarsysSmallNotificationIcon = (config, options) => {
    if (!options.androidSmallNotificationIconPath) {
        console.warn('androidSmallNotificationIconPath not available. Skipping configuration.');
        return config;
    }
    config = (0, config_plugins_1.withDangerousMod)(config, [
        'android',
        async (config) => {
            const fs = require('fs');
            const path = require('path');
            const projectRoot = config.modRequest.projectRoot;
            const notificationIconFile = path.basename(options.androidSmallNotificationIconPath);
            const source = path.join(projectRoot, options.androidSmallNotificationIconPath);
            const dest = path.join(projectRoot, 'android', 'app', 'src', 'main', 'res', 'drawable', notificationIconFile);
            if (!fs.existsSync(source)) {
                console.warn(`File ${source} does not exist. Skipping file copy.`);
                return config;
            }
            fs.mkdirSync(path.dirname(dest), { recursive: true });
            fs.copyFileSync(source, dest);
            return config;
        },
    ]);
    config = (0, config_plugins_1.withAndroidManifest)(config, config => {
        const fs = require('fs');
        const path = require('path');
        const projectRoot = config.modRequest.projectRoot;
        const notificationIconFile = path.basename(options.androidSmallNotificationIconPath);
        const notificationIconName = path.parse(options.androidSmallNotificationIconPath).name;
        const dest = path.join(projectRoot, 'android', 'app', 'src', 'main', 'res', 'drawable', notificationIconFile);
        if (!fs.existsSync(dest)) {
            console.warn(`File ${dest} does not exist. Skipping AndroidManifest update.`);
            return config;
        }
        const applicationArray = config.modResults.manifest.application;
        if (Array.isArray(applicationArray) && applicationArray.length > 0) {
            const app = applicationArray[0];
            (0, withEmarsysAndroidHelpers_1.setMetaData)(app, 'com.emarsys.mobileengage.small_notification_icon', { resource: `@drawable/${notificationIconName}` });
        }
        return config;
    });
    return config;
};
exports.withEmarsysSmallNotificationIcon = withEmarsysSmallNotificationIcon;
