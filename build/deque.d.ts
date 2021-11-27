export interface QueueLike<T> extends Iterable<T> {
    (index: number): T;
    [Symbol.iterator]: () => Iterator<T>;
    push(item: T): void;
    shift(): T;
    length: number;
}
export interface DequeLike<T> extends QueueLike<T> {
    pop(): T;
    unshift(item: T): void;
}
/**
 * This is a factory function. Do not prepend a "new".
 */
export declare function Deque<T>(initial?: T[]): DequeLike<T>;
export { Deque as default, };
