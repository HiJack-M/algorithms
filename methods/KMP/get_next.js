// 获取子串的 next 数组
// s: 子串 string
const get_next = (s) => {
  let i = 1, j = 0
  let next = new Array(s.length)
  next[0] = 0
  while (i < s.length) {
    if (j == 0 || s[i - 1] == s[j - 1]) {
      // s[i - 1] 表示后缀的单个字符（i 位置之前的串中）
      // s[j - 1] 表示前缀的单个字符
      ++i
      ++j
      next[i - 1] = j
    } else {
      j = next[j - 1] // 若字符不同，则 j 值回溯
    }
  }
  return next
}

const s1 = 'abcabx'
const s2 = 'ababaaaba'
const s3 = 'aaaaaaaab'

console.log(get_next(s1))
console.log(get_next(s2))
console.log(get_next(s3))
