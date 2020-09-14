export interface QueueLike<T> {
    push(item: T): unknown;
    shift(num?: number): unknown;
}
