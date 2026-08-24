"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = exports.default = void 0;
var NativeEmarsysInbox_1 = require("./native/NativeEmarsysInbox");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(NativeEmarsysInbox_1).default; } });
exports.Tag = {
    high: 'high',
    cancelled: 'cancelled',
    seen: 'seen',
    opened: 'opened',
    pinned: 'pinned',
    deleted: 'deleted'
};
