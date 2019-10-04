"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../.."));
const ava_1 = __importDefault(require("ava"));
const assert_1 = __importDefault(require("assert"));
const lodash_1 = __importDefault(require("lodash"));
ava_1.default('test 1', t => {
    const q = new __1.default(1);
    assert_1.default.deepStrictEqual([...q], [1]);
    q.push(2, 3, 4, 5, 6, 7, 8);
    assert_1.default.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    assert_1.default(q.shift(1).shift(1)[-1] === 8);
    assert_1.default.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    q.shiftWhile(x => x < 5);
    assert_1.default.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert_1.default(q[0] === 5);
    assert_1.default(q[q.length - 1] === 8);
    assert_1.default.deepStrictEqual(lodash_1.default.takeWhile(q, x => x < 8), [5, 6, 7]);
    assert_1.default.deepStrictEqual(lodash_1.default.takeRightWhile(q, x => x > 5), [6, 7, 8]);
});
//# sourceMappingURL=test.js.map