"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("./queue"));
function parseInt(x) {
    if (typeof x === 'symbol')
        throw null;
    const NATURAL = /^(0$)|-?([1-9]\d*$)/;
    if (NATURAL.test(x))
        return Number.parseInt(x);
    else
        throw null;
}
exports.parseInt = parseInt;
class NegativeSubscript extends queue_1.default {
    constructor(...elems) {
        super(...elems);
        return new Proxy(this, {
            get: function (target, field, receiver) {
                try {
                    let subscript = parseInt(field);
                    if (subscript < 0)
                        subscript += target.length;
                    return target.vector[target.front + subscript];
                }
                catch (e) {
                    const member = Reflect.get(target, field, receiver);
                    return member;
                }
            }
        });
    }
}
exports.NegativeSubscript = NegativeSubscript;
exports.default = NegativeSubscript;
//# sourceMappingURL=negative-subscript.js.map