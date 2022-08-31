// 规定 1 和 A 对应、2 和 B 对应、3 和 C 对应…

// 那么一个数字字符串比如 "111” 就可以转化为: "AAA"、"KA" 和 ”AK"

// 给定一个只有数字字符组成的字符串 str，返回有多少种转化结果

const convertNumberLetterToString = (letters) => {
	let res = 0
	if (letters) {
		res = process(letters, 0)
	}

	return res

	// if (!letters) return 0
	// return process(letters, 0)
}

const process = (str, i) => {
	if (i == str.length) {
		return 1
	}
	if (str[i] == '0') {
		return 0
	}
	if (str[i] == '1') {
		let res = process(str, i + 1)
		if (i + 1 < str.length) {
			res += process(str, i + 2)
		}
		return res
	}
	if (str[i] == '2') {
		let res = process(str, i + 1)
		if (i + 1 < str.length && str[i + 1] >= '0' && str[i + 1] <= '6') {
			res += process(str, i + 2)
		}
		return res
	}
	return process(str, i + 1)
}

console.log(convertNumberLetterToString('111'))
console.log(convertNumberLetterToString('462026125961'))
