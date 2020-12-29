class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(item) {
        if (arguments.length > 0) {
            this.head = new Node(item);
        } else {
            this.head = null;
        }
    }
    
    getHead() {
        return this.head;
    }

    /**
     * @description 插入元素
     * @param {要插入的元素} newItem
     * @param {插入到该元素之后} beforeItem 
     */
    insert(newItem, beforeItem) {
        let newNode = new Node(newItem);

        if (beforeItem) {
            let preNode = this.find(beforeItem);
            newNode.next = preNode.next;
            preNode.next = newNode;
        } else {
            let preNode = this.findLastNode();
            preNode.next = newNode;
        }
    }

    /**
     * @description 删除元素
     * @param {要删除的元素} item
     */
    remove(item) {
        let preNode = findPreNode(item);
        if (preNode && preNode.next) {
            preNode.next = preNode.next.next;
        }
    }

    /**
     * @description 以数组形式存入链表
     * @param {要储存的数组} arr
     */
    receiveArray(arr) {
        if (arr == null || arr.length === 0) {
            return;
        }
        if (this.head == null) {
            this.head = new Node(arr[0]);
            for (let i = 1; i < arr.length; i++) {
                let lastNode = this.findLastNode();
                let newNode = new Node(arr[i]);
                lastNode.next = newNode;
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                let lastNode = this.findLastNode();
                let newNode = new Node(arr[i]);
                lastNode.next = newNode;
            }
        }
    }

    /* 查找元素 */
    find(item) {
        let currNode = this.head;
        while (currNode && currNode.data !== item) {
            if (currNode.next) {
                currNode = currNode.next;
            } else {
                currNode = null;
            }
        }
        return currNode;
    }
    
    /* 查找列表最后一个元素 */
    findLastNode() {
        let currNode = this.head;
        while (currNode && currNode.next != null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /* 查找 item 的上一个元素 */
    findPreNode(item) {
        let currNode = this.head;
        while (currNode && currNode.next && currNode.next.data !== item) {
            if (currNode.next) {
                currNode = currNode.next;
            } else {
                currNode = null;
            }
        }
        return currNode;
    }
    
    /**
     * @description 打印链表元素
     */
    display() {
        let currNode = this.head;
        while(currNode) {
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }
}

let nums = new LinkedList();
nums.receiveArray([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
let head = nums.getHead();
nums.display();
console.log('==============')

const displayByHead = (head) => {
    let cur = head;
    while (cur) {
        console.log(cur);
        cur = cur.next;
    }
}

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const partition = (arr, l, r, num) => {
    if (l > r) return [-1, -1];
    if (l == r) return [l, r];

    let s = l - 1;
    let b = r + 1;
    let i = l;
    while (i < b) {
        if (arr[i].data < num) {
            swap(arr, i++, ++s);
        } else if (arr[i].data == num) {
            i++;
        } else {
            swap(arr, i, --b);
        } 
    } 
    return [s + 1, b - 1];
}

const smallerEqualBigger1 = (head, pivot) => {
    if (head == null || head.next == null) {
        return head;
    }
    let cur = head;
    let arr = [];
    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }
    let sortedArr = partition(arr, 0, arr.length - 1, pivot);
    let i;
    for (i = 1; i < arr.length; i++) {
        arr[i - 1].next = arr[i];
    }
    arr[i - 1].next = null;
    return arr[0];
}

/* let newHead = smallerEqualBigger1(head, 3);
 * console.log('newHead: ', newHead); */

const smallerEqualBigger2 = (head, pivot) => {
    if (head == null || head.next == null) {
        return head;
    } 
    let sh = null;
    let st = null;
    let eh = null;
    let et = null;
    let bh = null;
    let bt = null;

    let next = null;
    while (head) {
        next = head.next;
        head.next = null;   // 把当前node切成单个单个
        if (head.data < pivot) {
            if (sh == null) {
                sh = head;
                st = head;
            } else {
                st.next = head;
                st = head;
            }
        } else if (head.data == pivot) {
            if (eh == null) {
                eh = head;
                et = head;
            } else {
                et.next = head;
                et = head;
            }
        } else {
            if (bh == null) {
                bh = head;
                bt = head;
            } else {
                bt.next = head;
                bt = head;
            }
        }
        head = next;
    }

    // 技巧，用xt尾部来判断某区域是否存在
    // 先连小和等区域，判断小区域是否存在
    if (st != null) {
        st.next = eh;
        et = et == null ? st : et;
    }
    if (et != null) {
        et.next = bh;
    }
    return sh ? sh : (eh ? eh : bh);
}

let newHead1 = smallerEqualBigger2(head, 3);
console.log('newHead1: ', newHead1);

console.log('============');
displayByHead(newHead1);
