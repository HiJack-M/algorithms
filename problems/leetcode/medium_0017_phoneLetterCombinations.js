// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let ans = []
  if (!digits) return ans

  process(digits, 0, '', ans)
  return ans
}

const process = (str, index, path, ans) => {
  if (index == str.length) {
    ans.push(path)
    return
  }
  let charNum = parseInt(str[index])
  let baseRange = 3
  let startCode = (charNum - 2) * baseRange + 97 // 从哪个
  startCode += charNum > 7 ? 1 : 0 // 7 对应了四个字母
  let range = charNum == 7 || charNum == 9 ? 4 : 3

  for (let i = 0; i < range; i++) {
    let cur = path + String.fromCharCode(startCode + i)
    process(str, index + 1, cur, ans)
  }
}

console.log(letterCombinations('23'))
