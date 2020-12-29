// BFS: breadth first search
// DFS: Depth first search

class Node {
    constructor(value) {
        this.value = value; // 该点的值 
        this.in = 0; // 指向该点的边数
        this.out = 0; // 从该点出发的边数
        this.nexts = []; // 从该点连出去的点, node 数组 
        this.edges = []; // 从该点连出去的边, edge 数组
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
        this.nodes = new Map(); // (int, node) 键值对：value, node
        this.edges = new Set(); // 图包含的边
    }
}

// 对图进行宽度优先遍历
const BFS = (node) => {
    if (node == null) {
        return;
    }
    let queue = [];
    let set = new Set();
    queue.push(node);
    set.add(node);
    while (queue.length > 0) {
        let item = queue.shift();
        console.log(item.value); // 出队列时打印
        for (let i = 0; i < item.nexts.length; i++) {
            if (!set.has(item.nexts[i])) {
                set.add(item.nexts[i]);
                queue.push(item.nexts[i]);
            }
        }
    }
}

const DFS = (node) => {
    if (node == null) {
        return;
    }
    let stack = [];
    let set = new Set();
    stack.push(node);
    console.log(node.value);
    set.add(node);
    while (stack.length > 0) {
        let item = stack.pop();
        for (let i = 0; i < item.nexts.length; i++) {
            if (!set.has(item.nexts[i])) {
                stack.push(item);
                stack.push(item.nexts[i]);
                set.add(item.nexts[i]);
                console.log(item.nexts[i].value); // 入集时打印
                break;
            }
        }
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(5);
let e = new Node(4);
let f = new Node(6);

a.nexts = [b, c, e];
b.nexts = [a, d];
c.nexts = [a, d, f];
d.nexts = [b, c, f];
e.nexts = [a, f];
f.nexts = [c, d, e];

BFS(a);
console.log('=======');
DFS(a);
