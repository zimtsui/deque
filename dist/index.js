"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autobind_decorator_1 = require("autobind-decorator");
const parse_natural_1 = __importDefault(require("./parse-natural"));
class Queue {
    constructor(...elems) {
        this.vector = [];
        this.front = 0;
        this.rear = 0;
        this.push(...elems);
        return new Proxy(this, {
            get: function (target, field, receiver) {
                try {
                    let subscript = parse_natural_1.default(field);
                    if (subscript < 0)
                        subscript += target.length;
                    return target.vector[target.front + subscript];
                }
                catch (e) {
                    return Reflect.get(target, field, receiver);
                }
            }
        });
    }
    shrink() {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
        return this;
    }
    push(...elems) {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this;
    }
    shift(num = 1) {
        if (this.front + num > this.rear)
            throw new Error('no enough elements');
        this.front += num;
        this.shrink();
        return this;
    }
    clear() {
        this.front = this.rear;
        this.shrink();
        return this;
    }
    shiftWhile(pred) {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1)
            ;
        this.shrink();
        return this;
    }
    [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }
    get length() {
        return this.rear - this.front;
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "shrink", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "push", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "shift", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "clear", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "shiftWhile", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, Symbol.iterator, null);
exports.Queue = Queue;
exports.default = Queue;
//# sourceMappingURL=index.js.map