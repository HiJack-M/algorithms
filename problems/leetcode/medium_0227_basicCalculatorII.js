// 227. Basic Calculator II

// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  if (!s) return 0

  let trimS = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      trimS += s[i]
    }
  }

  let numSlot = []
  let i = 0
  let num = 0
  let preSign = '+'

  // 总循环
  while (i <= trimS.length) {
    if (!isNaN(Number(trimS[i]))) {
      // 在这里进行字符串转数字
      num = num * 10 + trimS[i++].charCodeAt() - '0'.charCodeAt()
    }
    if (isNaN(Number(trimS[i])) || i == trimS.length) {
      // 碰到数字结尾
      switch (preSign) {
        case '+':
          numSlot.push(num)
          break
        case '-':
          numSlot.push(-num)
          break
        case '*':
          numSlot.push(numSlot.pop() * num)
          break
        case '/':
          numSlot.push(parseInt(numSlot.pop() / num))
          break
      }
      preSign = trimS[i++]
      num = 0
    }
  }

  let ans = 0
  while (numSlot.length > 0) {
    ans += numSlot.pop()
  }

  return ans
}

let s1 = '3+2*2'
console.log(calculate(s1))

let s2 = '3/2'
console.log(calculate(s2))

let s3 = ' 3+5 / 2 '
console.log(calculate(s3))

let s4 = '1-1+1'
console.log(calculate(s4))
let s5 = '14/3*2'
console.log(calculate(s5))
