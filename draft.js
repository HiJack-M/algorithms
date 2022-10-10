// 22. Generate Parentheses

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ans = []
  if (n != 0) {
    process(n, n, '', ans)
  }
  return ans
}

const process = (restLeft, restRight, path, ans) => {
  if (restLeft == 0 && restRight == 0) {
    ans.push(path)
    return
  }

  if (restLeft > 0) {
    process(restLeft - 1, restRight, path + '(', ans)
  }
  if (restRight > restLeft) {
    process(restLeft, restRight - 1, path + ')', ans)
  }
}

console.log(generateParenthesis(3))
