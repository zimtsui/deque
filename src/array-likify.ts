interface ConstructorType<T> {
    new(...args: any[]): T;
}

type GetItemFromIndex<T, Container> =
    (dS: Container, index: number) => T | undefined;

type GetLength<Container> =
    (dS: Container) => number;

function arrayLikify<T, OriginCtor extends ConstructorType<{}>>(
    getItemFromIndex: GetItemFromIndex<T, InstanceType<OriginCtor>>,
    getLength: GetLength<InstanceType<OriginCtor>>,
) {
    return function (Origin: OriginCtor) {
        return <ConstructorType<InstanceType<OriginCtor> & ArrayLike<T>>><unknown>
            class ArrayLikified extends Origin {
                constructor(...args: any[]) {
                    super(...args);
                    return new Proxy(this, {
                        get: function (
                            target: ArrayLikified,
                            field: string | symbol | number,
                            receiver: ArrayLikified,
                        ) {
                            if (typeof field === 'string') {
                                const index = Number.parseInt(field);
                                if (!Number.isNaN(index)) field = index;
                            }
                            if (getItemFromIndex && typeof field === 'number')
                                return getItemFromIndex(<InstanceType<OriginCtor>>target, field);
                            else if (getLength && field === 'length') {
                                return getLength(<InstanceType<OriginCtor>>target);
                            } else {
                                const returnValue = Reflect.get(target, field, target);
                                if (returnValue === target) return receiver; else return returnValue;
                            }
                        }
                    });
                }
            }
    }
}

export {
    arrayLikify as default,
    arrayLikify,
}
