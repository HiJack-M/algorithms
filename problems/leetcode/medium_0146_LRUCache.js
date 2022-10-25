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
var LRUCacheUseArr = function (capacity) {
  this.capacity = capacity
  this.usedRecord = []
  this.cache = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCacheUseArr.prototype.get = function (key) {
  let index = this.usedRecord.indexOf(key)
  if (index == -1) {
    this.usedRecord.push(key) // 最新使用的放最后面
    return -1
  } else {
    this.usedRecord.splice(index, 1)
    this.usedRecord.push(key) // 最新使用的放最后面

    if (this.cache.has(key)) {
      return this.cache.get(key)
    } else {
      return -1
    }
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCacheUseArr.prototype.put = function (key, value) {
  let index = this.usedRecord.indexOf(key)
  if (index != -1) {
    this.usedRecord.splice(index, 1)
  }
  this.usedRecord.push(key) // 最新使用的放最后面

  this.cache.set(key, value)

  if (this.cache.size > this.capacity) {
    let tobeDelete
    while (!this.cache.has(tobeDelete) && this.usedRecord.length > 0) {
      tobeDelete = this.usedRecord.shift()
    }
    this.cache.delete(tobeDelete)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/** 借助 JS 的 Map 特性 */
/**
 * @param {number} capacity
 */
var LRUCacheUseMap = function (capacity) {
  this.limit = capacity
  this.cache = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCacheUseMap.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1

  const val = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, val)
  return val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCacheUseMap.prototype.put = function (key, value) {
  if (this.cache.has(key)) this.cache.delete(key)
  else if (this.cache.size >= this.limit) {
    /*  注意这里 keys() 返回一个 MapIterator 
    其中 next() 方法 调用第一次时返回的 value 
    就是 cache 的第一对键值对的 key
    */
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/** ⚠️ LRU 内存替换算法！！！ */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.keyNodeMap = new Map()
  this.nodeList = new DoubleLinkedList()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.keyNodeMap.has(key)) return -1

  let res = this.keyNodeMap.get(key)
  this.nodeList.moveNodeToTail(res)
  return res.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.keyNodeMap.has(key)) {
    let node = this.keyNodeMap.get(key)
    node.value = value
    this.nodeList.moveNodeToTail(node)
  } else {
    let newNode = new Node(key, value)
    this.keyNodeMap.set(key, newNode)
    this.nodeList.addNode(newNode)

    if (this.keyNodeMap.size > this.capacity) {
      let node = this.nodeList.removeHead()
      this.keyNodeMap.delete(node.key)
    }
  }
}

class Node {
  constructor(key, value, prev, next) {
    this.key = key
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addNode = (newNode) => {
    if (newNode == null) return
    if (this.head == null) {
      // 链表为空
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
  }

  moveNodeToTail = (node) => {
    // 保证 node 一定存在于链表中
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
    node.next = null
    this.tail = node
  }

  removeHead = () => {
    // 删除最远古节点，并返回
    if (this.head == null) return null
    let res = this.head
    if (this.head == this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = res.next
      res.next = null
      this.head.prev = null
    }
    return res
  }
}
