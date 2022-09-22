// Given a string s, return the longest palindromic substring in s.
// A string is called a palindrome string if the reverse of that string is the same as the original string.

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
	let ans = ''
    if (!s) return ans

	ans = s[0]
	let N = s.length
	let Dp = new Array(N)
	for (let i = 0; i < N; i++) {
		Dp[i] = new Array(N)
		Dp[i].fill(false)
		Dp[i][i] = true // 单个字符为回文
	}

	// Dp 表的左下半部分没用
	for (let i = 1; i < N; i++) {
		let a = 0
		let b = i
		while (a < N && b < N) {
			if (s[a] == s[b]) {
				Dp[a][b] = Dp[Math.min(a + 1, b - 1)][b - 1] ? true : false
				if (Dp[a][b] && b - a + 1 > ans.length) {
					ans = s.substring(a, b + 1)
				}
			} else {
				Dp[a][b] = false
			}
			a++
			b++
		}
	}
	return ans
};

console.log(longestPalindrome('aacabdkacaa'))
console.log(longestPalindrome('bbbb'))
