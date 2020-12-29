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

const maxDistance = (head) => {
    return process(head).maxDistance;
}

class Info {
    constructor(maxDistance, height) {
        this.maxDistance = maxDistance;
        this.height = height;
    }
}

const process = (node) => {
    if (node == null) {
        return new Info(0, 0);
    }

    let leftInfo = process(node.left);
    let rightInfo = process(node.right);

    let height = Math.max(leftInfo.height, rightInfo.height) + 1;
    let maxDistance = Math.max(
        Math.max(leftInfo.maxDistance, rightInfo.maxDistance),
        leftInfo.height + rightInfo.height + 1
    )

    return new Info(maxDistance, height);
}

console.log(maxDistance(head));
