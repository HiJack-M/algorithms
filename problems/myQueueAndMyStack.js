// 如何用栈结构实现队列结构
// 如何用队列结构实现栈结构
// queue 和 stack 都用数组实现，queue: shift,push  stack:pop,push

class MyQueueUseStack {
    constructor() {
        this.receiveStack = [];
        this.processStack = [];
    }
    put(num) {
        this.receiveStack.push(num);
    }
    moveEle() {
        while (this.receiveStack.length > 0) {
            let ele = this.receiveStack.pop();
            this.processStack.push(ele);
        }
    }
    poll() {
        if (this.processStack.length == 0) {
            if (this.receiveStack.length > 0) {
                this.moveEle();
            } else {
                throw Error('empty.');
            }
        }
        let ele = this.processStack.pop();
        return ele;
    }
}

let queue = new MyQueueUseStack();
queue.put(1);
queue.put(2);
queue.put(3);
console.log(queue.poll());
queue.put(4);
console.log(queue.poll());
console.log(queue.poll());
console.log(queue.poll());

console.log('======');

class MyStackUseQueue {
    constructor() {
        this.data = [];
        this.help = [];
    }
    push(num) {
        this.data.push(num);
    }
    pop() {
        if (this.data.length == 0) {
            throw Error('empty.');
        }
        while (this.data.length > 1) {
            let ele = this.data.shift();
            this.help.push(ele);
        }
        let item = this.data.shift();
        let tempZoom = this.data;
        this.data = this.help;
        this.help = tempZoom;
        return item;
    }
}

let stack = new MyStackUseQueue();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());
