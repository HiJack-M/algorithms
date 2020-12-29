// 利用 JS array 特性的简单实现
class Queue {
    construct() {
        this.queue = []
    }
    enQueue(item) {
        this.queue.push(item)
    }
    deQueue() {
        this.queue.shift()
    }
    getHeader() {
        return this.queue[0]
    }
    getLength() {
        return this.queue.length
    }
    isEmpty() {
        return this.queue.length === 0
    }
}

// 原生实现 循环数组
class MyQueue {
    constructor(length) {
        this.pushi = 0;
        this.polli = 0;
        this.size = 0;
        this.limit = length;
        this.queue = new Array(length);
    }

    toString() {
        return this.queue;
    }

    nextIndex(i) {
        return i < this.limit - 1 ? i + 1 : 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    pop() {
        if (this.size === 0) {
            throw Error('栈空了，不能再拿了');
        }
        let result = this.queue[this.polli];
        this.size--;
        this.polli = this.nextIndex(this.polli);
        return result;
    } 

    push(x) {
        if (this.size === this.limit) {
            throw Error('栈满了，不能再加了');
        }
        this.queue[this.pushi] = x; 
        this.size++;
        this.pushi = this.nextIndex(this.pushi); 
    }
}

let queue = new MyQueue(5);
queue.push(1);
queue.push(2);
queue.push(2);
console.log(queue);
let res = queue.pop();
console.log(queue);
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue);
queue.push(4);
