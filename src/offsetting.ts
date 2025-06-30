export function offsetting(index: number, size: number): number {
	if (0 <= size+index && index < size) {} else throw new RangeError();
	return index < 0 ? size+index : index;
}
