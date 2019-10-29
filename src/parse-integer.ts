const INTEGER = /^(0$)|-?([1-9]\d*$)/;

function parseInteger(x: unknown): number {
    if (typeof x === 'number') x = `${x}`;
    if (typeof x === 'string' && INTEGER.test(x))
        return Number.parseInt(x);
    else throw new Error('not a Natural');
}

export default parseInteger;
export {
    parseInteger,
    INTEGER,
};