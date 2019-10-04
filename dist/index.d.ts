declare class Queue<T> {
    length: number;
    [index: number]: T;
    push(...elems: T[]): number;
    shift(num?: number): this;
    shiftWhile(pred: (x: T) => boolean): this;
    [Symbol.iterator](): Iterator<T>;
    clear(): this;
    constructor();
}
export default Queue;
