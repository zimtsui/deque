import { Destack } from './destack.ts';
import { offsetting } from './offsetting.ts';


export class Deque<T> implements Iterable<T> {
	private left = new Destack<T>([]);
	private right: Destack<T>;

	public constructor(initials: Iterable<T> = []) {
		this.right = new Destack(initials);
	}

	public pushBack(x: T): void {
		try {
			this.left.pushFront(x);
		} catch (err) {
			this.right.pushBack(x);
		}
	}

	/**
	 * @throws RangeError
	 */
	public popBack(): T {
		try {
			return this.right.popBack();
		} catch (err) {
			return this.left.popFront();
		}
	}

	/**
	 * @throws RangeError
	 */
	public popFront(): T {
		try {
			return this.left.popBack();
		} catch (err) {
			return this.right.popFront();
		}
	}

	public pushFront(x: T): void {
		try {
			this.right.pushFront(x);
		} catch (err) {
			this.left.pushBack(x);
		}
	}

	public getSize(): number {
		return this.left.getSize() + this.right.getSize();
	}

	/**
	 * @throws RangeError
	 */
	public at(index: number): T {
		index = offsetting(index, this.getSize());
		return index < this.left.getSize() ? this.left.at(-index-1) : this.right.at(index-this.left.getSize());
	}

	/**
	 * @throws RangeError
	 */
	public slice(begin = 0, end = this.getSize()): T[] {
		if ((begin = offsetting(begin, this.getSize())) <= (end = offsetting(end, this.getSize()))) {} else throw new RangeError();
		const r: T[] = [];
		for (let i = begin; i < end; i++) r.push(this.at(i));
		return r;
	}

	public *[Symbol.iterator](): Generator<T, void, void> {
		for (let i = 0; i < this.getSize(); i++) yield this.at(i);
	}
}
