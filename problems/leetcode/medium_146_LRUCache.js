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
  this.capacity = capacity
  this.usedRecord = []
  this.cache = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
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
LRUCache.prototype.put = function (key, value) {
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
