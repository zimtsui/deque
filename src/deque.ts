import DEQ = require('double-ended-queue');
import { DequeLike } from './deque-like';
import { Defined } from './queue-like';
import assert = require('assert');


export class Deque<T extends Defined> implements DequeLike<T>{
	private dEQ: DEQ<T>;

	public constructor(initials: Iterable<T> = []) {
		this.dEQ = new DEQ([...initials]);
	}

	public i(index: number): T {
		assert(-this.dEQ.length <= index && index < this.dEQ.length);
		return this.dEQ.get(index)!;
	}

	public getLength(): number {
		return this.dEQ.length;
	}

	public push(...item: T[]): void {
		this.dEQ.push(...item);
	}

	public unshift(...item: T[]): void {
		this.dEQ.unshift(...item);
	}

	public pop(count = 1): T {
		assert(count >= 1);
		assert(count <= this.dEQ.length);
		const item = this.i(-1);
		for (let i = 0; i < count; i++)
			this.dEQ.pop();
		return item;
	}

	public shift(count = 1): T {
		assert(count >= 1);
		assert(count <= this.dEQ.length);
		const item = this.i(0);
		for (let i = 0; i < count; i++)
			this.dEQ.shift();
		return item;
	}

	public [Symbol.iterator]() {
		return this.dEQ.toArray()[Symbol.iterator]();
	}
}
