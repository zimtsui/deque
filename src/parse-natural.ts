const NATURAL = /^(0$)|-?([1-9]\d*$)/;

function parseNatural(x: unknown): number {
    if (typeof x === 'number') x = `${x}`;
    if (typeof x === 'string' && NATURAL.test(x))
        return Number.parseInt(x);
    else throw new Error('not a Natural');
}

export default parseNatural;
export {
    parseNatural,
    NATURAL,
};