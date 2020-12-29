class TrieNode {
    constructor() {
        this.pass = 0;
        this.end = 0;
        this.nexts = [];
    }
}

class TrieTree {
    constructor() {
        this.root = new TrieNode();
    }

    isValid(str) {
        return /^[a-z]+$/i.test(str);
    }

    insert(str) {
        if (str === null) {
            return;
        }
        if (!this.isValid(str)) {
            throw Error('type error.');
        }
        let node = this.root;
        node.pass++;
        let index = 0;
        for (let i = 0; i < str.length; i++) {
            index = str.charCodeAt(i) - 'a'.charCodeAt();
            if (node.nexts[index] == null) {
                node.nexts[index] = new TrieNode();
            }
            node = node.nexts[index];
            node.pass++;
        }
        node.end++;
    }

    // word这个单词之前加入过几次
    search(str) {
        if (str === null) {
            return 0;
        }
        let node = this.root;
        let index = 0;
        for (let i = 0; i < str.length; i++) {
            index = str.charCodeAt(i) - 'a'.charCodeAt();
            if (node.nexts[index] == null) {
                return 0;
            }
            node = node.nexts[index];
        }
        return node.end;
    }

    delete(str) {
        if (str === null) {
            return;
        } 
        if (this.search(str) > 0) {
            let node = this.root;
            root.pass--;
            let index = 0;
            for (let i = 0; i < str.length; i++) {
                index = str.charCodeAt(i) - 'a'.charCodeAt();
                // 如果下一个字母的 pass 减完之后为 0，说明之后的都无用了
                if (--node.nexts[index].pass == 0) {
                    node.nexts[index] = null;
                    return;
                }
                node = node.nexts[index];
            }
            node.end--;
        }
    }

    // 所有加入的字符串中，有几个是以pre这个字符串作为前缀的
    prefixNumber(preStr) {
        if (preStr === null) {
            return 0;
        }
        let node = this.root;
        let index = 0;
        for (let i = 0; i < preStr.length; i++) {
            index = preStr.charCodeAt(i) - 'a'.charCodeAt();
            if (node.nexts[index] === null) {
                return 0;
            }
            node = node.nexts[index];
        }
        return node.pass;
    }
}

let myTree = new TrieTree();
myTree.insert('abc');
myTree.insert('abd');
myTree.insert('abcd');
console.log(myTree.search('abc'));
console.log(myTree.prefixNumber('ab'));
console.log(myTree.prefixNumber('abc'));
myTree.delete('abc');
/* console.log(myTree.search('abcd')); */
/* console.log(myTree.prefixNumber('abc')); */
