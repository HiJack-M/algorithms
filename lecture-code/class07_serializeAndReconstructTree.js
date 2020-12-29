class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

/* let head = new Node(1);
 * head.left = new Node(2);
 * head.right = new Node(3);
 * head.left.left = new Node(4);
 * head.left.right = new Node(5);
 * head.right.left = new Node(6);
 * head.right.right = new Node(7); */

let head = new Node(1);
// head.left = new Node(2);
head.right = new Node(2);
// head.left.left = new Node(4);
// head.left.right = new Node(3);
head.right.left = new Node(3);
// head.right.right = new Node(7);

const preSerial = (head) => {
    const ans = [];
    preS(head, ans);
    return ans;
}

const preS = (head, ans) => {
    if (head == null) {
        ans.push(null);
    } else {
        ans.push(head.value);
        preS(head.left, ans);
        preS(head.right, ans);
    } 
}

/* console.log(preSerial(head)); */

const buildByPreQueue = (prelist) => {
    if (prelist == null || prelist.length == 0) {
        return null;
    }
    return preB(prelist);
}

const preB = (prelist) => {
    let value = prelist.shift();
    if (value == null) {
        return null;
    }
    let head = new Node(value);
    head.left = preB(prelist);
    head.right = preB(prelist);
    return head;
}

const arrPre = [1, null, 2, 3, null, null, null];

/* console.log(buildByPreQueue(arrPre)); */









const infixSerial = (head) => {
    const ans = [];
    infixS(head, ans);
    return ans;
}

const infixS = (head, ans) => {
    if (head == null) {
        ans.push(null);
    } else {
        infixS(head.left, ans);
        ans.push(head);
        infixS(head.right, ans);
    }
}

/* console.log(infixSerial(head)); */

/* // 以下不对
 * const buildByInfixQueue = (infixlist) => {
 *     if (infixlist == null || infixlist.length == 0) {
 *         return null;
 *     }
 *     return infixB(infixlist);
 * }
 *
 * const infixB = (infixlist) => {
 *     if (infixlist.length != 0) {
 *         let value = infixlist.shift();
 *         let head = {};
 *         if (value == null) {
 *             head.left = null;
 *         } else {
 *             head.left = new Node(value);
 *         }
 *         head = infixB(infixlist);
 *         head.right = infixB(infixlist);
 *         return head;
 *     }
 * }
 *
 * const arr2 = [null, 1, null, 3, null, 2, null];
 *
 * console.log(buildByInfixQueue(arr2)); */
