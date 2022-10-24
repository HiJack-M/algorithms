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
