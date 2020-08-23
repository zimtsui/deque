const INTEGER = /^(0$)|-?([1-9]\d*$)/;
function parseInteger(x) {
    if (typeof x === 'number')
        x = `${x}`;
    if (typeof x === 'string' && INTEGER.test(x))
        return Number.parseInt(x);
    else
        throw new Error('not an integer');
}
export default parseInteger;
export { parseInteger, INTEGER, };
//# sourceMappingURL=parse-integer.js.map