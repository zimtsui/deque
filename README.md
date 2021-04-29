# deque

如果使用 Proxy 之类的元编程实现，会产生很多问题，比如 arrow function 的 this 不能多态。

所以使用工厂函数实现。

不能使用 undefined 作为元素类型。
