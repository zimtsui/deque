"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NATURAL = /^(0$)|-?([1-9]\d*$)/;
exports.NATURAL = NATURAL;
function parseNatural(x) {
    if (typeof x === 'number')
        x = `${x}`;
    if (typeof x === 'string' && NATURAL.test(x))
        return Number.parseInt(x);
    else
        throw new Error('not a Natural');
}
exports.parseNatural = parseNatural;
exports.default = parseNatural;
//# sourceMappingURL=parse-natural.js.map