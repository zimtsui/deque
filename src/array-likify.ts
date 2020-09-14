interface ConstructorType<T> {
    new(...args: any[]): T;
}

type GetItemFromIndex<T, Container> =
    (dS: Container, index: number) => T | undefined;

type GetLength<Container> =
    (dS: Container) => number;

function arrayLikify<T, ContainerCtor extends ConstructorType<{}>>(
    getItemFromIndex: GetItemFromIndex<T, InstanceType<ContainerCtor>>,
    getLength: GetLength<InstanceType<ContainerCtor>>,
) {
    return function (Origin: ContainerCtor) {
        return class ArrayLikified extends Origin implements ArrayLike<T> {
            [index: number]: T;

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
                        if (typeof field === 'number')
                            return getItemFromIndex(<InstanceType<typeof ArrayLikified>>target, field);
                        else {
                            const returnValue = Reflect.get(target, field, target);
                            if (returnValue === target) return receiver; else return returnValue;
                        }
                    }
                });
            }

            public get length(): number {
                return getLength(<InstanceType<ContainerCtor>>this);
            }
        }
    }
}

export {
    arrayLikify as default,
    arrayLikify,
}
