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

// 逆时针旋转 90° 打印
const printBinaryTree = (head) => {
    if (head == null) {
        return null;
    }
    console.log('Binary Tree: ');
    printInOrder(head, 0, 'H', 10);
}

// node: 当前打印节点
// height: 当前节点所在层级
// to: 是右节点v, 是左节点^
// space: 每个打印的节点包括其左右空格所占的空间, 每个层级相间距离 
const printInOrder = (node, height, to, space) => {
    if (node == null) {
        return;
    }

    printInOrder(node.right, height + 1, 'v', space);
    
    // printSelf
    let val = to + node.value + to;
    let lenM = val.length;
    let lenL = (space - lenM) / 2;
    let lenR = space - lenL - lenM;
    val = spaceGenerator(lenL) + val + spaceGenerator(lenR);
    console.log(spaceGenerator(height * space) + val);
    
    printInOrder(node.left, height + 1, '^', space);
}

const spaceGenerator = (length) => {
    let ele = ' ';
    let ans = '';
    for (let i = 0; i < length; i++) {
        ans += ele;
    }
    return ans;
}

printBinaryTree(head);
