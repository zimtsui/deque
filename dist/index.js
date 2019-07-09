"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("source-map-support/register");

var _assert = _interopRequireDefault(require("assert"));

var constructor = function constructor() {
  var publ = {};
  var vector;
  var front;
  var rear;
  vector = [];
  front = 0;
  rear = 0;

  var shrink = function shrink() {
    if (front > rear - front) {
      vector = vector.slice(front, rear);
      rear -= front;
      front = 0;
    }
  };

  publ.push = function () {
    var _vector;

    (_vector = vector).push.apply(_vector, arguments);

    rear += arguments.length;
    return publ;
  };

  publ.shift = function () {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    if (front + num > rear) throw new Error('no enough elements');
    front += num;
    shrink();
    (0, _assert["default"])(front + front <= rear);
    return publ;
  };

  publ.clear = function () {
    front = rear;
    shrink();
    (0, _assert["default"])(front + front <= rear);
    return publ;
  };

  publ.getFront = function () {
    if (front == rear) throw new Error('getting front of an empty queue.');
    return vector[front];
  };

  publ.getRear = function () {
    if (front == rear) throw new Error('getting front of an empty queue.');
    return vector[rear - 1];
  };

  Object.defineProperty(publ, 'length', {
    get: function get() {
      return rear - front;
    }
  });

  publ.shiftWhile = function (pred) {
    for (; front < rear && pred(vector[front]); front += 1) {
      ;
    }

    shrink();
    (0, _assert["default"])(front + front <= rear);
    return publ;
  };

  publ.takeRearWhile = function (pred) {
    var i;

    for (i = rear; i > front && pred(vector[i - 1]); i -= 1) {
      ;
    }

    return vector.slice(i, rear).reverse();
  };

  publ.takeFrontWhile = function (pred) {
    var i;

    for (i = front; i < rear && pred(vector[i]); i += 1) {
      ;
    }

    return vector.slice(front, i);
  }; // publ[Symbol.iterator] = function* getIterator() {
  //     for (let i = front; i < rear; i += 1) yield vector[i];
  // };


  publ[Symbol.iterator] = function () {
    return vector.slice(front, rear)[Symbol.iterator]();
  };

  return publ;
};

var _default = {
  constructor: constructor
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map