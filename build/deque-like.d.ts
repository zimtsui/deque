import { QueueLike, Defined } from './queue-like';
export interface DequeLike<T extends Defined> extends QueueLike<T> {
    pop(count?: number): T;
    unshift(...items: T[]): void;
}
