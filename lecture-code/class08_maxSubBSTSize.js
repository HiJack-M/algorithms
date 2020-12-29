class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

let head = new Node(4);
head.left = new Node(2);
head.right = new Node(6);
head.left.left = new Node(1);
head.left.right = new Node(3);
head.right.left = new Node(5);
head.right.right = new Node(7);

const maxBSTSize = (head) => {
    if (head == null) {
        return 0;
    }
    return process(head).maxBSTSize;
}

class Info {
    constructor(min, max, maxBSTSize, isAllBST) {
        this.min = min;
        this.max = max;
        this.maxBSTSize = maxBSTSize;
        this.isAllBST = isAllBST;
    }
}

const process = (node) => {
    if (node == null) {
        return null;
    }
    let leftInfo = process(node.left);
    let rightInfo = process(node.right);

    let min = node.value;
    let max = node.value;
    let maxBSTSize = 0;
    if (leftInfo != null) {
        min = leftInfo.min < min ? leftInfo.min : min; 
        max = leftInfo.max > max ? leftInfo.max : max; 
        maxBSTSize = Math.max(maxBSTSize, leftInfo.maxBSTSize);
    }
    if (rightInfo != null) {
        min = rightInfo.min.value < min.value ? rightInfo.min : min; 
        max = rightInfo.max.value > max.value ? rightInfo.max : max; 
        maxBSTSize = Math.max(maxBSTSize, rightInfo.maxBSTSize);
    }

    let isAllBST = false;
    if (
        (leftInfo ? (leftInfo.isAllBST && leftInfo.max < node.value) : true)
        && (rightInfo ? (rightInfo.isAllBST && rightInfo.min > node.value) : true)
    ) {
        isAllBST = true;
        maxBSTSize = (leftInfo ? leftInfo.maxBSTSize : 0)
                    + (rightInfo ? rightInfo.maxBSTSize : 0)
                    + 1;
    }

    return new Info(min, max, maxBSTSize, isAllBST);
}

console.log(maxBSTSize(head));
