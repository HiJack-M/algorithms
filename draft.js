// 38. Count and Say

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n < 1) return ''
  if (n === 1) return '1'

  let string = countAndSay(n - 1)
  let result = ''

  let i = 1
  let current = string[0]
  let count = 1
  while (i < string.length) {
    if (string[i] !== current) {
      result += count + current
      current = string[i]
      count = 1
    } else {
      count++
    }
    i++
  }

  return result + count + current
}

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
