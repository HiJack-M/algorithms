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

// const match1 = 'abcabsabc'
// console.log(getNextArray(match1))

const getIndexOf = (str, match) => {
  if (!str || !match) return -1
  let x = 0
  let y = 0
  const next = getNextArray(match)
  while (x < str.length && y < match.length) {
    if (str[x] == match[y]) {
      x++
      y++
    } else if (y > 0) {
      y = next[y]
    } else {
      x++
    }
  }

  return y == match.length ? x - y : -1
}

const str1 = 'asdfghjkl'
const match1 = 'fgh'

console.log(getIndexOf(str1, match1))
