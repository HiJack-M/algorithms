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
/* head.left.left = new Node(4); */
head.left.right = new Node(4);
head.right.left = new Node(5);
/* head.right.right = new Node(7); */

const levelSerial = (head) => {
    if (head == null) {
        return null;
    }
    const queue = [];
    const ans = [];
    queue.push(head);
    ans.push(head.value);
    while (queue.length > 0) {
        head = queue.shift();
        if (head.left) {
            queue.push(head.left);
            ans.push(head.left.value);
        } else {
            ans.push(null);
        }
        if (head.right) {
            queue.push(head.right);
            ans.push(head.right.value);
        } else {
            ans.push(null);
        }
    }
    return ans;
}

console.log(levelSerial(head));

const arr1 = [1, 2, 3, null, 4, 5, null, null, null, null, null];

const levelReconstruct = (levelList) => {
    if (levelList == null || levelList.length == 0) {
        return null;
    }
    const queue = [];
    let head = generateNode(levelList.shift());
    if (head != null) {
        queue.push(head);
    }
    while (queue.length > 0) {
        let node = queue.shift();
        node.left = generateNode(levelList.shift());
        node.right = generateNode(levelList.shift());
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return head;
}

const generateNode = (value) => {
    if (!value) {
        return null;
    }
    return new Node(value);
}

console.log(levelReconstruct(arr1));
