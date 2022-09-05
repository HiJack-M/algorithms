/* 给定两个长度都为N的数组 weights 和 values，
 * weights[i] 和 values[i] 分别代表 i 号物品的重量和价值。
 * 给定一个正数 bag，表示一个载重 bag 的袋子，你装的物品不能超过这个重量。
 * 返回你能装下最多的价值是多少? */

const getMaxValueRecursion = (weights, values, bag) => {
	if (!weights || !values || bag <= 0) return 0
	return processRecursion(weights, values, 0, bag)
}

const processRecursion = (w, v, i, rest) => {
	// base case
	if (rest <= 0) return 0
	if (i == w.length) return 0

	let no = processRecursion(w, v, i + 1, rest)
	let yes = -1
	if (rest >= w[i]) {
		yes = v[i] +  processRecursion(w, v, i + 1, rest - w[i])
	}
	return Math.max(yes, no)
}

const weights1 = [3, 2, 4, 7];
const values1 = [5, 6, 3, 19];
let bag1 = 11;

console.log(getMaxValueRecursion(weights1, values1, bag1))


const getMaxValueDP = (weights, values, bag) => {
	if (!weights || !values || bag <= 0) return 0
	let DP = new Array(weights.length + 1)
	for (let i = 0; i < DP.length; i++) {
		DP[i] = new Array(bag + 1)
		DP[i].fill(0)
	}
	for (let i = DP.length - 2; i >= 0; i--) {
		for (let r = 0; r <= bag; r++) {
			let no = DP[i + 1][r]
			let yes = -1
			if (r >= weights[i]) {
				yes = values[i] + DP[i + 1][r - weights[i]]
			}
			DP[i][r] = Math.max(no, yes)
		}
	}
	console.log(DP)
	return DP[0][bag]
}

console.log(getMaxValueDP(weights1, values1, bag1))
