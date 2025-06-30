export function offsetting(index, size) {
    if (0 <= size + index && index < size) { }
    else
        throw new RangeError();
    return index < 0 ? size + index : index;
}
//# sourceMappingURL=offsetting.js.map