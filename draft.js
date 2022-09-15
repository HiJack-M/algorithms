const longestCommonSubsequenceLength = (str1, str2) => {
	if (!str1 || !str2) return 0

	const Dp = new Array(str1.length)
	for (let i = 0; i < Dp.length; i++) {
		Dp[i] = new Array(str2.length)
		Dp[i].fill(0)
	}

	Dp[0][0] = str1[0] == str2[0] ? 1 : 0
	for (let i = 1; i < str1.length; i++) {
		Dp[i][0] = Math.max(Dp[i - 1][0], str1[i] == str2[0] ? 1 : 0)
	}
	for (let j = 1; j < str2.length; j++) {
		Dp[0][j] = Math.max(Dp[0][j - 1], str1[0] == str2[j] ? 1 : 0)
	}
	for (let i = 1; i < str1.length; i++) {
		for (let j = 1; j < str2.length; j++) {
			Dp[i][j] = Math.max(Dp[i - 1][j], Dp[i][j - 1])
			if (str1[i] == str2[j]) {
				Dp[i][j] = Math.max(Dp[i][j], Dp[i - 1][j - 1] + 1)
			}
		}
	}

	return Dp[str1.length - 1][str2.length - 1]
}

let str1 = 'ab1cabc3d';
let str2 = '1abdddddc';
console.log(longestCommonSubsequenceLength(str1, str2));

const longestCommonSubArrayLength = (arr1, arr2) => {
	if (!arr1 || !arr2) return 0

	const Dp = new Array(arr1.length)
	for (let i = 0; i < arr1.length; i++) {
		Dp[i] = new Array(arr2.length)
		Dp[i].fill(0)
	}

	let max = 0
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] == arr2[j]) {
				Dp[i][j] =  Dp[i - 1] && Dp[i - 1][j - 1] ? Dp[i - 1][j - 1] + 1 : 1
			} else {
				Dp[i][j] = 0
			}
			max = Math.max(max, Dp[i][j])
		}
	}
	console.log(Dp)
	return max
}

let arr1 = [1, 2, 3, 'd']
let arr2 = [2, 3, 'd', 1, 2]
console.log(longestCommonSubArrayLength(arr1, arr2))
