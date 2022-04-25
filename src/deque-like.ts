import { QueueLike, Defined } from './queue-like';


export interface DequeLike<T extends Defined>
	extends QueueLike<T>, Iterable<T> {

	pop(): T;
	unshift(item: T): void;
}
