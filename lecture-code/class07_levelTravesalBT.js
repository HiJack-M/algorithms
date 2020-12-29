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

const level = (head) => {
    if (head == null) {
        return;
    }
    const queue = [];
    queue.push(head);
    while (queue.length > 0) {
        head = queue.shift();
        console.log(head.value);
        if (head.left) queue.push(head.left);
        if (head.right) queue.push(head.right);
    }
}

level(head);
