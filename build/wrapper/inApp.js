"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NativeEmarsysInApp_1 = __importDefault(require("./native/NativeEmarsysInApp"));
const InlineInAppViewNativeComponent_1 = require("./native/InlineInAppViewNativeComponent");
exports.default = {
    pause: NativeEmarsysInApp_1.default.pause,
    resume: NativeEmarsysInApp_1.default.resume,
    isPaused: NativeEmarsysInApp_1.default.isPaused,
    loadInlineInApp: InlineInAppViewNativeComponent_1.Commands.loadInApp
};
