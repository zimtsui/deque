export type Defined = null | number | symbol | string | object | boolean;

export interface QueueLike<T extends Defined> {
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
