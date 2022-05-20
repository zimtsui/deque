import { Destack } from './destack';


export class Deque<T> implements Iterable<T>{
	private left = new Destack<T>();
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
	 * @param index - Can be negative.
	 * @throws {@link RangeError}
	 */
	public i(index: number): T {
		if (this.left.getSize() <= index && index < this.getSize())
			return this.right.i(index - this.left.getSize());
		if (0 <= index && index < this.left.getSize())
			return this.left.i(this.left.getSize() - (index + 1));
		if (-this.right.getSize() <= index && index < 0)
			return this.right.i(this.right.getSize() + index);
		if (-this.getSize() <= index && index < -this.right.getSize())
			return this.left.i(-index - this.right.getSize() - 1);
		throw new RangeError();
	}

	/**
	 * Time complexity of O(n).
	 * @returns An iterator of a copy of the entire queue.
	 */
	public [Symbol.iterator]() {
		return [
			...[...this.left].reverse(),
			...this.right,
		][Symbol.iterator]();
	}
}
