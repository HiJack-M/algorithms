class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

let head = new Node(1);
head.left = new Node(2);
head.right = new Node(3);
head.left.left = new Node(4);
head.left.right = new Node(5);
head.right.left = new Node(6);
head.right.right = new Node(7);

const isBalanced = (head) => {
    return process(head).isBalanced;
}

class Info {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced;
        this.height = height;
    }
}

const process = (node) => {
    // base case
    if (node == null) {
        return new Info(true, 0);
    }
    let leftInfo = process(node.left);
    let rightInfo = process(node.right);

    let nodeIsBalanced = true;
    if (!leftInfo.isBalanced || !rightInfo.isBalanced || Math.abs(leftInfo.height - rightInfo.height) > 1) {
        nodeIsBalanced = false;
    }
    let nodeHeight = Math.max(leftInfo.height, rightInfo.height) + 1;
    return new Info(nodeIsBalanced, nodeHeight);
}

console.log(isBalanced(head));
