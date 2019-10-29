"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const INTEGER = /^(0$)|-?([1-9]\d*$)/;
exports.INTEGER = INTEGER;
function parseInteger(x) {
    if (typeof x === 'number')
        x = `${x}`;
    if (typeof x === 'string' && INTEGER.test(x))
        return Number.parseInt(x);
    else
        throw new Error('not a Natural');
}
exports.parseInteger = parseInteger;
exports.default = parseInteger;
//# sourceMappingURL=parse-integer.js.map