"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = exports.Logic = void 0;
const NativeEmarsysPredict_1 = __importDefault(require("./native/NativeEmarsysPredict"));
exports.default = {
    trackCart: NativeEmarsysPredict_1.default.trackCart,
    trackPurchase: NativeEmarsysPredict_1.default.trackPurchase,
    trackItemView: NativeEmarsysPredict_1.default.trackItemView,
    trackCategoryView: NativeEmarsysPredict_1.default.trackCategoryView,
    trackSearchTerm: NativeEmarsysPredict_1.default.trackSearchTerm,
    trackTag: NativeEmarsysPredict_1.default.trackTag,
    recommendProducts: (logic, filters, limit, availabilityZone) => {
        return NativeEmarsysPredict_1.default.recommendProducts(logic, filters, limit, availabilityZone);
    },
    trackRecommendationClick: (product) => {
        return NativeEmarsysPredict_1.default.trackRecommendationClick(product);
    }
};
exports.Logic = {
    search: (searchTerm) => ({ name: 'SEARCH', query: searchTerm }),
    cart: (items) => ({ name: 'CART', cartItems: items }),
    related: (itemId) => ({ name: 'RELATED', query: itemId }),
    category: (categoryPath) => ({ name: 'CATEGORY', query: categoryPath }),
    alsoBought: (itemId) => ({ name: 'ALSO_BOUGHT', query: itemId }),
    popular: (categoryPath) => ({ name: 'POPULAR', query: categoryPath }),
    personal: (variants) => ({ name: 'PERSONAL', variants: variants }),
    home: (variants) => ({ name: 'HOME', variants: variants })
};
exports.Filter = {
    include: {
        isValue: (field, value) => ({ type: 'INCLUDE', field, comparison: 'IS', expectations: [value] }),
        inValues: (field, values) => ({ type: 'INCLUDE', field, comparison: 'IN', expectations: values }),
        hasValue: (field, value) => ({ type: 'INCLUDE', field, comparison: 'HAS', expectations: [value] }),
        overlapsValues: (field, values) => ({ type: 'INCLUDE', field, comparison: 'OVERLAPS', expectations: values })
    },
    exclude: {
        isValue: (field, value) => ({ type: 'EXCLUDE', field, comparison: 'IS', expectations: [value] }),
        inValues: (field, values) => ({ type: 'EXCLUDE', field, comparison: 'IN', expectations: values }),
        hasValue: (field, value) => ({ type: 'EXCLUDE', field, comparison: 'HAS', expectations: [value] }),
        overlapsValues: (field, values) => ({ type: 'EXCLUDE', field, comparison: 'OVERLAPS', expectations: values })
    }
};
