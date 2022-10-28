// 208. Implement Trie (Prefix Tree)

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// - Trie() Initializes the trie object.
// - void insert(String word) Inserts the string word into the trie.
// - boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// - boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

class TrieNode {
  constructor(end) {
    this.end = end || false
    this.nexts = []
  }
}

var Trie = function () {
  this.root = new TrieNode()
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (!word) return

  let node = this.root
  for (let i = 0; i < word.length; i++) {
    let path = word.charCodeAt(i) - 'a'.charCodeAt()
    if (!node.nexts[path]) {
      node.nexts[path] = new TrieNode()
    }
    node = node.nexts[path]
  }
  node.end = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (!word) return

  let node = this.root
  for (let i = 0; i < word.length; i++) {
    let path = word.charCodeAt(i) - 'a'.charCodeAt()
    if (!node.nexts[path]) return false
    else {
      node = node.nexts[path]
    }
  }
  return node.end
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (!prefix) return

  let node = this.root
  for (let i = 0; i < prefix.length; i++) {
    let path = prefix.charCodeAt(i) - 'a'.charCodeAt()
    if (!node.nexts[path]) return false
    else {
      node = node.nexts[path]
    }
  }
  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
