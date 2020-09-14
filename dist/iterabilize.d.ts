interface ConstructorType<T> {
    new (...args: any[]): T;
}
declare type GetIterator<T, Container> = (dS: Container) => Iterator<T>;
declare function iterabilize<T, ContainerCtor extends ConstructorType<{}>>(getIterator: GetIterator<T, InstanceType<ContainerCtor>>): (Origin: ContainerCtor) => {
    new (...args: any[]): {
        [Symbol.iterator](): Iterator<T, any, undefined>;
    };
} & ContainerCtor;
export { iterabilize as default, iterabilize, };
