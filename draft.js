/* 规定 1 和 A 对应、2 和 B 对应、3 和 C 对应…
 * 那么一个数字字符串比如 "111” 就可以转化为: "AAA"、"KA" 和 ”AK"
 * 给定一个只有数字字符组成的字符串 str，返回有多少种转化结果 */

const convertNumberStrToLetterStr = (str) => {
	if (!/^[0-9]*$/.test(parseInt(str))) return 0
	return process1(str, 0)
}

const process1 = (str, i) => {
	if (i == str.length) return 1

	if (str[i] == '0') return 0
	if (str[i] == '1') {
		let res = process1(str, i + 1)
		if (i < str.length - 1) {
			res += process1(str, i + 2)
		}
		return res
	}
	if (str[i] == '2') {
		let res = process1(str, i + 1)
		if (i < str.length - 1 && str[i + 1] >= '0' && str[i + 1] <= '6') {
			res += process1(str, i + 2)
		}
		return res
	}
	return process1(str, i + 1)
}

console.log(convertNumberStrToLetterStr('1244253457'))

const convertNumberToLetterDP = (str) => {
	if (!/^[0-9]*$/.test(parseInt(str))) return 0
	let N = str.length
	let DP = new Array(N + 1)
	DP[N] = 1
	for (let i = N - 1; i >= 0; i--) {
		let res = 0
		if (str[i] == '1') {
			res = res + DP[i + 1]
			if (i < N - 1) {
				res += DP[i + 2]
			}
		} else if (str[i] == '2') {
			res += DP[i + 1]
			if (i < N - 1 && str[i + 1] >= '0' && str[i + 1] <= '6') {
				res += DP[i + 2]
			}
		} else if (str[i] != '0') {
			res += DP[i + 1]
		}
		DP[i] = res
	}
	return DP[0]
}

console.log(convertNumberToLetterDP('1244253457'))
