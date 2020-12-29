/* 二叉树结构如下定义：
 * Class Node {
 *      V value;
 *      Node left;
 *      Node right;
 *      Node parent;
 *  }
 * 给你二叉树中的某个节点，返回该节点的后继节点
 *
 * 后继节点: 在一颗二叉树中，在中序遍历的序列中，该节点的下一个节点 */

class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.parent = null;
        this.right = null;
    }
}

let head = new Node(6);
head.parent = null;
head.left = new Node(3);
head.left.parent = head;
head.left.left = new Node(1);
head.left.left.parent = head.left;
head.left.left.right = new Node(2);
head.left.left.right.parent = head.left.left;
head.left.right = new Node(4);
head.left.right.parent = head.left;
head.left.right.right = new Node(5);
head.left.right.right.parent = head.left.right;
head.right = new Node(9);
head.right.parent = head;
head.right.left = new Node(8);
head.right.left.parent = head.right;
head.right.left.left = new Node(7);
head.right.left.left.parent = head.right.left;
head.right.right = new Node(10);
head.right.right.parent = head.right;

// 找到某个节点的后继节点
const getSuccessorNode = (node) => {
    if (node == null) {
        return null;
    }
    if (node.right) {
        let item = node.right;
        while (item.left) {
            item = item.left;
        }
        return item;
    } else {
        let parent = node.parent;   // 这就是第三个指针的作用啦
        while (parent && node == parent.right) {
            node = parent;
            parent = node.parent;
        }
        return parent;
    }
}

let test = head.left.left;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head.left.left.right;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head.left;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head.left.right;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head.left.right.right;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head.right.left.left;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head.right.left;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head.right;
console.log(test.value + " next: " + getSuccessorNode(test).value);
test = head.right.right; // 10's next is null
console.log(test.value + " next: " + getSuccessorNode(test));
