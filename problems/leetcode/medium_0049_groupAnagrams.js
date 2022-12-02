// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let ans = []
  if (!strs || strs.length == 0) return ans

  let classifyMap = new Map() // key: 字母序的 str, value: 该 key 代表的集合在结果数组中的 index
  for (let str of strs) {
    let ordered = str.split('').sort().join('')
    if (classifyMap.has(ordered)) {
      ans[classifyMap.get(ordered)].push(str)
    } else {
      classifyMap.set(ordered, ans.length)
      ans.push([str])
    }
  }

  return ans
}

const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
const strs2 = ['']
const strs3 = ['a']
console.log(groupAnagrams(strs1))
console.log(groupAnagrams(strs2))
console.log(groupAnagrams(strs3))
