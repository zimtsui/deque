export interface QueueLike<T> {
    push(item: T): void;
    shift(num?: number): void;
}
