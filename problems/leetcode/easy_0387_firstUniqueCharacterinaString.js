// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (!s) return -1

  let alphabetVisited = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    let curCode = s.charCodeAt(i) - 'a'.charCodeAt()
    alphabetVisited[curCode] += 1
  }

  for (let i = 0; i < s.length; i++) {
    let curCode = s.charCodeAt(i) - 'a'.charCodeAt()
    if (alphabetVisited[curCode] == 1) return i
  }

  return -1
}

console.log(firstUniqChar('leetcode')) // 0
console.log(firstUniqChar('loveleetcode')) // 2
console.log(firstUniqChar('aabb')) // -1

var firstUniqChar_lastIndexOf = function (s) {
  if (!s) return -1

  let alphabetVisited = new Array(26).fill(false)

  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    let curCode = s.charCodeAt(i) - 'a'.charCodeAt()

    // 当前字母已被检查，没有 return 说明存在重复
    if (alphabetVisited[curCode]) continue

    // 当前字母未被检查
    // 若最后一个出现的位置就是当前位置，说明当前字母没有重复
    if (s.lastIndexOf(cur) === i) return i

    alphabetVisited[curCode] = true
  }

  return -1
}
