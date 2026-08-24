import { type TurboModule } from 'react-native';
import type { UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';
export interface Spec extends TurboModule {
    fetchMessages(): Promise<Message[]>;
    addTag(tag: Tag, messageId: string): Promise<void>;
    removeTag(tag: Tag, messageId: string): Promise<void>;
}
declare const _default: Spec;
export default _default;
export type Message = {
    id: string;
    campaignId: string;
    collapseId?: string | null;
    title: string;
    body: string;
    imageUrl?: string | null;
    imageAltText?: string | null;
    receivedAt: number;
    updatedAt?: number | null;
    expiresAt?: string | null;
    tags?: Tag[] | null;
    properties?: UnsafeObject | null;
    actions?: ActionModel[] | null;
};
export type Tag = 'high' | 'cancelled' | 'seen' | 'opened' | 'pinned' | 'deleted';
export type ActionModel = {
    id: string;
    title: string;
    type: string;
    name?: string | null;
    payload?: UnsafeObject | null;
    url?: string | null;
};
