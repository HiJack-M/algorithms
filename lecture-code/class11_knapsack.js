/* 给定两个长度都为N的数组 weights 和 values，
 * weights[i] 和 values[i] 分别代表 i 号物品的重量和价值。
 * 给定一个正数 bag，表示一个载重 bag 的袋子，你装的物品不能超过这个重量。
 * 返回你能装下最多的价值是多少? */

const getMaxValue1 = (weights, values, bag) => {
    return process1(weights, values, 0, 0, bag);
}

// index 和之后选择的货物的价值，前面的不管
// 0...index-1上做了货物的选择，alreadyW 只记录前面决定的总价值
// 若返回 -1，则认为没有方案
// 若不返回 -1，则返回的是真实价值
const process1 = (w, v, index, alreadyW, bag) => {
    if (alreadyW > bag) {
        return -1;
    }
    // 重量没超
    // 来到结束点，该点无货物无价值
    if (index == w.length) {
        return 0;
    }
    // 不要当前货，接下来的货物产生的价值
    let p1 = process1(w, v, index + 1, alreadyW, bag);
    // 要当前货，后面的货物能产生的最大价值
    let p2Next = process1(w, v, index + 1, alreadyW + w[index], bag);
    let p2 = -1;
    // 要了当前的货，后面的货的方案是可行的（不为-1）
    if (p2Next != -1) {
        p2 = v[index] + p2Next;
    }
    return Math.max(p1, p2);
}

const getMaxValue2 = (weights, values, bag) => {
    return process2(weights, values, 0, bag);
}

// 只剩 rest 的空间了
// index... 货物自由选择，但不能超过 rest 空间
// 返回能够获得的最大价值
const process2 = (w, v, index, rest) => {
    // base case 1
    if (rest <= 0) {
        return 0;
    }
    // rest >= 0
    if (index == w.length) {
        return 0;
    }
    // 有货也有空间
    let p1 = process2(w, v, index + 1, rest);
    let p2 = -Infinity;
    if (rest >= w[index]) {
        let p2Next = process2(w, v, index + 1, rest - w[index]);
        p2 = p2Next + v[index];
    }
    return Math.max(p1, p2);
}

const weights1 = [3, 2, 4, 7];
const values1 = [5, 6, 3, 19];
let bag1 = 11;
let maxValue1 = getMaxValue1(weights1, values1, bag1);
let maxValue2 = getMaxValue2(weights1, values1, bag1);
console.log(maxValue1, '|', maxValue2);

const getMaxValueDp = (weights, values, bag) => {
    let dp = [];
    let N = weights.length;
    for (let i = 0; i <= N; i++) {
        let row = new Array(bag + 1);
        row.fill(0);
        dp[i] = row;
    }
    for (let i = N - 1; i >= 0; i--) {
        for (let j = 0; j <= bag; j++) {
            let p1 = dp[i + 1][j];
            let p2 = -1;
            if (j >= weights[i]) {
                p2 = dp[i + 1][j - weights[i]] + values[i];
            }
            dp[i][j] = Math.max(p1, p2);
        }
    }
    return dp[0][bag];
}

let maxValue3 = getMaxValueDp(weights1, values1, bag1);
console.log(maxValue3);


/** 2022.08.31 复习经典思路前，自己的解题思路 */

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

/** 分隔线 */

// 2022.09.05 复习完动态规划该例题视频讲解
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
    // 剩余空间比当前货物重量大，才能装当前货物
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
