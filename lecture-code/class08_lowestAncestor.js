/* 给定一棵二叉树的头节点head，和另外两个节点a和b。
 * 返回a和b的最低公共祖先 */

class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

/* let head = new Node(1);
 * head.left = new Node(2);
 * head.right = new Node(3);
 * head.left.left = new Node(4);
 * head.left.right = new Node(5);
 * head.right.left = new Node(6);
 * head.right.right = new Node(7); */

const lowestAncestor1 = (head, node1, node2) => {
    if (head == null) {
        return null;
    }
    let queue = [];
    queue.push(head);
    let parentMap = new Map();
    parentMap.set(head, null);

    while (queue.length > 0) {
        head = queue.shift();
        if (head.left) {
            queue.push(head.left);
            parentMap.set(head.left, head);
        }
        if (head.right) {
            queue.push(head.right);
            parentMap.set(head.right, head);
        }
    }

    let setN1 = new Set();
    while (node1 != null) {
        setN1.add(node1);
        node1 = parentMap.get(node1);
    }

    while (node2 != null) {
        if (setN1.has(node2)) {
            break;
        }
        node2 = parentMap.get(node2);
    }

    return node2;
}

/* console.log(lowestAncestor1(head, head.left.left, head.left.right)); */

const lowestAncestor2 = (head, node1, node2) => {
    return process(head, node1, node2).ans;
}

class Info {
    constructor(ans, findN1, findN2) {
        this.ans = ans;
        this.findN1 = findN1;
        this.findN2 = findN2;
    }
}

const process = (node, n1, n2) => {
    if (node == null) {
        return new Info(null, false, false);
    }

    let leftInfo = process(node.left, n1, n2);
    let rightInfo = process(node.right, n1, n2);

    let findN1 = node == n1 || leftInfo.findN1 || rightInfo.findN1;
    let findN2 = node == n2 || leftInfo.findN2 || rightInfo.findN2;

    let ans = null;
    if (leftInfo.ans) {
        ans = leftInfo.ans;
    }
    if (rightInfo.ans) {
        ans = rightInfo.ans;
    }
    if (ans == null && findN1 && findN2) {
        ans = node;
    }

    return new Info(ans, findN1, findN2);
}

/* console.log(lowestAncestor2(head, head.left.left, head.left.right)); */

const generateRandomBT = (maxLevel, maxValue) => {
    return generate(1, maxLevel, maxValue);
} 

const generate = (level, maxLevel, maxValue) => {
    if (level > maxLevel || Math.random() < 0.5) {
        return;
    }
    let head = new Node(Math.random() * maxValue);
    head.left = generate(level + 1, maxLevel, maxValue);
    head.right = generate(level + 1, maxLevel, maxValue);
    return head;
}

const pickRandomOne = (head) => {
    if (head == null) {
        return null;
    }
    const arr = [];
    fillPrelist(head, arr);
    let randomIndex = parseInt(Math.random() * arr.length);
    return arr[randomIndex];
}

const fillPrelist = (node, arr) => {
    if (node == null) {
        return;
    }
    arr.push(node);
    fillPrelist(node.left, arr);
    fillPrelist(node.right, arr);
}

const testMachine = (maxLevel, maxValue, maxTime) => {
    for (let i = 1; i < maxTime; i++) {
        let head = generateRandomBT(maxLevel, maxValue);
        let node1 = pickRandomOne(head);
        let node2 = pickRandomOne(head);
        if (lowestAncestor1(head, node1, node2) != lowestAncestor2(head, node1, node2)) {
            console.log('Oops!');
        }
    }
    console.log('Finished!');
}

testMachine(5, 20, 100);
