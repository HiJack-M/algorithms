// 139. Word Break

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreakBruteForce = function (s, wordDict) {
  if (!s || !wordDict || wordDict.length === 0) return false

  return process(s, wordDict, 0)
}

const process = (s, wordDict, index) => {
  // base case
  if (index === s.length) return true

  for (let i = index; i < s.length; i++) {
    let prefix = s.substring(index, i + 1)
    if (wordDict.indexOf(prefix) !== -1) {
      // 单词表中存在 s[index...i] 前缀，可用，index 往后移
      let ans = process(s, wordDict, i + 1)
      if (ans) return true
    }
  }
  return false
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreakDp = function (s, wordDict) {
  if (!s || !wordDict || wordDict.length === 0) return false

  let N = s.length
  let Dp = new Array(N + 1).fill(false)
  Dp[N] = true

  for (let index = N - 1; index >= 0; index--) {
    for (let i = index; i < s.length; i++) {
      let prefix = s.substring(index, i + 1)
      if (wordDict.indexOf(prefix) != -1) {
        // 单词表中存在 s[index...i] 前缀，可用，index 往后移
        let ans = Dp[i + 1]
        if (ans) {
          Dp[index] = true
          break
        }
      }
    }
  }

  return Dp[0]
}

class TrieNode {
  constructor(end) {
    this.end = end || false
    this.next = []
  }
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  if (!s || !wordDict || wordDict.length === 0) return false

  let root = new TrieNode()
  let origin = 'a'.charCodeAt()
  for (let i = 0; i < wordDict.length; i++) {
    let node = root
    let curWord = wordDict[i]
    for (let j = 0; j < curWord.length; j++) {
      let curPath = curWord.charCodeAt(j) - origin
      if (!node.next[curPath]) {
        node.next[curPath] = new TrieNode(false)
      }
      node = node.next[curPath]
    }
    node.end = true
  }

  let N = s.length
  let Dp = new Array(N + 1).fill(false)
  Dp[N] = true

  for (let index = N - 1; index >= 0; index--) {
    let node = root
    for (let i = index; i < s.length; i++) {
      let prefix = s.charCodeAt(i) - origin
      if (!node.next[prefix]) {
        break
      }

      node = node.next[prefix]
      let curAns = node.end
      if (curAns && Dp[i + 1]) {
        Dp[index] = true
        break
      }
    }
  }

  return Dp[0]
}

let s1 = 'leetcode'
const wordDict1 = ['leet', 'code']
console.log(wordBreak(s1, wordDict1))

let s2 = 'applepenapple'
const wordDict2 = ['apple', 'pen']
console.log(wordBreak(s2, wordDict2))

let s3 = 'catsandog'
const wordDict3 = ['cats', 'dog', 'sand', 'and', 'cat']
console.log(wordBreak(s3, wordDict3))
