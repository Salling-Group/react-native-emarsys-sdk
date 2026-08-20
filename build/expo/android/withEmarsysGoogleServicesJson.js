"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysGoogleServicesJson = void 0;
const config_plugins_1 = require("expo/config-plugins");
const withEmarsysGoogleServicesJson = (config) => {
    return (0, config_plugins_1.withDangerousMod)(config, [
        'android',
        async (config) => {
            const fs = require('fs');
            const path = require('path');
            const projectRoot = config.modRequest.projectRoot;
            const source = path.join(projectRoot, 'assets', 'google-services.json');
            const dest = path.join(projectRoot, 'android', 'app', 'google-services.json');
            if (!fs.existsSync(source)) {
                throw new Error(`google-services.json not found in assets. Please put your file at: ${source}`);
            }
            fs.mkdirSync(path.dirname(dest), { recursive: true });
            fs.copyFileSync(source, dest);
            return config;
        },
    ]);
};
exports.withEmarsysGoogleServicesJson = withEmarsysGoogleServicesJson;
