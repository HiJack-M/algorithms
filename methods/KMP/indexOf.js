const indexOf = (str, match) => {
  if (!str || !match || str.length < match.length) {
    return -1
  }
  let x = 0 // str 中当前比对到的位置
  let y = 0 // match 中当前比对到的位置
  const next = getNextArray(match) // match 中 i 之前的字符串最大相等前后缀
  while (x < str.length && y < match.length) {
    if (str[x] == match[y]) {
      x++
      y++
    } else if (y == 0) {
      x++
    } else {
      y = next[y]
    }
  }
  // y 没有越界，没匹配完，返回 -1
  // y 越界了，匹配完了，找合适的匹配起始点
  return y == match.length ? x - y : -1
}

// next[] 中每个数的含义：
// 1. match 中该字符之前的子串的最长相等前缀和后缀
// 2. 若该字符匹配失败，可回溯的位置
const getNextArray = (match) => {
  if (match.length == 1) return [-1]
  let next = new Array(match.length)
  next[0] = -1
  next[1] = 0
  let i = 2
  let cn = 0
  while (i < match.length) {
    if (match[i - 1] == match[cn]) {
      next[i] = cn + 1
      i++
      cn++
      // 三句合为一句 next[i++] = ++cn
    } else if (cn > 0) {
      cn = next[cn]
    } else {
      next[i] = 0
      i++
    }
  }
  return next
}

// cn 的含义：
// 1. i-1 位置之前，最长相等前后缀的长度
// 也代表当前是哪个字符在跟 i-1 字符比较

const str1 = 'asdfghjkl'
const match1 = 'fgh'

console.log(indexOf(str1, match1))
