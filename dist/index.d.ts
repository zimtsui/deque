declare class Queue<T> implements ArrayLike<T>, Iterable<T> {
    length: number;
    [index: number]: T;
    push(...elems: T[]): this;
    shift(num?: number): this;
    shiftWhile(pred: (x: T) => boolean): this;
    [Symbol.iterator](): Iterator<T>;
    clear(): this;
    constructor(...elems: T[]);
}
export default Queue;
