/* 求二叉树最宽的层有多少个节点 */
/* hint: 可以通过设置flag变量的方式，来发现某一层的结束 */

class Node {
    constructor(value) {
        this.val = value;
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

/* 所用结构：
 * queue           用来宽度优先遍历
 * map             用来标记每个节点的层级
 * max             最宽层的节点数
 * curLevel        当前统计的层级
 * curLevelNodes   当前层级的节点个数
 * curNodeLevel    循环内当前节点的层级 */

const maxWidthUseMap = (head) => {
    if (!head) {
        return 0;
    }
    let queue = [];
    let map = new Map();
    let max = 0;
    let curLevel = 1;
    let curLevelNodes = 0;
    queue.push(head);
    map.set(head, curLevel);
    while (queue.length > 0) {
        head = queue.shift();
        let curNodeLevel = map.get(head);
        if (head.left) {
            queue.push(head.left);
            map.set(head.left, curNodeLevel + 1);
        }
        if (head.right) {
            queue.push(head.right);
            map.set(head.right, curNodeLevel + 1);
        }

        if (curNodeLevel == curLevel) {
            curLevelNodes++;
        } else {
            max = Math.max(max, curLevelNodes);
            curLevelNodes = 1;
            curLevel++;
        }
    }
    max = Math.max(max, curLevelNodes);
    return max;
}

let ans = maxWidthUseMap(head);
console.log(ans);


/* 所用结构：
 * queue           用来宽度优先遍历
 * max             最宽层的节点数
 * curEnd          当前统计层级的最后一个节点
 * nextEnd         标记下一个层级的最后一个节点 
 * curLevelNodes   当前层级节点个数 */
const maxWidthNoMap = (head) => {
    if (!head) {
        return 0;
    }
    let queue = [];
    queue.push(head);
    let curEnd = head;
    let nextEnd = null;
    let curLevelNodes = 0;
    let max = 0;
    
    while (queue.length > 0) {
        head = queue.shift();
        if (head.left) {
            queue.push(head.left);
            nextEnd = head.left;
        }
        if (head.right) {
            queue.push(head.right);
            nextEnd = head.right;
        }
        curLevelNodes++;
        if (head == curEnd) {
            max = Math.max(max, curLevelNodes);
            curEnd = nextEnd;
            curLevelNodes = 0;
        }
    }
    return max;
}

let ans1 = maxWidthNoMap(head);
console.log(ans1);
