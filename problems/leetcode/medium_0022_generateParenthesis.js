// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n == 0) return []
  let ans = new Set()
  process(n, 0, '', 0, ans)
  return [...ans]
}

const process = (n, index, path, unUseRight, ans) => {
  if (index == n) {
    while (unUseRight > 0) {
      path += ')'
      unUseRight--
    }
    ans.add(path)
    return
  }

  let curPath = path + '('
  let curUnUseRight = unUseRight + 1
  let usingRight = ''
  process(n, index + 1, curPath, curUnUseRight, ans)
  for (let i = 1; i <= curUnUseRight; i++) {
    usingRight += ')'
    process(n, index + 1, curPath + usingRight, curUnUseRight - i, ans)
  }
}

console.log(generateParenthesis(3))
