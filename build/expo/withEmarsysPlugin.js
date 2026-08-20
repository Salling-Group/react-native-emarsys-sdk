"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("expo/config-plugins");
const withEmarsysAndroid_1 = require("./android/withEmarsysAndroid");
const withEmarsysiOS_1 = require("./ios/withEmarsysiOS");
const withEmarsysPlugin = (config, options) => {
    config = (0, withEmarsysAndroid_1.withEmarsysAndroid)(config, options);
    config = (0, withEmarsysiOS_1.withEmarsysiOS)(config, options);
    return config;
};
const pkg = require("../../package.json");
exports.default = (0, config_plugins_1.createRunOncePlugin)(withEmarsysPlugin, pkg.name, pkg.version);
