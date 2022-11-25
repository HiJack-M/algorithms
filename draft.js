/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let point = 0
  let sum = 0
  while (point < s.length) {
    if (point < s.length - 1 && romanObj[s[point]] < romanObj[s[point + 1]]) {
      sum -= romanObj[s[point++]]
    } else {
      sum += romanObj[s[point++]]
    }
  }

  return sum
}

console.log(romanToInt('MCMXCIV'))
