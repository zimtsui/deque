export interface FifoLike<T> extends Iterable<T> {
	push(item: T): void;
	shift(): T;
	getLength(): number;
	getFront(): T;
}

export class NoEnoughElem extends Error {
	public constructor() {
		super('No enough elements.');
	}
}
