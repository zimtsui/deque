import { FifoLike } from './queue-like';


export interface DequeLike<T> extends FifoLike<T> {

	pop(): T;
	unshift(item: T): void;
}
