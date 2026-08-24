import { type CartItem, type Logic as _Logic, type Filter as _Filter, type Product } from './native/NativeEmarsysPredict';
declare const _default: {
    trackCart: (items: CartItem[]) => Promise<void>;
    trackPurchase: (orderId: string, items: CartItem[]) => Promise<void>;
    trackItemView: (itemId: string) => Promise<void>;
    trackCategoryView: (categoryPath: string) => Promise<void>;
    trackSearchTerm: (searchTerm: string) => Promise<void>;
    trackTag: (tag: string, attributes?: import("react-native/Libraries/Types/CodegenTypes").UnsafeObject | null) => Promise<void>;
    recommendProducts: (logic: _Logic, filters?: _Filter[] | null, limit?: number | null, availabilityZone?: string | null) => Promise<Product[]>;
    trackRecommendationClick: (product: Product) => Promise<void>;
};
export default _default;
export type { CartItem, Product };
export declare const Logic: {
    search: (searchTerm?: string | null) => _Logic;
    cart: (items?: CartItem[] | null) => _Logic;
    related: (itemId?: string | null) => _Logic;
    category: (categoryPath?: string | null) => _Logic;
    alsoBought: (itemId?: string | null) => _Logic;
    popular: (categoryPath?: string | null) => _Logic;
    personal: (variants?: string[] | null) => _Logic;
    home: (variants?: string[] | null) => _Logic;
};
export declare const Filter: {
    include: {
        isValue: (field: string, value: string) => _Filter;
        inValues: (field: string, values: string[]) => _Filter;
        hasValue: (field: string, value: string) => _Filter;
        overlapsValues: (field: string, values: string[]) => _Filter;
    };
    exclude: {
        isValue: (field: string, value: string) => _Filter;
        inValues: (field: string, values: string[]) => _Filter;
        hasValue: (field: string, value: string) => _Filter;
        overlapsValues: (field: string, values: string[]) => _Filter;
    };
};
