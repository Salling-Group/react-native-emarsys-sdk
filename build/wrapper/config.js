"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NativeEmarsysConfig_1 = __importDefault(require("./native/NativeEmarsysConfig"));
NativeEmarsysConfig_1.default.getRNWrapperVersion = () => {
    return require('../../package.json').version;
};
exports.default = NativeEmarsysConfig_1.default;
