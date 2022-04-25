export interface RandomAccess<T> {
	i(index: number): T;
}

export class IndexOutOfRange extends Error {
	public constructor() {
		super('Index is out of range.');
	}
}
