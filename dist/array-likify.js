function arrayLikify(getItemFromIndex, getLength) {
    return function (Origin) {
        return class ArrayLikified extends Origin {
            constructor(...args) {
                super(...args);
                return new Proxy(this, {
                    get: function (target, field, receiver) {
                        if (typeof field === 'string') {
                            const index = Number.parseInt(field);
                            if (!Number.isNaN(index))
                                field = index;
                        }
                        if (typeof field === 'number')
                            return getItemFromIndex(target, field);
                        else {
                            const returnValue = Reflect.get(target, field, target);
                            if (returnValue === target)
                                return receiver;
                            else
                                return returnValue;
                        }
                    }
                });
            }
            get length() {
                return getLength(this);
            }
        };
    };
}
export { arrayLikify as default, arrayLikify, };
//# sourceMappingURL=array-likify.js.map