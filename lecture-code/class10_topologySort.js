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

const topology = (graph) => {
    // directed graph and no loop
    if (graph == null) {
        return null;
    }
    // key: node, value: 剩余的入度
    let inMap = new Map();
    // 记录入度为0的点
    let zeroInQueue = [];
    for (let node of graph.nodes.values()) {
        inMap.set(node, node.in); 
        if (node.in == 0) {
            zeroInQueue.push(node);
        }
    }
    // 拓扑排序的结果
    let result = [];
    while (zeroInQueue.length > 0) {
        let cur = zeroInQueue.shift();
        result.push(cur);
        for (let i = 0; i < cur.nexts.length; i++) {
            inMap.set(cur.nexts[i], inMap.get(cur.nexts[i]) - 1);
            if (inMap.get(cur.nexts[i]) == 0) {
                zeroInQueue.push(cur.nexts[i]);
            }
        }
    }
    return result;
}

