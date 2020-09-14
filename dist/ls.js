"use strict";
// function f1<T extends {}>(naked: { new(...args: any[]): T }): any {
//     return class dressed extends naked { }
// }
const A = class {
    constructor(x) {
        console.log(x);
    }
};
const a = new A();
//# sourceMappingURL=ls.js.map