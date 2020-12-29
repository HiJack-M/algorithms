// priority < 0: 小根堆；否则大根堆
// compareProperty: 依据 node 的该属性比较，若不传则 node 为基础类型
class Heap {
    constructor(priority, compareProperty) {
        this.priority = priority;
        this.compareProperty = compareProperty || null;
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
        if (this.priority < 0) {
            while (left < this.queue.length) {
                let smallest;
                if (this.compareProperty) {
                    smallest = left + 1 < this.queue.length
                        && this.queue[left + 1][this.compareProperty] < this.queue[left][this.compareProperty]
                        ? left + 1 : left;
                    smallest = this.queue[smallest][this.compareProperty] < this.queue[index][this.compareProperty]
                        ? smallest : index;
                } else {
                    smallest = left + 1 < this.queue.length && this.queue[left + 1] < this.queue[left]
                        ? left + 1 : left;
                    smallest = this.queue[smallest] < this.queue[index] ? smallest : index;
                }
                if (smallest == index) {
                    break;
                }
                this.swap(smallest, index);
                index = smallest;
                left = index * 2 + 1;
            }
        } else {
            while (left < this.queue.length) {
                let biggest;
                if (this.compareProperty) {
                    biggest = left + 1 < this.queue.length
                        && this.queue[left + 1][this.compareProperty] > this.queue[left][this.compareProperty]
                        ? left + 1 : left;
                    biggest = this.queue[biggest][this.compareProperty] > this.queue[index][this.compareProperty]
                        ? biggest : index;
                } else {
                    biggest = left + 1 < this.queue.length && this.queue[left + 1] > this.queue[left]
                        ? left + 1 : left;
                    biggest = this.queue[biggest] > this.queue[index] ? biggest : index;
                }
                if (biggest == index) {
                    break;
                }
                this.swap(biggest, index);
                index = biggest;
                left = index * 2 + 1;
            }
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

/* let arr1 = [
 *     {weight: 1, id : 0},
 *     {weight: 5, id : 1},
 *     {weight: 3, id : 2},
 *     {weight: 2, id : 3},
 *     {weight: 4, id : 4},
 * ];
 *
 * const testHeap = (arr) => {
 *     let myHeap = new Heap(1, 'weight');
 *     for (let i = 0; i < arr.length; i++) {
 *         myHeap.add(arr[i]);
 *     }
 *     console.log(myHeap.queue);
 * }
 * testHeap(arr1); */

class UnionFind {
    constructor(arr) {
        this.nodes = new Map();         // value -> node
        this.parents = new Map();       // 每一块连通区域的 node 的代表点
        this.sizeMap = new Map();       // 代表点 -> 连通区大小

        for (let i = 0; i < arr.length; i++) {
            let node = new Node(arr[i]);
            this.nodes.set(arr[i], node);
            this.parents.set(node, node);
            this.sizeMap.set(node, 1);
        }
    }

    // 找到该集合的代表点，传参 node
    findFather(cur) {
        if (!this.parents.has(cur)) {
            return null;
        }
        let path = [];
        while (cur != this.parents.get(cur)) {
            path.push(cur);
            cur = this.parents.get(cur);
        }

        while (path.length > 0) {
            this.parents.set(path.shift(), cur);
        }
        return cur;
    }

    isSameSet(a, b) {
        if (!this.nodes.has(a) || !this.nodes.has(b)) {
            return false;
        }
        return this.findFather(this.nodes.get(a)) == this.findFather(this.nodes.get(b));
    } 

    union(a, b) {
        if (!this.nodes.has(a) || !this.nodes.has(b)) {
            return;
        }
        let aHead = this.findFather(this.nodes.get(a));
        let bHead = this.findFather(this.nodes.get(b));
        let big = this.sizeMap.get(aHead) >= this.sizeMap.get(bHead) ? aHead : bHead;
        let small = big == aHead ? bHead : aHead;

        this.parents.set(small, big);
        this.sizeMap.set(big, this.sizeMap.get(big) + this.sizeMap.get(small));
        this.sizeMap.delete(small);
    }
}

class Node {
    constructor(value) {
        this.value = value;    // 该点的值 
        this.in = 0;           // 指向该点的边数
        this.out = 0;          // 从该点出发的边数
        this.nexts = [];       // 从该点连出去的点, node 数组 
        this.edges = [];       // 从该点连出去的边, edge 数组
    }
}

class Edge {
    constructor(weight, from, to) { // 权重，出发点，到达点
        this.weight = weight;
        this.from = from;
        this.to = to;
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();     // (int, node) 键值对：value, node
        this.edges = new Set();     // 图包含的边
    }
}

const kruskalMST = (graph) => {
    let unionSet = new UnionFind([...graph.nodes.values()]);
    let priorityQueue = new Heap(-1, 'weight');
    for (let edge of graph.edges.values()) {
        priorityQueue.add(edge);
    }
    let resultSet = new Set();
    while (priorityQueue.queue.length > 0) {
        let cur = priorityQueue.poll();
        if (!unionSet.isSameSet(cur.from, cur.to)) {
            resultSet.add(cur);
            unionSet.union(cur.from, cur.to);
        }
    }
    return resultSet;
}

