function iterabilize(getIterator) {
    return function (Origin) {
        if (getIterator)
            return class Iterabilized extends Origin {
                constructor(...args) {
                    super(...args);
                }
                [Symbol.iterator]() {
                    console.log(1);
                    return getIterator(this);
                }
            };
        else
            return Origin;
    };
}
export { iterabilize as default, iterabilize, };
//# sourceMappingURL=iterabilize.js.map