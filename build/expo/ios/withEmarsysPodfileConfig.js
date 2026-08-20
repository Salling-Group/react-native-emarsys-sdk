"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysPodfileConfig = void 0;
const config_plugins_1 = require("expo/config-plugins");
const withEmarsysPodfileConfig = (config) => {
    config = (0, config_plugins_1.withPodfileProperties)(config, ({ modResults, ...config }) => {
        modResults = {
            ...modResults,
            "ios.useFrameworks": "static",
            "ios.deploymentTarget": "15.1",
        };
        return {
            modResults,
            ...config,
        };
    });
    return config;
};
exports.withEmarsysPodfileConfig = withEmarsysPodfileConfig;
