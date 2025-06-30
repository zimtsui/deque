import { offsetting } from './offsetting.ts';
import { type StackLike, type FifoLike } from './interfaces.ts';


export class FifoStack<T> implements StackLike<T>, FifoLike<T> {
	private v: T[];
	private front = 0;
	readonly [index: number]: T;

	public constructor(initials: Iterable<T> = []) {
		this.v = [...initials];
		return new Proxy(this, {
			get: (target, prop, receiver) => {
				if (typeof prop === 'string' && Number.isSafeInteger(Number.parseInt(prop, 10)))
					return target.at(Number.parseInt(prop, 10));
				else
					return Reflect.get(target, prop, receiver);
			}
		});
	}

	private tryDeflate(): void {
		if (this.front + this.front > this.v.length) {
			this.v = this.v.slice(this.front);
			this.front = 0;
		}
	}

	public pushBack(x: T): void {
		this.v.push(x);
	}

	public get length(): number {
		return this.v.length - this.front;
	}

	/**
	 * @throws RangeError
	 */
	public popBack(): T {
		if (this.length) {} else throw new RangeError();
		const x = this.v.pop()!;
		this.tryDeflate();
		return x;
	}

	/**
	 * @throws RangeError
	 */
	public popFront(): T {
		if (this.length) {} else throw new RangeError();
		const x = this.v[this.front++]!;
		this.tryDeflate();
		return x;
	}

	/**
	 * @throws RangeError
	 */
	public at(index: number): T {
		return this.v[this.front+offsetting(index, this.length)]!;
	}

	public *[Symbol.iterator](): Generator<T, void, void> {
		for (let i = 0; i < this.length; i++) yield this[i]!;
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
}
