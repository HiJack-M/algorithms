// 150. Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (!tokens) return null

  let i = 0
  while (i < tokens.length) {
    if (Number.isInteger(+tokens[i])) {
      i++
    } else {
      let res
      switch (tokens[i]) {
        case '+': {
          res = +tokens[i - 2] + +tokens[i - 1]
          break
        }
        case '-': {
          res = +tokens[i - 2] - +tokens[i - 1]
          break
        }
        case '*': {
          res = +tokens[i - 2] * +tokens[i - 1]
          break
        }
        case '/': {
          res = parseInt(+tokens[i - 2] / +tokens[i - 1])
          break
        }
      }
      tokens.splice(i - 2, 3, res) // 把当前结果替换两个算数和符号
      i = i - 1 // 跳到当前结果的下一位置
    }
  }

  return tokens[0]
}

const tokens1 = ['2', '1', '+', '3', '*'] // 9
console.log(evalRPN(tokens1))

const tokens2 = ['4', '13', '5', '/', '+'] // 6
console.log(evalRPN(tokens2))

const tokens3 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'] // 22
console.log(evalRPN(tokens3))
