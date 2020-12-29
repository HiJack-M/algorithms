/* 给定一颗二叉树的头节点，返回最大搜索子树的头节点或大小 */

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

const maxSubBSTHead = (head) => {
    if (head == null) {
        return null;
    }
    return process(head).BSTHead;
}

class Info {
    // 该子树上的最小值，最大值，是否为 BST，BST 大小，BST 头节点
    constructor(min, max, isAllBST, maxBSTSize, maxBSTHead) {
        this.min = min;
        this.max = max;
        this.isAllBST = isAllBST;
        this.maxBSTSize = maxBSTSize;
        this.BSTHead = maxBSTHead;
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
        min = Math.min(min, leftInfo.min);
        max = Math.max(max, leftInfo.max);
        maxBSTSize = Math.max(maxBSTSize, leftInfo.maxBSTSize);
    }
    if (rightInfo != null) {
        min = Math.min(min, rightInfo.min);
        max = Math.max(max, rightInfo.max);
        maxBSTSize = Math.max(maxBSTSize, rightInfo.maxBSTSize);
    }

    let isAllBST = false;
    let maxBSTHead = null;
    if (
        (leftInfo ? (leftInfo.isAllBST && leftInfo.max < node.value) : true)
        && (rightInfo ? (rightInfo.isAllBST && rightInfo.min > node.value) : true)
    ) {
        // 若满足整体是 BST
        isAllBST = true;
        maxBSTHead = node;
        maxBSTSize = (leftInfo ? leftInfo.maxBSTSize : 0) + 
                    (rightInfo ? rightInfo.maxBSTSize : 0) + 1;
    } else {
        if (leftInfo && rightInfo) {
            maxBSTHead = leftInfo.maxBSTSize > rightInfo.maxBSTSize ? leftInfo.maxBSTHead : rightInfo.maxBSTHead;
        } else if (leftInfo) {
            maxBSTHead = leftInfo.maxBSTHead;
        } else if (rightInfo) {
            maxBSTHead = rightInfo.maxBSTHead;
        }
    }

    return new Info(min, max, isAllBST, maxBSTSize, maxBSTHead);
}

console.log(maxSubBSTHead(head));
