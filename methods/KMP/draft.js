const get_next = (s) => {
  let i = 1, j = 0
  const next = new Array(s.length)
  next[0] = 0
  while (i < s.length) {
    if (j == 0 || s[i - 1] == s[j - 1]) {
      ++i
      ++j
      next[i - 1] = j
    } else {
      j = next[j - 1]
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
