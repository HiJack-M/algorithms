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

// 判断完全二叉树的条件：
// 1. 任何节点有右子树、无左子树，就不是完全二叉树
// 2. 一旦遇到左右子树不双全，后续遇到的所有节点必为叶子节点
const isCBT = (head) => {
    if (head == null) return true;

    const queue = [];
    let partial = false;  // 遇到第一个缺失孩子的节点
    let l = null;
    let r = null;
    queue.push(head);
    while (queue.length > 0) {
        head = queue.shift();
        l = head.left;
        r = head.right;
        // 若出现了无左子树却有右子树/前面已经不双全了这里又出现一个子树的情况
        if ((!l && r) || (partial && (l || r))) {
            return false;
        }

        if (l) {
            queue.push(l);
        }
        if (r) {
            queue.push(r);
        }
        // 判断 partial 的时机：非 partial && 出现了子树缺失时
        if (!partial && (!l || !r)) {
            partial = true;
        }
    }
    return true;
}

/* console.log(isCBT(head)); */

// 递归方法
const isCBT2 = (head) => {
    return process(head).isCBT;
}

class Info {
    constructor(height, isFull, isCBT) {
        this.height = height;
        this.isFull = isFull;
        this.isCBT = isCBT;
    }
}

const process = (node) => {
    if (node == null) {
        return new Info(0, true, true);
    }

    let leftInfo = process(node.left);
    let rightInfo = process(node.right);

    let height = Math.max(leftInfo.height, rightInfo.height) + 1;
    let isFull = (leftInfo.isFull && rightInfo.isFull && leftInfo.height == rightInfo.height) ? true : false;
    let isCBT = false;
    if (isFull) {
        isCBT = true;
    } else if (leftInfo.isCBT && rightInfo.isCBT)  {
        if ((leftInfo.isFull && rightInfo.isFull && leftInfo.height - rightInfo.height == 1)
            || (leftInfo.isCBT && rightInfo.isFull && leftInfo.height - rightInfo.height == 1)
            || (leftInfo.isFull && rightInfo.isCBT && leftInfo.height == rightInfo.height)) {
            isCBT = true;
        }
    }

    return new Info(height, isFull, isCBT);
}

/* console.log(isCBT2(head)); */

const generateRandomBT = (maxLevel, maxValue) => {
    return generate(1, maxLevel, maxValue);
}

const generate = (level, maxLevel, maxValue) => {
    if (level > maxLevel || Math.random() < 0.5) {
        return;
    }
    let head = new Node(parseInt(Math.random() * maxValue));
    head.left = generate(level + 1, maxLevel, maxValue);
    head.right = generate(level + 1, maxLevel, maxValue);
    return head;
}

const testMachine = (maxLevel, maxValue, maxTime) => {
    for (let i = 1; i < maxTime; i++) {
        let head = generateRandomBT(maxLevel, maxValue);
        if (isCBT(head) != isCBT2(head)) {
            console.log('Oops!');
        }
    }
    console.log('Finished!');
}

testMachine(5, 20, 2000);
