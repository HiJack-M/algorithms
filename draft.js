// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ans = []
  if (!n) return ans
  process(n, n, '', ans)
  return ans
}

const process = (restL, restR, path, ans) => {
  if (restL == 0 && restR == 0) {
    ans.push(path)
    return
  }

  if (restL > 0) {
    process(restL - 1, restR, path + '(', ans)
  }
  if (restR > restL) {
    process(restL, restR - 1, path + ')', ans)
  }
}
