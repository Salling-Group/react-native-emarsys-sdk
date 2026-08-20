"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysiOS = void 0;
const withEmarsysInfoPlist_1 = require("./withEmarsysInfoPlist");
const withEmarsysDangerousMod_1 = require("./withEmarsysDangerousMod");
const withEmarsysXcodeProject_1 = require("./withEmarsysXcodeProject");
const withEmarsysPodfileConfig_1 = require("./withEmarsysPodfileConfig");
const withEmarsysEntitlements_1 = require("./withEmarsysEntitlements");
const withEmarsysiOS = (config, options) => {
    config = (0, withEmarsysInfoPlist_1.withEmarsysInfoPlist)(config, options);
    config = (0, withEmarsysDangerousMod_1.withEmarsysDangerousMod)(config, options);
    config = (0, withEmarsysXcodeProject_1.withEmarsysXcodeProject)(config, options);
    config = (0, withEmarsysPodfileConfig_1.withEmarsysPodfileConfig)(config);
    config = (0, withEmarsysEntitlements_1.withEmarsysEntitlements)(config, options);
    return config;
};
exports.withEmarsysiOS = withEmarsysiOS;
