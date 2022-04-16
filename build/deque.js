"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = void 0;
const UnderlyingDeque = require("double-ended-queue");
var Deque;
(function (Deque) {
    function create(initial = []) {
        const u = new UnderlyingDeque(initial);
        const deque = ((i) => {
            const item = u.get(i);
            if (item !== undefined)
                return item;
            throw new Error('Invalid index');
        });
        deque.push = (...items) => void u.push(...items);
        deque.pop = () => {
            const item = u.pop();
            if (item !== undefined)
                return item;
            throw new Error('Empty');
        };
        deque.shift = () => {
            const item = u.shift();
            if (item !== undefined)
                return item;
            throw new Error('Empty');
        };
        deque.unshift = (...items) => void u.unshift(...items);
        deque[Symbol.iterator] = () => u.toArray()[Symbol.iterator]();
        Reflect.defineProperty(deque, 'length', {
            get: () => u.length,
        });
        return deque;
    }
    Deque.create = create;
})(Deque = exports.Deque || (exports.Deque = {}));
//# sourceMappingURL=deque.js.map