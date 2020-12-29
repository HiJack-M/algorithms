class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

const pre = (head) => {
    console.log('pre order: ');
    if (head != null) {
        const stack = [];
        stack.push(head);
        while (stack.length > 0) {
            head = stack.pop();
            console.log(head.value);
            if (head.right) {
                stack.push(head.right);
            }
            if (head.left) {
                stack.push(head.left);
            }
        }
    }
}

const inorder = (head) => {
    console.log('inorder order: ');
    if (head != null) {
        const stack = [];
        while (head || stack.length > 0) {
            if (head) {
                stack.push(head);
                head = head.left;
            } else {
                head = stack.pop();
                console.log(head.value);
                head = head.right;
            }
        }
    }
}

const post = (head) => {
    console.log('post order: ');
    if (head != null) {
        const stack = [];
        const helper = [];
        stack.push(head);
        while (stack.length > 0) {
            head = stack.pop();
            helper.push(head);
            if (head.left) {
                stack.push(head.left);
            }
            if (head.right) {
                stack.push(head.right);
            }
        }
        while (helper.length > 0) {
            let item = helper.pop();
            console.log(item.value);
        }
    }
}

const post2 = (head) => {
    console.log('post order: ');
    if (head != null) {
        const stack = [];
        let c = null;
        let h = head;
        stack.push(h);
        while (stack.length > 0) {
            c = stack[stack.length - 1];
            if (c.left != null && h != c.left && h != c.right) {
                stack.push(c.left);
            } else if (c.right != null && h != c.right) {
                stack.push(c.right);
            } else {
                console.log(stack.pop().value);
                h = c;
            }
        }
    }
}

let head = new Node(1);
head.left = new Node(2);
head.right = new Node(3);
head.left.left = new Node(4);
head.left.right = new Node(5);
head.right.left = new Node(6);
head.right.right = new Node(7);

pre(head);
inorder(head);
post(head);
post2(head);
