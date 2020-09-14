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
                        if (getItemFromIndex && typeof field === 'number')
                            return getItemFromIndex(target, field);
                        else if (getLength && field === 'length') {
                            return getLength(target);
                        }
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
        };
    };
}
export { arrayLikify as default, arrayLikify, };
//# sourceMappingURL=array-likify.js.map