// 给定两个长度都为 N 的数组 weights 和 values，weights[i] 和 values[i] 分别代表 i 号物品的重量和价值。

// 给定一个正数 bag，表示一个载重 bag 的袋子，你装的物品不能超过这个重量。

// 返回你能装下最多的价值是多少?

const knapsack = (weights, values, bag) => {
	if (!weights || !values || bag <= 0) return 0
	return process(weights, values, bag, 0, 0, 0)
}

// aw: already weight已经装了多重
const process = (w, v, b, i, aw, av) => {
	if (aw + w[i] > b || i == w.length) return av
	
	let yes = process(w, v, b, i + 1, aw + w[i], av + v[i])
	let no = process(w, v, b, i + 1, aw, av)
	return Math.max(yes, no)
}

const weights1 = [3, 2, 4, 7];
const values1 = [5, 6, 3, 19];
let bag1 = 11;

console.log(knapsack(weights1, values1, bag1))

const knapsackClassic = (weights, values, bag) => {
	if (!weights || !values || bag <= 0) return 0
	return processClassic(weights, values, bag, 0)
}

// r: rest 剩下能装多重
const processClassic = (w, v, r, i) => {
	if (w[i] > r) return -1 // 此方案行不通，-1 为状态
	if (i == w.length) return 0

	let yes = -1 // 先假设当前方案行不通
	let yesNext = processClassic(w, v, r - w[i], i + 1)
	if (yesNext != -1) yes = v[i] + yesNext // 若装当前货物，后面的决策都不是 -1，说明行得通
	
	let no = processClassic(w, v, r, i + 1)

	return Math.max(yes, no)
}

console.log(knapsackClassic(weights1, values1, bag1))
