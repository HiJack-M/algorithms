// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
	if (!s) return 0
	const checkArr = []
	let max = 0
	for (let i = 0; i < s.length; i++) {
		let index = checkArr.indexOf(s[i])
		if (index == -1) {
			checkArr.push(s[i])
		} else {
			checkArr.splice(0, index + 1)
			checkArr.push(s[i])
		}
		max = Math.max(max, checkArr.length)
	}
	return max
};


console.log(lengthOfLongestSubstring('abcabcbb'))
