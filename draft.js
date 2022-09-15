// 给定一个字符串 str，给定一个字符串类型的数组 arr。
// arr 里的每一个字符串，代表一张贴纸，你可以把单个字符剪开使用，目的是拼出 str 来。
// 返回：需要至少多少张贴纸可以完成这个任务。
// 例子：str = "babac"，arr = {"ba","c","abcd”}
// 至少需要两张贴纸 "ba" 和 "abcd"，因为使用这两张贴纸，把每一个字符单独剪开，含有 2 个 a、2 个 b、1 个 c。是可以拼出 str 的。所以返回 2。

const minStickers = (arr, str) => {
	if (!arr || !str) return 0

	// arr 词频表
	const arrCounts = new Array(arr.length)
	for (let i = 0; i < arr.length; i++) {
		arrCounts[i] = new Array(26)
		arrCounts[i].fill(0)
		for (let e in arr[i]) {
			arrCounts[i][arr[i][e].charCodeAt() - 97]++
		}
	}

	// dummy 缓存
	let dpMap = new Map()

	return process1(arrCounts, str, dpMap)
}

// arrCounts: 原始贴纸词频数组
// rest: 要拼的剩余目标的词频数组
const process1 = (arrCounts, rest, dpMap) => {
	if (dpMap.has(rest)) return dpMap.get(rest)

	// 全都已经搞定
	if (rest == '') return 0

	// rest 词频表
	const restStrCount = new Array(26)
	restStrCount.fill(0)
	for (let i in rest) {
		restStrCount[rest[i].charCodeAt() - 97]++
	}

	// 每一轮剩下的目标都拿所有贴纸过一遍
	let ans = Infinity
	for (let i = 0; i < arrCounts.length; i++) {
		// 若某张贴纸不包含剩下目标的第一个字母，那就跳过【防止死循环】（反正顺序不重要）
		let containFirst = false
		for (let e in restStrCount) {
			if (restStrCount[e] != 0 && arrCounts[i][e] != 0) {
				containFirst = true
				break
			}
		}
		if (!containFirst) continue

		let restOfRest = new Array(26)
		for (let j = 0; j < 26; j++ ) {
			restOfRest[j] = Math.max(0, restStrCount[j] - arrCounts[i][j])
		}

		// 重组 rest
		let restStr = ''
		for (let j = 0; j < 26; j++) {
			for (let k = 0; k < restOfRest[j]; k++) {
				restStr += String.fromCharCode(j + 97)
			}
		}

		let next = process1(arrCounts, restStr, dpMap)
		ans = Math.min(ans, next + 1)
	}
	dpMap.set(rest, ans == Infinity ? -1 : ans)
	return ans == Infinity ? -1 : ans
}

console.log(minStickers(['aaa', 'bbb', 'abc'], 'aaaaaaabbc'))

const arr1 = ['ba', 'c', 'abcd'];
let str1 = 'babac';
console.log(minStickers(arr1, str1));

const arr2 = ['ba', 'c', 'abcd'];
let str2 = 'xxxx';
console.log(minStickers(arr2, str2));
