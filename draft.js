// 139. Word Break

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function (s, wordDict) {
//   if (!s || !wordDict || wordDict.length == 0) return false
//   return process(s, wordDict, 0)
// }

// const process = (s, wordDict, index) => {
//   if (index == s.length) return true

//   for (let i = index; i < s.length; i++) {
//     let curWord = s.substring(index, i + 1)
//     if (wordDict.indexOf(curWord) != -1) {
//       let curAns = process(s, wordDict, i + 1)
//       if (curAns) return true
//     }
//   }
//   return false
// }

var wordBreakDp = function (s, wordDict) {
  if (!s || !wordDict || wordDict.length == 0) return false

  let N = s.length
  let Dp = new Array(N + 1).fill(false)

  Dp[N] = true

  for (let index = N - 1; index >= 0; index--) {
    for (let i = index; i < s.length; i++) {
      let curWord = s.substring(index, i + 1)
      if (wordDict.indexOf(curWord) != -1) {
        let curAns = Dp[i + 1]
        if (curAns) {
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
    this.nexts = []
  }
}

var wordBreak = function (s, wordDict) {
  if (!s || !wordDict || wordDict.length == 0) return false

  let root = new TrieNode()
  let origin = 'a'.charCodeAt()
  for (let i = 0; i < wordDict.length; i++) {
    let curWord = wordDict[i]
    let node = root
    let index
    for (let j = 0; j < curWord.length; j++) {
      index = curWord.charCodeAt(j) - origin
      if (node.nexts[index] == null) {
        node.nexts[index] = new TrieNode()
      }
      node = node.nexts[index]
    }
    node.end = true
  }

  let N = s.length
  let Dp = new Array(N + 1).fill(false)

  Dp[N] = true

  for (let index = N - 1; index >= 0; index--) {
    let node = root
    for (let i = index; i < s.length; i++) {
      let path = s.charCodeAt(i) - origin
      if (node.nexts[path] == null) {
        // 剪枝
        break
      }
      node = node.nexts[path]
      let curAns = node.end
      if (curAns && Dp[i + 1]) {
        Dp[index] = true
        break
      }
    }
  }

  return Dp[0]
}

// true
const s1 = 'leetcode'
const wordDict1 = ['leet', 'code']
console.log(wordBreak(s1, wordDict1))

// true
const s2 = 'applepenapple'
const wordDict2 = ['apple', 'pen']
console.log(wordBreak(s2, wordDict2))

// false
const s3 = 'catsandog'
const wordDict3 = ['cats', 'dog', 'sand', 'and', 'cat']
console.log(wordBreak(s3, wordDict3))

// true
const s4 = 'cars'
const wordDict4 = ['car', 'ca', 'rs']
console.log(wordBreak(s4, wordDict4))

// false
const s5 = 'ccbb'
const wordDict5 = ['bc', 'cb']
console.log(wordBreak(s5, wordDict5))

// true
const s6 = 'catsandogcat'
const wordDict6 = ['cats', 'dog', 'sand', 'and', 'cat', 'an']
console.log(wordBreak(s6, wordDict6))
