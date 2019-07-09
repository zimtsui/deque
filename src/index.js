import assert from 'assert';

const Queue = () => {
    const publ = {};

    let vector;
    let front;
    let rear;

    vector = [];
    front = 0;
    rear = 0;

    const shrink = () => {
        if (front > rear - front) {
            vector = vector.slice(front, rear);
            rear -= front;
            front = 0;
        }
    };

    publ.push = (...elems) => {
        vector.push(...elems);
        rear += elems.length;
        return publ;
    };

    publ.shift = (num = 1) => {
        if (front + num > rear) throw new Error('no enough elements');
        front += num;
        shrink();
        assert(front + front <= rear);
        return publ;
    };

    publ.clear = () => {
        front = rear;
        shrink();
        assert(front + front <= rear);
        return publ;
    };

    publ.getFront = () => {
        if (front == rear) throw new Error('getting front of an empty queue.');
        return vector[front];
    };

    publ.getRear = () => {
        if (front == rear) throw new Error('getting front of an empty queue.');
        return vector[rear - 1];
    };

    Object.defineProperty(publ, 'length', {
        get: () => rear - front,
    });

    publ.shiftWhile = (pred) => {
        for (; front < rear && pred(vector[front]); front += 1);
        shrink();
        assert(front + front <= rear);
        return publ;
    };

    publ.takeRearWhile = (pred) => {
        let i;
        for (i = rear; i > front && pred(vector[i - 1]); i -= 1);
        return vector.slice(i, rear).reverse();
    };

    publ.takeFrontWhile = (pred) => {
        let i;
        for (i = front; i < rear && pred(vector[i]); i += 1);
        return vector.slice(front, i);
    };

    // publ[Symbol.iterator] = function* getIterator() {
    //     for (let i = front; i < rear; i += 1) yield vector[i];
    // };

    publ[Symbol.iterator] = () => vector.slice(front, rear)[Symbol.iterator]();

    return publ;
};

export default Queue;
