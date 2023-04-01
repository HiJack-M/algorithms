// 394. Decode String

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (!s) return null

  return process(s, 0).res
}

// function: get the result of times * inner string
// return: res, endIndex
const process = (s, index) => {
  let res = ''
  let times = 0
  while (index < s.length && s[index] !== ']') {
    if (/[a-zA-Z]/.test(s[index])) {
      res += s[index++]
    } else if (/[0-9]/.test(s[index])) {
      times = times * 10 + parseInt(s[index++])
    } else if (s[index] == '[') {
      let inner = process(s, index + 1)
      res += timesString(inner.res, times)
      index = inner.endIndex + 1
      times = 0
    }
  }

  return { res, endIndex: index }
}

const timesString = (str, times) => {
  let res = ''
  while (times > 0) {
    res += str
    times--
  }
  return res
}

const s1 = '3[a]2[bc]'
console.log(decodeString(s1))

const s2 = '3[a2[c]]'
console.log(decodeString(s2))

const s3 = '2[abc]3[cd]ef'
console.log(decodeString(s3))
