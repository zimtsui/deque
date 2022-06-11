import { Deque } from './deque';
import { LinkedList } from '@zimtsui/linked-list';


export class IterableDeque<T> extends Deque<T> {
	private list = new LinkedList<T>();

	public constructor(
		initials: Iterable<T> = [],
	) {
		super(initials);
		for (const x of initials)
			this.list.push(x);
	}

	/**
	 * Time complexity of O(1).
	 * @returns An iterator of the queue.
	 */
	public [Symbol.iterator]() {
		return this.list[Symbol.iterator]();
	}

	public push(x: T): void {
		super.push(x);
		this.list.push(x);
	}

	/**
	 * @throws RangeError
	 */
	public pop(): T {
		super.pop();
		return this.list.pop();
	}

	/**
	 * @throws RangeError
	 */
	public shift(): T {
		super.shift();
		return this.list.shift();
	}

	public unshift(x: T): void {
		super.unshift(x);
		this.list.unshift(x);
	}
}
