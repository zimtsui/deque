export declare type ElementType = null | number | symbol | string | object;
export interface QueueLike<T extends ElementType> extends Iterable<T> {
    (index: number): T;
    [Symbol.iterator]: () => Iterator<T>;
    push(item: T): void;
    shift(): T;
    length: number;
}
export interface DequeLike<T extends ElementType> extends QueueLike<T> {
    pop(): T;
    unshift(item: T): void;
}
/**
 * This is a factory function. Do not prepend a "new".
 */
export declare function Deque<T extends ElementType>(initial?: T[]): DequeLike<T>;
export { Deque as default, };
