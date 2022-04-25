export type Defined = null | number | symbol | string | object | boolean;

export interface QueueLike<T extends Defined> {
	push(...items: T[]): void;
	shift(count?: number): T;
	getLength(): number;
	getFront(): T;
}

export class NoEnoughElem extends Error {
	public constructor() {
		super('No enough elements.');
	}
}

export class ZeroElemShifted extends Error {
	public constructor() {
		super('Shift at least 1 element.');
	}
}
