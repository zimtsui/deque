import assert = require('assert');



export class Destack<T> implements Iterable<T> {
	private v: T[];
	private front = 0;

	public constructor(
		initials: Iterable<T>,
	) {
		this.v = [...initials];
	}

	private deflate(): void {
		this.v = this.v.slice(this.front);
		this.front = 0;
	}

	public push(x: T): void {
		this.v.push(x);
	}

	public getSize(): number {
		return this.v.length - this.front;
	}

	public pop(): T {
		assert(
			this.getSize() > 0,
			new RangeError(),
		);
		const x = this.v.pop()!;
		if (this.front + this.front > this.v.length)
			this.deflate();
		return x;
	}

	public shift(): T {
		assert(
			this.getSize() > 0,
			new RangeError(),
		);
		const x = this.v[this.front++];
		if (this.front + this.front > this.v.length)
			this.deflate();
		return x;
	}

	public unshift(x: T): void {
		assert(
			this.front > 0,
			new RangeError(),
		);
		this.v[--this.front] = x;
	}

	public at(index: number): T {
		assert(
			0 <= index && index < this.getSize(),
			new RangeError(),
		);
		return this.v[this.front + index];
	}

	public [Symbol.iterator]() {
		return this.v.slice(this.front)[Symbol.iterator]();
	}
}
