interface ConstructorType<T> {
    new (...args: any[]): T;
}
declare type GetIterator<T, Container> = (dS: Container) => Iterator<T>;
declare function iterabilize<T, OriginCtor extends ConstructorType<{}>>(getIterator: GetIterator<T, InstanceType<OriginCtor>>): (Origin: OriginCtor) => ({
    new (...args: any[]): {
        [Symbol.iterator](): Iterator<T, any, undefined>;
    };
} & OriginCtor) | ConstructorType<InstanceType<OriginCtor> & Iterable<T>>;
export { iterabilize as default, iterabilize, };
