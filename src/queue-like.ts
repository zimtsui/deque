export type Defined = null | number | symbol | string | object | boolean;

export interface QueueLike<T extends Defined> extends Iterable<T> {
	i(index: number): T;
	push(...item: T[]): void;
	shift(count?: number): T;
	getLength(): number;
}
