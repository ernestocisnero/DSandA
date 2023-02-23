
// Stack data structure simple implementation.
// Stack is a FIFO data structure, which means First In, First Out.


class Queue {
    constructor() {
        this.items = []
    }

    enqueue() {
        this.items.push();
    }

    dequeue() {
        this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }
}


const queue = new Queue();
