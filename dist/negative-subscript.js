"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("./queue");
/**
 * the subscript must be an integer, or an unpredictable error may occur.
 */
class NegativeSubscript extends queue_1.Queue {
    constructor(...elems) {
        super(...elems);
        return new Proxy(this, {
            get: function (target, 
            /*
                不可能是数字开头的非数字串，原因是没有 string index 签名，
                只要是数字开头就一定是数字串。
                Number.parseInt 可以解析数字开头的字符串，所以能被 Number.parseInt
                解析的都是数字串。
            */
            field, receiver) {
                let subscript;
                if (typeof field === 'string'
                    && !Number.isNaN(subscript = Number.parseInt(field)))
                    return target.n(subscript);
                else
                    return Reflect.get(target, field, receiver);
            }
        });
    }
}
exports.NegativeSubscript = NegativeSubscript;
exports.default = NegativeSubscript;
//# sourceMappingURL=negative-subscript.js.map