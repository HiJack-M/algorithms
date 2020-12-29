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

const isFull = (head) => {
    if (head == null) {
        return true;
    }
    return process(head).isFull;
}

class Info {
    constructor(isFull, emptyLevel) {
        this.isFull = isFull;
        this.emptyLevel = emptyLevel;
    }
}

const process = (node) => {
    if (node == null) {
        return new Info(true, 0);
    }

    let leftInfo = process(node.left);
    let rightInfo = process(node.right);

    let isFull = false;
    let emptyLevel = 0;
    if (leftInfo.isFull && rightInfo.isFull && leftInfo.emptyLevel == rightInfo.emptyLevel) {
        isFull = true;
        emptyLevel = leftInfo.emptyLevel + 1;
    }
    
    return new Info(isFull, emptyLevel);
}

console.log(isFull(head));
