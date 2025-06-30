import { offsetting } from './offsetting.ts';

export class Destack<T> implements Iterable<T> {
	private v: T[];
	private front = 0;

	public constructor(initials: Iterable<T> = []) {
		this.v = [...initials];
	}

	private deflate(): void {
		this.v = this.v.slice(this.front);
		this.front = 0;
	}

	public pushBack(x: T): void {
		this.v.push(x);
	}

	public getSize(): number {
		return this.v.length - this.front;
	}

	/**
	 * @throws RangeError
	 */
	public popBack(): T {
		if (this.getSize()) {} else throw new RangeError();
		const x = this.v.pop()!;
		if (this.front + this.front > this.v.length) this.deflate();
		return x;
	}

	/**
	 * @throws RangeError
	 */
	public popFront(): T {
		if (this.getSize()) {} else throw new RangeError();
		const x = this.v[this.front++]!;
		if (this.front + this.front > this.v.length) this.deflate();
		return x;
	}

	/**
	 * @throws RangeError
	 */
	public pushFront(x: T): void {
		if (this.front > 0) {} else throw new RangeError();
		this.v[--this.front] = x;
	}

	/**
	 * @throws RangeError
	 */
	public at(index: number): T {
		return this.v[this.front+offsetting(index, this.getSize())]!;
	}

	public [Symbol.iterator]() {
		return this.v.slice(this.front)[Symbol.iterator]();
	}
}
