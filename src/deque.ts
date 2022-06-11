import { Destack } from './destack';


export class Deque<T> implements Iterable<T> {
	private left = new Destack<T>([]);
	private right: Destack<T>;

	public constructor(
		initials: Iterable<T> = [],
	) {
		this.right = new Destack(initials);
	}

	public push(x: T): void {
		try {
			this.left.unshift(x);
		} catch (err) {
			this.right.push(x);
		}
	}

	/**
	 * @throws RangeError
	 */
	public pop(): T {
		try {
			return this.right.pop();
		} catch (err) {
			return this.left.shift();
		}
	}

	/**
	 * @throws RangeError
	 */
	public shift(): T {
		try {
			return this.left.pop();
		} catch (err) {
			return this.right.shift();
		}
	}

	public unshift(x: T): void {
		try {
			this.right.unshift(x);
		} catch (err) {
			this.left.push(x);
		}
	}

	public getSize(): number {
		return this.left.getSize() + this.right.getSize();
	}

	/**
	 * Get the element at a specified index.
	 * @param index - Can't be negative.
	 * @throws RangeError
	 */
	public at(index: number): T {
		try {
			return this.left.at(this.left.getSize() - index - 1);
		} catch (err) {
			return this.right.at(index - this.left.getSize());
		}
	}

	/**
	 * Get the element at a specified index.
	 * @param index - Can be negative.
	 * @throws RangeError
	 */
	public i(index: number): T {
		try {
			return this.at(index);
		} catch (err) {
			return this.at(this.getSize() + index);
		}
	}

	public slice(
		start = 0,
		end = this.getSize(),
	): T[] {
		if (start < 0) start += this.getSize();
		if (end < 0) end += this.getSize();
		const r: T[] = [];
		for (let i = start; i < end; i++)
			r.push(this.at(i));
		return r;
	}

	/**
	 * Time complexity of O(n).
	 * @returns An iterator of a copy of the entire queue.
	 */
	public [Symbol.iterator](): Iterator<T> {
		return [
			...[...this.left].reverse(),
			...this.right,
		][Symbol.iterator]();
	}
}
