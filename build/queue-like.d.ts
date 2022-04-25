export declare type Defined = null | number | symbol | string | object | boolean;
export interface QueueLike<T extends Defined> extends Iterable<T> {
    push(...item: T[]): void;
    shift(count?: number): T;
    getLength(): number;
}
