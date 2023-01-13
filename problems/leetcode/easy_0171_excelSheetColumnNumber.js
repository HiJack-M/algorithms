// 171. Excel Sheet Column Number

// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  if (!columnTitle) return null

  let base = 64 // 'A'.charCodeAt() == 65，故拿 64 做基底
  let ans = 0
  let radix = 0

  while (radix <= columnTitle.length - 1) {
    let cur = (columnTitle.charCodeAt(columnTitle.length - 1 - radix) - base) * Math.pow(26, radix)
    ans += cur
    radix++
  }
  return ans
}

console.log(titleToNumber('A')) // 1
console.log(titleToNumber('AB')) // 28
console.log(titleToNumber('ZY')) // 701
