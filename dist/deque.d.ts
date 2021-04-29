export interface DequeLike<T> extends Iterable<T> {
    (index: number): T;
    [Symbol.iterator]: () => Iterator<T>;
    push(...items: T[]): void;
    pop(): T;
    shift(): T;
    unshift(...items: T[]): void;
    length: number;
}
declare function createDeque<T>(initial?: T[]): DequeLike<T>;
export { createDeque as default, createDeque, };
