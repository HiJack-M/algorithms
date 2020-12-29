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

const copyListWithRandom1 = (head) => {
    
}

// 构建 random node 太复杂，不写先
