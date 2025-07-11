import { FifoStack } from './fifo-stack.ts';
import { type DequeLike } from './interfaces.ts';
import { offsetting } from './offsetting.ts';


export class Deque<T> implements DequeLike<T> {
	private left = new FifoStack<T>([]);
	private right: FifoStack<T>;
	readonly [index: number]: T;

	public constructor(initials: Iterable<T> = []) {
		this.right = new FifoStack(initials);
		return new Proxy(this, {
			get: (target, prop, receiver) => {
				if (typeof prop === 'string' && Number.isSafeInteger(Number.parseInt(prop, 10)))
					return target.at(Number.parseInt(prop, 10));
				else
					return Reflect.get(target, prop, receiver);
			}
		});
	}

	public pushBack(x: T): void {
		this.right.pushBack(x);
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
		this.left.pushBack(x);
	}

	public get length(): number {
		return this.left.length + this.right.length;
	}

	/**
	 * @throws RangeError
	 */
	public at(index: number): T {
		index = offsetting(index, this.length);
		return index < this.left.length ? this.left[-index-1]! : this.right[index-this.left.length]!;
	}

	/**
	 * @throws RangeError
	 */
	public slice(begin = 0, end = this.length): T[] {
		if ((begin = offsetting(begin, this.length)) <= (end = offsetting(end, this.length))) {} else throw new RangeError();
		const r: T[] = [];
		for (let i = begin; i < end; i++) r.push(this[i]!);
		return r;
	}

	public *[Symbol.iterator](): Generator<T, void, void> {
		for (let i = 0; i < this.length; i++) yield this[i]!;
	}
}
