// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!haystack || !needle || haystack.length < needle.length) return -1

  let next = getNextArray(needle)
  let x = 0
  let y = 0

  while (x < haystack.length && y < needle.length) {
    if (haystack[x] == needle[y]) {
      x++
      y++
    } else if (y == 0) {
      x++
    } else {
      y = next[y]
    }
  }

  if (y >= needle.length) {
    return x - y
  } else {
    return -1
  }
}

const getNextArray = (str) => {
  if (str.length == 1) return [-1]
  let next = [-1, 0]
  let i = 2
  let cn = 0 // 对比的下标
  while (i < str.length) {
    if (str[i - 1] == str[cn]) {
      next[i] = cn + 1
      i++
      cn++
    } else if (cn == 0) {
      next[i] = 0
      i++
    } else {
      cn = next[cn]
    }
  }

  return next
}

let haystack1 = 'sadbutsad'
let needle1 = 'sad'
let needle2 = 'but'
console.log(strStr(haystack1, needle1))
console.log(strStr(haystack1, needle2))

// let match1 = 'abaabas'
// console.log(getNextArray(match1))
