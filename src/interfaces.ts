export interface RandomAccess<T> extends Iterable<T>, ArrayLike<T>, RelativeIndexable<T> {
	/**
	 * @throws RangeError
	 */
	at(index: number): T;
	/**
	 * @throws RangeError
	 */
	slice(begin?: number, end?: number): T[];
}

export interface StackLike<T> extends RandomAccess<T> {
	pushBack(x: T): void;
	/**
	 * @throws RangeError
	 */
	popBack(): T;
}

export interface FifoLike<T> extends RandomAccess<T> {
	pushBack(x: T): void;
	/**
	 * @throws RangeError
	 */
	popFront(): T;
}

export interface DequeLike<T> extends StackLike<T>, FifoLike<T> {
	pushFront(x: T): void;
}
