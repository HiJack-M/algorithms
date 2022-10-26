// 139. Word Break

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

/** Brute Force 版本，Time Limited Exceed */
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

var wordBreak = function (s, wordDict) {
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

const s1 = 'leetcode'
const wordDict1 = ['leet', 'code']
console.log(wordBreak(s1, wordDict1))

const s2 = 'applepenapple'
const wordDict2 = ['apple', 'pen']
console.log(wordBreak(s2, wordDict2))

const s3 = 'catsandog'
const wordDict3 = ['cats', 'dog', 'sand', 'and', 'cat']
console.log(wordBreak(s3, wordDict3))

const s4 = 'cars'
const wordDict4 = ['car', 'ca', 'rs']
console.log(wordBreak(s4, wordDict4))

const s5 = 'ccbb'
const wordDict5 = ['bc', 'cb']
console.log(wordBreak(s5, wordDict5))

const s6 = 'catsandogcat'
const wordDict6 = ['cats', 'dog', 'sand', 'and', 'cat', 'an']
console.log(wordBreak(s6, wordDict6))
