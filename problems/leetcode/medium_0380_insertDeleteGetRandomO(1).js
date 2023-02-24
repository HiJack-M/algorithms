// 380. Insert Delete GetRandom O(1)

// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

// You must implement the functions of the class such that each function works in average O(1) time complexity.

var RandomizedSet = function () {
  this.map = new Map()
  this.arr = []
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false

  this.map.set(val, this.arr.length)
  this.arr.push(val)

  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false

  // 在 remove 的时候，用 list 末尾的那个元素替换移除的元素

  let indexInArr = this.map.get(val)
  let last = this.arr[this.arr.length - 1]
  this.arr[indexInArr] = last

  this.map.set(last, indexInArr)
  this.arr.pop()
  this.map.delete(val)

  return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.arr.length)
  return this.arr[randomIndex]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
