// 155. Min Stack

var MinStack = function () {
  this.stack = []
  this.minStack = []
  this.size = 0
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  let min = this.size > 0 ? Math.min(this.minStack[this.size - 1], val) : val
  this.minStack.push(min)
  this.size++
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.size > 0) {
    this.stack.pop()
    this.minStack.pop()
    this.size--
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.size - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  console.log(this.minStack)
  return this.minStack[this.size - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const myStack = new MinStack()
myStack.push(-2)
myStack.push(0)
myStack.push(-3)
console.log(myStack.getMin()) //   --> 返回 -3.
myStack.pop()
console.log(myStack.top()) //     --> 返回 0.
console.log(myStack.getMin()) //  --> 返回 -2.
