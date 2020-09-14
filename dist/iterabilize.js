function iterabilize(getIterator) {
    return function (Origin) {
        return class Iterabilized extends Origin {
            constructor(...args) {
                super(...args);
            }
            [Symbol.iterator]() {
                return getIterator(this);
            }
        };
    };
}
export { iterabilize as default, iterabilize, };
//# sourceMappingURL=iterabilize.js.map