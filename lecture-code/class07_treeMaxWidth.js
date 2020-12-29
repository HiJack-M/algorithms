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

const maxWidthUseMap = (head) => {
    if (head == null) {
        return 0;
    }
    const queue = [];
    queue.unshift(head);
    const levelMap = new Map();
    let curLevel = 1;
    levelMap.set(head, curLevel);
    let curLevelNodes = 0;
    let max = 0;
    
    while (queue.length > 0) {
        head = queue.pop();
        console.log(head.value);
        let curNodeLevel = levelMap.get(head);

        if (head.left) {
            queue.unshift(head.left);
            levelMap.set(head.left, curNodeLevel + 1);
        }
        if (head.right) {
            queue.unshift(head.right);
            levelMap.set(head.right, curNodeLevel + 1);
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

console.log('maxWidthUseMap: ', maxWidthUseMap(head));

const maxWidthNoMap = (head) => {
    if (head == null) {
        return 0;
    }
    const queue = [];
    queue.unshift(head);
    let curEnd = head;
    let nextEnd = null;
    let curLevelNodes = 0;
    let max = 0;

    while (queue.length > 0) {
        head = queue.pop();
        console.log(head.value);

        if (head.left) {
            queue.unshift(head.left);
            nextEnd = head.left;
        }
        if (head.right) {
            queue.unshift(head.right);
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

console.log('maxWidthNoMap: ', maxWidthNoMap(head));

const maxWidthUseSize = (head) => {
    if (!head) return 0;
    let queue = [];
    let ans = 0;
    queue.push(head);
    while (queue.length > 0) {
        let size = queue.length;
        ans = Math.max(ans, size);
        while (size > 0) {
            let item = queue.shift();
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
            size--;
        }
    }
    return ans;
}

console.log('maxWidthUseSize: ', maxWidthUseSize(head));

