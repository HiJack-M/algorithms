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

/**
 * 返回出发点到各个点之间的最小路径map
 * @params {from} 图中的某个点
 * @returns {map}
 */
const dijkstra1 = (from) => {
    /* 从 head 出发到所有点的最小距离
     * key : 从 head 出发到达 key
     * value : 从 head 出发到达 key 的最小距离
     * 如果在表中，没有 T 的记录，含义是从 head 出发到 T 这个点的距离为正无穷 */
    let distanceMap = new Map();
    distanceMap.set(from, 0);

    let selectedNodes = new Set();

    let minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes);
    while (minNode) {
        let distance = distanceMap.get(minNode);
        for (let edge of minNode.edges) {
            if (!distanceMap.has(edge.to)) {
                distanceMap.set(edge.to, edge.weight + distance);
            } else {
                distanceMap.set(edge.to, Math.min(edge.weight + distance, distanceMap.get(edge.to)));
            }
        }
        selectedNodes.add(minNode);
        minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes);
    }
    return distanceMap;
}

const getMinDistanceAndUnselectedNode = (distanceMap, selectedNodes) => {
    let minNode = null;
    let minDistance = Infinity;
    for (let item of distanceMap.entries()) {
        let node = item[0];
        let distance = item[1];
        if (!selectedNodes.has(node) && distance < minDistance) {
            minNode = node;
            minDistance = distance;
        }
    }
    return minNode;
}

class NodeRecord {
    constructor(node, distance) {
        this.node = node;
        this.distance = distance;
    }
}

class NodeHeap {
    constructor() {
        this.nodes = [];
        this.heapIndexMap = new Map();
        this.distanceMap = new Map();
    }

    isEmpty() {
        return this.nodes.length == 0;
    }
    isEntered(node) {
        return this.heapIndexMap.has(node);
    }
    inHeap(node) {
        return this.heapIndexMap.has(node) && this.heapIndexMap.get(node) != -1;
    }

    insertHeapify(index) {
        while ((index - 1) / 2 > -1
            && this.distanceMap.get(nodes[index]) < this.distanceMap.get(nodes[parseInt((index - 1) / 2)])) {
            this.swap(index, parseInt((index - 1) / 2));
            index = parseInt((index - 1) / 2);
        }
    }
    heapify(index) {
        let left = index * 2 + 1;
        while (left < this.nodes.length) {
            let smallest = left + 1 < this.nodes.length
                && this.distanceMap.get(nodes[left + 1]) < this.distanceMap.get(nodes[left]) ? left + 1 : left;
            smallest = this.distanceMap.get(nodes[smallest]) < this.distanceMap.get(nodes[index]) ? smallest : index;
            if (smallest == index) {
                break;
            }
            this.swap(index, smallest);
            index = smallest;
            left = index * 2 + 1;
        }
    }

    swap(i, j) {
        this.heapIndexMap.set(this.nodes[i], j);
        this.heapIndexMap.set(this.nodes[j], i);
        let temp = this.nodes[i];
        this.nodes[i] = this.nodes[j];
        this.nodes[j] = temp;
    }

    pop() {
        if (!this.isEmpty()) {
            let nodeRecord = new NodeRecord(this.nodes[0], this.distanceMap.get(this.nodes[0]));
            this.swap(0, this.nodes.length--);
            this.heapIndexMap.set(this.nodes[this.nodes.length--], -1);
            this.distanceMap.delete(this.nodes[this.nodes.length--]);
            this.nodes.pop(); // 在堆中去掉即将返回出去的 node
            this.heapify(0);
            return nodeRecord;
        }
    }

    // 有一个点叫node，现在发现了一个从源节点出发到达node的距离为distance
    // 判断要不要更新，如果需要的话，就更新
    addOrUpdateOrIgnore(node, distance) {
        if (!this.isEntered) {
            this.nodes.push(node);
            this.heapIndexMap.set(node, this.node.length--);
            this.insertHeapify(this.nodes.length--);
            this.distanceMap.set(node, distance);
        } else if (this.inHeap) {
            if (this.distanceMap.get(node) > distance) {
                this.distanceMap.set(node, distance);
                this.insertHeapify(this.heapIndexMap.get(node));
            }
        }
    }
}

// 改进后的dijkstra算法
// 从head出发，所有head能到达的节点，生成到达每个节点的最小路径记录并返回
const dijkstra2 = (from) => {
    let nodeHeap = new NodeHeap();    
    nodeHeap.addOrUpdateOrIgnore(from, 0);
    let resultMap = new Map();
    while (!nodeHeap.isEmpty()) {
        let cur = nodeHeap.pop();
        let curNode = cur.node;
        let curDistance = cur.distance;
        for (let edge of curNode.edges) {
            nodeHeap.addOrUpdateOrIgnore(edge.to, curDistance + edge.weight);
        }
        resultMap.set(curNode, curDistance);
    }
    return resultMap;
}
