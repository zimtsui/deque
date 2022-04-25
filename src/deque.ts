import DEQ = require('double-ended-queue');
import {
	DequeLike,
	ZeroElemPopped,
} from './deque-like';
import {
	Defined,
	NoEnoughElem,
	ZeroElemShifted,
} from './queue-like';
import {
	RandomAccess,
	IndexOutOfRange,
} from './random-access';
import assert = require('assert');


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
			new IndexOutOfRange(),
		);
		return this.dEQ.get(index)!;
	}

	public getLength(): number {
		return this.dEQ.length;
	}

	public push(...items: T[]): void {
		this.dEQ.push(...items);
	}

	public unshift(...items: T[]): void {
		this.dEQ.unshift(...items);
	}

	public pop(count = 1): T {
		assert(
			count >= 1,
			new ZeroElemPopped(),
		);
		assert(
			count <= this.dEQ.length,
			new NoEnoughElem(),
		);
		const item = this.i(-1);
		for (let i = 0; i < count; i++)
			this.dEQ.pop();
		return item;
	}

	public shift(count = 1): T {
		assert(
			count >= 1,
			new ZeroElemShifted(),
		);
		assert(
			count <= this.dEQ.length,
			new NoEnoughElem(),
		);
		const item = this.i(0);
		for (let i = 0; i < count; i++)
			this.dEQ.shift();
		return item;
	}

	public [Symbol.iterator]() {
		return this.dEQ.toArray()[Symbol.iterator]();
	}
}
