"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroElemShifted = exports.NoEnoughElem = void 0;
class NoEnoughElem extends Error {
    constructor() {
        super('No enough elements.');
    }
}
exports.NoEnoughElem = NoEnoughElem;
class ZeroElemShifted extends Error {
    constructor() {
        super('Shift at least 1 element.');
    }
}
exports.ZeroElemShifted = ZeroElemShifted;
//# sourceMappingURL=queue-like.js.map