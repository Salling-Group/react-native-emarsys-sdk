"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NativeEmarsys_1 = __importDefault(require("./native/NativeEmarsys"));
exports.default = {
    setEventHandler: (handler) => {
        const eventSubscription = NativeEmarsys_1.default.onEvent(handler);
        NativeEmarsys_1.default.setEventHandler();
        return eventSubscription;
    },
    setContact: NativeEmarsys_1.default.setContact,
    clearContact: NativeEmarsys_1.default.clearContact,
    trackCustomEvent: NativeEmarsys_1.default.trackCustomEvent,
    trackDeepLink: NativeEmarsys_1.default.trackDeepLink
};
// Track wrapper:init
(async () => {
    const version = require('../../package.json').version;
    let frameworkVersion = require('react-native/package.json').version;
    let type = 'react-native';
    // Check if expo exist
    try {
        frameworkVersion = require('expo/package.json').version;
        type = 'expo';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        // No expo
    }
    NativeEmarsys_1.default.trackCustomEvent('wrapper:init', { type, version, frameworkVersion });
})();
