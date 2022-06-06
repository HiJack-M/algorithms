// 实现 strStr() 函数。

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack == '') {
    if (needle == '') return 0
    else return -1
  }
  const hh = haystack.length
  const nh = needle.length
  if (hh < nh) return -1

  let needleI = 0 // 每次对比 needle 的内部循环指针
  for (let i = 0; i + nh <= hh; i++) {
    needleI = 0
    while (needleI < nh) {
      if (haystack[i + needleI] == needle[needleI]) {
        if (needleI == nh - 1) {
          return i
        } else {
          needleI++
        }
      } else break
    }
  }
  return -1
};

const haystack1 = "hello", needle1 = "ll"
console.log(strStr(haystack1, needle1))

const hay2 = 'aaaaa', nee2 = 'bba'
console.log(strStr(hay2, nee2))

// KMP

var strStrKMP = function(haystack, needle) {
  if (haystack == '') {
  if (needle == '') return 0
    else return -1
  }

  const getNextArray = (match) => {
    if (match.length == 1) return [-1]

    const next = new Array(match.length)
    next[0] = -1
    next[1] = 0
    let i = 2
    let cn = 0
    while (i < match.length) {
        if (match[i - 1] == match[cn]) {
        next[i] = cn + 1
        cn++
        i++
        } else if (cn > 0) {
        cn = next[cn]
        } else {
        next[i] = 0
        i++
        }
    }
    return next
  }

    let x = 0
  let y = 0
  const next = getNextArray(needle)
  while (x < haystack.length && y < needle.length) {
    if (haystack[x] == needle[y]) {
      x++
      y++
    } else if (y > 0) {
      y = next[y]
    } else {
      x++
    }
  }

  return y == needle.length ? x - y : -1
};

console.log(strStrKMP(haystack1, needle1))
console.log(strStrKMP(hay2, nee2))
