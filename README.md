# deque

这是一个支持负下标的队列，接口为

```ts
interface QueueLike<T> extends ArrayLike<T>, Iterable<T> {
    push(item: T): void;
    shift(): void;
}
```

内部通过 Proxy 实现，不是一个标准的 es6 class，所以最好不要进行继承等高级操作，容易出各种问题。
