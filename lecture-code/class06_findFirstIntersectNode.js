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

    insertWithNext(newItem, beforeItem, nextItem) {
        let newNode = new Node(newItem);

        if (beforeItem) {
            let preNode = this.find(beforeItem);
            newNode.next = preNode.next;
            preNode.next = newNode;
        } else {
            let preNode = this.findLastNode();
            preNode.next = newNode;
        }
        newNode.next = this.find(nextItem);
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

    displaySet() {
        let listSet = new Set();
        let cur = this.head;
        while (cur) {
            if (listSet.has(cur)) {
                break;
            }
            listSet.add(cur);
            cur = cur.next;
        }
        console.log(listSet);
    }
}

/* const displayByHead = (head) => {
 *     let cur = head;
 *     while (cur) {
 *         console.log(cur);
 *         cur = cur.next;
 *     }
 * }
 *
 * let nums1 = new LinkedList(1);
 * [> nums1.receiveArray([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]); <]
 * nums1.insert(2, 1);
 * nums1.insert(3, 2);
 * nums1.insert(4, 3);
 * nums1.insert(5, 4);
 * nums1.insertWithNext(6, 5, 3);
 *
 * let head1 = nums1.getHead();
 * [> nums1.display(); <]
 * nums1.displaySet();
 * console.log('==============')
 *
 * let nums2 = new LinkedList();
 * nums2.receiveArray([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
 * let head2 = nums2.getHead();
 * nums2.displaySet();
 * console.log('==============') */

const displaySet = (head) => {
    let listSet = new Set();
    let cur = head;
    while (cur) {
        if (listSet.has(cur)) {
            break;
        }
        listSet.add(cur);
        cur = cur.next;
    }
    console.log(listSet);
}



const getLoopNode = (head) => {
    if (head == null || head.next == null || head.next.next == null) {
        return null;
    }
    let s = head.next;
    let f = head.next.next;

    while (f != s) {
        if (f.next == null || f.next.next == null) {
            return null;
        }
        f = f.next.next;
        s = s.next;
    }

    f = head;
    while (f != s) {
        f = f.next;
        s = s.next;
    }
    return f;
}

// 如果两个链表都无环，返回第一个相交节点，如果不相交，返回null
const noLoopIntersect = (head1, head2) => {
    if (head1 == null || head2 == null) {
        return null;
    }
    let cur1 = head1;
    let cur2 = head2;
    let n = 0;
    while (cur1.next != null) {
        n++;
        cur1 = cur1.next;
    }
    while (cur2.next != null) {
        n--;
        cur2 = cur2.next;
    }
    if (cur1 != cur2) {
        return null;
    }
    // n  :  链表1长度减去链表2长度的值
    cur1 = n > 0 ? head1 : head2;
    cur2 = cur1 == head1 ? head2 : head1;
    while (n != 0) {
        cur1 = cur1.next;
        n--;
    }
    while (cur1 != cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
}

const bothLoopIntersect = (head1, loop1, head2, loop2) => {
    if (loop1 == loop2) {
        let cur1 = head1;
        let cur2 = head2;
        let n = 0;
        while (cur1.next != loop1) {
            n++;
            cur1 = cur1.next;
        }
        while (cur2.next != loop2) {
            n--;
            cur2 = cur2.next;
        }
        // n  :  链表1长度减去链表2长度的值
        cur1 = n > 0 ? head1 : head2;
        cur2 = cur1 == head1 ? head2 : head1;
        n = Math.abs(n);
        while (n != 0) {
            cur1 = cur1.next;
            n--;
        }
        while (cur1 != cur2) {
            cur1 = cur1.next;
            cur2 = cur2.next;
        }
        return cur1;
    } else {
        cur1 = loop1.next;
        while (cur1 != loop1) {
            if (cur1 == loop2) {
                return cur1;
            }
            cur1 = cur1.next;
        }
        return null;
    }
}

const findFirstIntersectNode = (head1, head2) => {
    if (head1 == null || head2 == null) {
        return null;
    }
    let loop1 = getLoopNode(head1);
    let loop2 = getLoopNode(head2);
    if (loop1 && loop2) {
        return bothLoopIntersect(head1, loop1, head2, loop2); 
    }
    if (!loop1 && !loop2) {
        return noLoopIntersect(head1, head2);
    }
    return null;
}

/* // 1->2->3->4->5->6->7->null
 * let head1 = new Node(1);
 * head1.next = new Node(2);
 * head1.next.next = new Node(3);
 * head1.next.next.next = new Node(4);
 * head1.next.next.next.next = new Node(5);
 * head1.next.next.next.next.next = new Node(6);
 * head1.next.next.next.next.next.next = new Node(7);
 * displaySet(head1);
 *
 * // 0->9->8->6->7->null
 * let head2 = new Node(0);
 * head2.next = new Node(9);
 * head2.next.next = new Node(8);
 * head2.next.next.next = head1.next.next.next.next.next; // 8->6
 * displaySet(head2);
 *
 * console.log(findFirstIntersectNode(head1, head2)); */

// 1->2->3->4->5->6->7->4...
head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
head1.next.next.next.next.next = new Node(6);
head1.next.next.next.next.next.next = new Node(7);
head1.next.next.next.next.next.next = head1.next.next.next; // 7->4

// 0->9->8->2...
head2 = new Node(0);
head2.next = new Node(9);
head2.next.next = new Node(8);
head2.next.next.next = head1.next; // 8->2
console.log(findFirstIntersectNode(head1, head2));

// 0->9->8->6->4->5->6..
head2 = new Node(0);
head2.next = new Node(9);
head2.next.next = new Node(8);
head2.next.next.next = head1.next.next.next.next.next; // 8->6
console.log(findFirstIntersectNode(head1, head2));
