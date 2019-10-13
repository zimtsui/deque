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
        super();
        const queue = new queue_1.default(...elems);
        return new Proxy({}, {
            get: function (target, field, receiver) {
                try {
                    let subscript = parseInt(field);
                    if (subscript < 0)
                        subscript += queue.length;
                    return queue.vector[queue.front + subscript];
                }
                catch (e) {
                    const member = Reflect.get(queue, field, queue);
                    if (typeof member === 'function')
                        return function (...args) {
                            const returnValue = member(...args);
                            if (returnValue === queue)
                                return receiver;
                            else
                                return returnValue;
                        };
                    else
                        return member;
                }
            }
        });
    }
}
exports.NegativeSubscript = NegativeSubscript;
exports.default = NegativeSubscript;
//# sourceMappingURL=negative-subscript.js.map