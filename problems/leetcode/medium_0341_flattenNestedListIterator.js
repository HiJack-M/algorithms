// 341. Flatten Nested List Iterator

// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

// Implement the NestedIterator class:

// NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
// int next() Returns the next integer in the nested list.
// boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
// Your code will be tested with the following pseudocode:

// initialize iterator with nestedList
// res = []
// while iterator.hasNext()
//     append iterator.next() to the end of res
// return res

// If res matches the expected flattened list, then your code will be judged as correct.

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  if (!nestedList || nestedList.length == 0) return

  this.stack = nestedList
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  while (this.stack.length !== 0) {
    if (this.stack[0].isInteger()) {
      return true
    } else {
      let cur = this.stack.shift().getList()
      this.stack.unshift(...cur) // ！！！不能直接把 arr 塞回去，因为不是 NestedInteger[] 类型
    }
  }
}

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.stack.shift().getInteger()
}

// 下面是深度遍历法

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator_1 = function (nestedList) {
  if (!nestedList || nestedList.length == 0) return

  this.vals = []

  const dfs = (nestedList) => {
    for (let nest of nestedList) {
      if (nest.isInteger()) {
        this.vals.push(nest.getInteger())
      } else {
        dfs(nest.getList())
      }
    }
  }

  dfs(nestedList)
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator_1.prototype.hasNext = function () {
  return this.vals.length > 0
}

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator_1.prototype.next = function () {
  return this.vals.shift()
}
