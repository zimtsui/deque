import DEQ = require('double-ended-queue');
import { DequeLike } from './deque-like';
import { NoEnoughElem } from './fifo-like';
import { RandomAccess } from './random-access';
import assert = require('assert');


export type Defined = null | number | symbol | string | object | boolean;

export class Deque<T extends Defined> implements DequeLike<T>, RandomAccess<T>{
	private dEQ: DEQ<T>;

	public constructor(initials: Iterable<T> = []) {
		this.dEQ = new DEQ([...initials]);
	}

	public getFront(): T {
		return this.i(0);
	}

	public i(index: number): T {
		assert(
			-this.dEQ.length <= index && index < this.dEQ.length,
			new RangeError('Index is out of range.'),
		);
		return this.dEQ.get(index)!;
	}

	public getLength(): number {
		return this.dEQ.length;
	}

	public push(item: T): void {
		this.dEQ.push(item);
	}

	public unshift(item: T): void {
		this.dEQ.unshift(item);
	}

	public pop(): T {
		assert(
			this.dEQ.length > 0,
			new NoEnoughElem(),
		);
		return this.dEQ.pop()!;
	}

	public shift(): T {
		assert(
			this.dEQ.length > 0,
			new NoEnoughElem(),
		);
		return this.dEQ.shift()!;
	}

	public [Symbol.iterator]() {
		return this.dEQ.toArray()[Symbol.iterator]();
	}
}
