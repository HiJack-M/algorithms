// 395. Longest Substring with At Least K Repeating Characters

// Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (k == 1) return s.length

  let ans = 0
  let N = s.length

  // 统计 t 个字符种类范围内
  for (let t = 1; t <= 26; t++) {
    let l = 0
    let r = 0
    const cnt = new Array(26).fill(0) // 当前窗口内字符频次统计

    let total = 0 // 当前范围内的字符种类
    let less = 0 // 频次小于 k 的字符种类

    // 窗口右指针向右滑动
    while (r < N) {
      let curRightCode = s.charCodeAt(r) - 'a'.charCodeAt()
      cnt[curRightCode]++

      if (cnt[curRightCode] == 1) {
        total++
        less++
      } else if (cnt[curRightCode] == k) {
        less--
      }

      // 当前字符种类大于给定范围时，结算，窗口左指针向右滑动
      while (total > t) {
        let curLeftCode = s.charCodeAt(l) - 'a'.charCodeAt()
        cnt[curLeftCode]--

        if (cnt[curLeftCode] == k - 1) {
          less++
        } else if (cnt[curLeftCode] === 0) {
          total--
          less--
        }
        l++
      }

      // 若当前范围的字符频次都不小于 k，更新答案
      if (less == 0) {
        ans = Math.max(ans, r - l + 1)
      }

      r++
    }
  }

  return ans
}

console.log(longestSubstring('a', 1))

let s1 = 'aaabb'
let k1 = 3
console.log(longestSubstring(s1, k1))

let s2 = 'ababbc'
let k2 = 2
console.log(longestSubstring(s2, k2))

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 对于字符串 s，如果存在某个字符 ch，它的出现次数大于 0 且小于 k，则任何包含 ch 的子串都不可能满足要求。也就是说，我们将字符串按照 ch 切分成若干段，则满足要求的最长子串一定出现在某个被切分的段内，而不能跨越一个或多个段。
 */
var longestSubstring_divideConquer = function (s, k) {
  if (!s || s.length < k) return 0

  let N = s.length
  return dfs(s, 0, N - 1, k)
}

// return longest substring length
const dfs = (s, l, r, k) => {
  let cnt = new Array(26).fill(0)
  for (let i = l; i <= r; i++) {
    let index = s.charCodeAt(i) - 'a'.charCodeAt()
    cnt[index]++
  }

  let splitChar = null
  for (let i = 0; i < cnt.length; i++) {
    // 一次只排除一个字符
    if (cnt[i] > 0 && cnt[i] < k) {
      splitChar = String.fromCharCode(i + 'a'.charCodeAt())
      break
    }
  }
  // 频次都大于 k，没有被分治
  if (splitChar == null) return r - l + 1

  let i = l
  let ans = 0
  while (i <= r) {
    // 先去掉重复的 splitChar 开头
    while (i <= r && s[i] == splitChar) {
      i++
    }
    if (i > r) break

    // 对于每一段不包括 splitChar 的分段
    let start = i
    while (i <= r && s[i] != splitChar) {
      i++
    }
    const curLen = dfs(s, start, i - 1, k)
    ans = Math.max(curLen, ans)
  }

  return ans
}

// 时间复杂度：O(N⋅∣Σ∣)，其中 N 为字符串的长度，Σ 为字符集，本题中字符串仅包含小写字母，因此 ∣Σ∣=26。由于每次递归调用都会完全去除某个字符，因此递归深度最多为 ∣Σ∣。

// 空间复杂度：O(∣Σ∣^2)。递归的深度为 O(∣Σ∣)，每层递归需要开辟 O(∣Σ∣) 的额外空间。
