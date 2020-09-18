import Deque from 'double-ended-queue';
export interface QueueLike<T> {
    push(item: T): void;
    shift(): void;
}
declare class IADeque<T> extends Deque<T> implements QueueLike<T> {
    [index: number]: T;
    [Symbol.iterator]: () => Iterator<T>;
    constructor();
}
export { IADeque as default, IADeque, };
