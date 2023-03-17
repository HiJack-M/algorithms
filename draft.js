// 146. LRU Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

// int get(int key) Return the value of the key if the key exists, otherwise return -1.

// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

// The functions get and put must each run in O(1) average time complexity.

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.limit = capacity
  this.keyNodeMap = new Map()
  this.linkedList = new DoubleLinkedList()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.keyNodeMap.has(key)) return -1
  let node = this.keyNodeMap.get(key)
  this.linkedList.moveNodeToTail(node)
  return node.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.keyNodeMap.has(key)) {
    let node = new Node(key, value)
    this.keyNodeMap.set(key, node)
    this.linkedList.addNode(node)
    if (this.keyNodeMap.size > this.limit) {
      let delNode = this.linkedList.removeHead()
      this.keyNodeMap.delete(delNode.key)
    }
  } else {
    let node = this.keyNodeMap.get(key)
    node.value = value
    this.linkedList.moveNodeToTail(node)
  }
}

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addNode(node) {
    if (node == null) return
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
  }

  removeHead() {
    if (this.head == null) return null
    let node = this.head
    if (this.head == this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      node.next = null
    }
    return node
  }

  moveNodeToTail(node) {
    if (node == this.tail) return
    if (node == this.head) {
      this.head = node.next
      this.head.prev = null
    } else {
      node.next.prev = node.prev
      node.prev.next = node.next
    }
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
    node.next = null
  }
}
