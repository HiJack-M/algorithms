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
     * @description 插入元素
     * @param {要插入的元素} newItem
     * @param {插入到该元素之后} beforeItem，不传则插入到末尾处
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

console.log(fruits.getHead());
console.log(fruits.findLastNode());
