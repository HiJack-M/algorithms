// Given a string s, return the longest palindromic substring in s.
// A string is called a palindrome string if the reverse of that string is the same as the original string.


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
	let ans = ''
    if (!s) return ans
	if (s.length == 1) return s

	for (let i = 0; i < s.length - 1; i++) {
		let cur
		if (s[i] != s[i + 1]) {
			cur = verifyTwoSides(s, i, i)
		} else {
			let cur1 = verifyTwoSides(s, i, i)
			let cur2 = verifyTwoSides(s, i, i + 1)
			cur = cur1[1] - cur1[0] > cur2[1] - cur2[0] ? cur1 : cur2
		}
		if (cur[1] - cur[0] + 1 > ans.length) {
			ans = s.substring(cur[0], cur[1] + 1)
		}
	}
	return ans
};

// s 数组中，左边起点 i，右边起点 ri, 检查从两边扩散有多少字母相同
// 返回相同的 index 数组
const verifyTwoSides = (s, i, ri) => {
	for (let j = 1; i - j >=0 && ri + j < s.length; j++) {
		if (s[i - j] != s[ri + j]) return [i - j + 1, ri + j - 1]
	}
	let leftLen = i - 0
	let rightLen = Math.abs(ri - s.length + 1)
	if (leftLen > rightLen) return [i - rightLen, ri + rightLen]
	else return [i - leftLen, ri + leftLen]
}

console.log(longestPalindrome('aacabdkacaa'))


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindromeDp = function(s) {
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
