class MaxHeap {
    constructor() {
        this.queue = [];
    }

    add(value) {
        this.queue.unshift(value);
        if (this.queue.length > 1) {
            this.heapify();
        }
    }

    swap(i, j) {
        let temp = this.queue[i];
        this.queue[i] = this.queue[j];
        this.queue[j] = temp;
    }

    heapify() {
        if (this.queue.length < 2) {
            return;
        }
        let index = 0;
        let left = index * 2 + 1;
        while (left < this.queue.length) {
            let biggest = left + 1 < this.queue.length && this.queue[left + 1] > this.queue[left] ? left + 1 : left;
            biggest = this.queue[biggest] > this.queue[index] ? biggest : index;
            if (biggest == index) {
                break;
            }
            this.swap(biggest, index);
            index = biggest;
            left = index * 2 + 1;
        }
    }

    poll() {
        if (this.queue.length == 0) {
            throw Error('queue is empty!');
        }
        let value = this.queue.shift();
        if (this.queue.length > 1) {
            this.heapify();
        }
        return value;
    }
}

class MinHeap {
    constructor() {
        this.queue = [];
    }

    add(value) {
        this.queue.unshift(value);
        if (this.queue.length > 1) {
            this.heapify();
        }
    }

    swap(i, j) {
        let temp = this.queue[i];
        this.queue[i] = this.queue[j];
        this.queue[j] = temp;
    }
    
    heapify() {
        if (this.queue.length < 2) {
            return;
        }
        let index = 0;
        let left = index * 2 + 1;
        while (left < this.queue.length) {
            let smallest = left + 1 < this.queue.length && this.queue[left + 1] < this.queue[left] ? left + 1 : left;
            smallest = this.queue[smallest] < this.queue[index] ? smallest : index;
            if (smallest == index) {
                break;
            }
            this.swap(smallest, index);
            index = smallest;
            left = index * 2 + 1;
        }
    }

    poll() {
        if (this.queue.length == 0) {
            throw Error('queue is empty!');
        }
        let value = this.queue.shift();
        if (this.queue.length > 1) {
            this.heapify();
        }
        return value;
    }
}

