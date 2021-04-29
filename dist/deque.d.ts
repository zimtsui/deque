interface DequeLike<T> extends Iterable<T> {
    (index: number): T;
    [Symbol.iterator]: () => Iterator<T>;
    push(item: T): void;
    pop(): T;
    shift(): T;
    unshift(item: T): void;
    length: number;
}
declare function createDeque<T>(initial?: T[]): DequeLike<T>;
export { createDeque as default, createDeque, DequeLike, };
