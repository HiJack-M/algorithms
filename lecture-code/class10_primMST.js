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

const primMST = (graph) => {
    // 解锁的边进入小根堆
    let priorityQueue = new Heap(-1, 'weight');
    // 被解锁的点
    let nodeSet = new Set();
    // 已经考虑过的边，不要重复考虑(放进去过的，不再二次放入)
    let edgeSet = new Set();
    // 依次挑选的的边在result里
    let resultSet = new Set();

    // 随便挑了一个点
    for (let node of graph.nodes.values()) {
        // node 是开始点
        if (!nodeSet.has(node)) {
            nodeSet.add(node);
           // 由一个点，解锁所有相连的边
           for (let i = 0; i < node.edges.length; i++) {
                if (!edgeSet.has(node.edges[i])) {
                    edgeSet.add(node.edges[i]);
                    priorityQueue.add(node.edges[i]);
                }
            }
            while (priorityQueue.queue.length > 0) {
                let cur = priorityQueue.poll();
                let toNode = cur.to;
                if (!nodeSet.has(toNode)) {
                    nodeSet.add(toNode);
                    resultSet.add(cur);
                    for (let i = 0; i < toNode.edges.length; i++) {
                        if (!edgeSet.has(toNode.edges[i])) {
                            edgeSet.add(toNode.edges[i]);
                            priorityQueue.add(toNode.edges[i]);
                        }
                    }
                }
            }
        }
    }
    return resultSet;
}

const primMST1 = (graph) => {
    if (!graph) {
        return null;
    }
    let nodeSet = new Set();
    let edgeSet = new Set();
    let priorityQueue = new Heap(-1, 'weight');
    let resultSet = new Set();
    for (let node of graph.nodes.values()) {
        nodeSet.add(node);
        for (let i = 0; i < node.edges.length; i++) {
            priorityQueue.add(node.edges[i]);
            edgeSet.add(node.edges[i]);
        }
    }
    while (priorityQueue.length > 0) {
        let curEdge = priorityQueue.poll();
        let curNode = curEdge.to();
        if (!nodeSet.has(curNode)) {
            resultSet.add(curEdge);
            nodeSet.add(curNode);
            for (let i = 0; i < curNode.edges.length; i++) {
                priorityQueue.add(curNode.edges[i]);
                edgeSet.add(curNode.edges[i]);
            }
        }
    }
}
