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
  let path = ''
  if (!s) return path

  return process(s, 0).str
}

// 返回 { str: 该层级的子串, end: 该层级的结束 index }
const process = (s, index) => {
  let path = ''
  let times = 0
  while (index < s.length && s[index] != ']') {
    if (/[a-zA-Z]/.test(s[index])) {
      path += s[index++]
    } else if (/[0-9]/.test(s[index])) {
      times = times * 10 + +s[index++]
    } else {
      let next = process(s, index + 1)
      path += timesSub(times, next.str)
      times = 0
      index = next.end + 1
    }
  }

  return { str: path, end: index }
}

const timesSub = (times, sub) => {
  let str = ''
  while (times > 0) {
    str += sub
    times--
  }

  return str
}

let s1 = '3[a]2[bc]'
let s2 = '3[a2[c]]'
let s3 = '2[abc]3[cd]ef'

console.log(decodeString(s1))
console.log(decodeString(s2))
console.log(decodeString(s3))
