interface ConstructorType<T> {
    new(...args: any[]): T;
}

type GetIterator<T, Container> =
    (dS: Container) => Iterator<T>;

function iterabilize<T, OriginCtor extends ConstructorType<{}>>(
    getIterator: GetIterator<T, InstanceType<OriginCtor>>,
) {
    return function (Origin: OriginCtor) {
        if (getIterator)
            return class Iterabilized extends Origin implements Iterable<T> {
                constructor(...args: any[]) {
                    super(...args);
                }

                public [Symbol.iterator]() {
                    console.log(1);
                    return getIterator(<InstanceType<OriginCtor>>this);
                }
            }
        else return <ConstructorType<InstanceType<OriginCtor> & Iterable<T>>><unknown>
            Origin;
    }
}

export {
    iterabilize as default,
    iterabilize,
}
