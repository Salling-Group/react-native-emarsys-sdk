"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysProjectBuildGradle = void 0;
const config_plugins_1 = require("expo/config-plugins");
const GOOGLE_SERVICES_CLASSPATH = "classpath('com.google.gms:google-services:4.4.4')";
const withEmarsysProjectBuildGradle = config => (0, config_plugins_1.withProjectBuildGradle)(config, config => {
    let contents = config.modResults.contents;
    if (!contents.includes(GOOGLE_SERVICES_CLASSPATH)) {
        contents = contents.replace(/(buildscript\s*{[\s\S]*?dependencies\s*{)/m, `$1\n    ${GOOGLE_SERVICES_CLASSPATH}`);
    }
    config.modResults.contents = contents;
    return config;
});
exports.withEmarsysProjectBuildGradle = withEmarsysProjectBuildGradle;
