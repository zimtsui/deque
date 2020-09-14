interface ConstructorType<T> {
    new(...args: any[]): T;
}

type GetIterator<T, Container> =
    (dS: Container) => Iterator<T>;

function iterabilize<T, ContainerCtor extends ConstructorType<{}>>(
    getIterator: GetIterator<T, InstanceType<ContainerCtor>>,
) {
    return function (Origin: ContainerCtor) {
        return class Iterabilized extends Origin implements Iterable<T> {
            constructor(...args: any[]) {
                super(...args);
            }

            public [Symbol.iterator]() {
                return getIterator(<InstanceType<ContainerCtor>>this);
            }
        }
    }
}

export {
    iterabilize as default,
    iterabilize,
}
