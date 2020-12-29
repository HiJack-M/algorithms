class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

const pre = (node) => {
    if (node == null) {
        return;
    }
    console.log(node.value);
    pre(node.left);
    pre(node.right);
}

const infix = (node) => {
    if (node == null) {
        return;
    }
    infix(node.left);
    console.log(node.value);
    infix(node.right);
}

const post = (node) => {
    if (node == null) {
        return;
    }
    post(node.left);
    post(node.right);
    console.log(node.value);
}

let head = new Node(1);
head.left = new Node(2);
head.right = new Node(3);
head.left.left = new Node(4);
head.left.right = new Node(5);
head.right.left = new Node(6);
head.right.right = new Node(7);

pre(head);
console.log('=========');
infix(head);
console.log('=========');
post(head);

