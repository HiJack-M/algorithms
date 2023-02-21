// 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

import swap from '../../methods/tool_functions/swap.js'

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if (!s || s.length < 2) return

  let l = 0
  let r = s.length - 1

  while (l < r) {
    swap(s, l++, r--)
  }
}

const s1 = ['h', 'e', 'l', 'l', 'o']
const s2 = ['H', 'a', 'n', 'n', 'a', 'h']

console.log(reverseString(s1))
console.log(reverseString(s2))
