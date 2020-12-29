class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(item) {
        this.head = new Node(item);
    }
    
    getHead() {
        return this.head;
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
        while (currNode && currNode.next) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /* 查找 item 的上一个元素 */
    findPreNode(item) {
        let currNode = this.head;
        while (currNode) {
            if (currNode.next) {
                if (currNode.next.data !== item) {
                    currNode = currNode.next;
                } else {
                    return currNode;
                }
            } else {
                return null;
            }
        }
        return null;
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

let fruits = new LinkedList('apple');

fruits.insert('banana', 'apple');
fruits.insert('grape', 'banana');
fruits.insert('lemon', 'grape');
fruits.insert('mango', 'lemon');
fruits.insert('orange', 'mango');
fruits.insert('pear', 'orange');
fruits.insert('strawberry', 'pear');

fruits.display();

console.log(fruits.findLastNode());
console.log('findPreNode: ', fruits.findPreNode('mango'));

console.log(fruits.getHead());

console.log('===================');

const midOrUpMidNode = (head) => {
    if (head == null || head.next == null || head.next.next == null) {
        return head;
    }
    let slow = head;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

let midUp = midOrUpMidNode(fruits.getHead());
console.log('midOrUpMid: ', midUp);


const midOrDownMidNode = (head) => {
    if (head == null || head.next == null) {
        return head;
    }
    let slow = head.next;
    let fast = head.next;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

let midDown = midOrDownMidNode(fruits.getHead());
console.log('midOrDownMid: ', midDown);


const midOrUpMidPreNode = (head) => {
    if (head == null || head.next == null || head.next.next == null) {
        return null;
    }
    let slow = head;
    let fast = head.next.next;  // (参照midUpMid，找pre就相当于 fast 先走一步)
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

let midUpPre = midOrUpMidPreNode(fruits.getHead());
console.log('midOrUpMidPre: ', midUpPre);


const midOrDownMidPreNode = (head) => {
    if (head == null || head.next == null) {
        return null;
    }
    if (head.next.next == null) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

let midDownPre = midOrDownMidPreNode(fruits.getHead());
console.log('midOrDownMidPre: ', midDownPre);
