// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (!s || !t || s.length != t.length) return false

  let map = {}

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1
    } else {
      map[s[i]] += 1
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) return false
    map[t[i]] -= 1
    if (map[t[i]] < 0) return false
  }

  for (let i in map) {
    if (map[i] != 0) return false
  }

  return true
}

console.log(isAnagram('anagram', 'nagaram'))

var isAnagramBak = function (s, t) {
  if (!s || !t || s.length != t.length) return false

  let sPro = [...s].sort()
  let tPro = [...t].sort()

  for (let i = 0; i < s.length; i++) {
    if (sPro[i] != tPro[i]) return false
  }

  return true
}
