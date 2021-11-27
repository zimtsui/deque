export interface DequeLike<T> extends Iterable<T> {
    (index: number): T;
    [Symbol.iterator]: () => Iterator<T>;
    push(item: T): void;
    pop(): T;
    shift(): T;
    unshift(item: T): void;
    length: number;
}
/**
 * This is a factory function. Do not prepend a "new".
 */
export declare function Deque<T>(initial?: T[]): DequeLike<T>;
export { Deque as default, };
