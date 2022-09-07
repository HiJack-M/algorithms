// 给定数组arr，arr中所有的值都为正数且不重复，每个值代表一种面值的货币，每种面值的货币可以使用任意张。
// 再给定一个整数 aim，代表要找的钱数。
// 求组成 aim 的方法数。

const coinsWay1 = (arr, aim) => {
	if (!arr || aim < 0) return 0
	return process1(arr, 0, aim)
}

// 从 i 开始，i的下一面值可选：i 或 i 之后的面值
// 还需要凑的钱
const process1 = (arr, i, rest) => {
	// base case
	if (rest < 0) return 0
	if (rest == 0) return 1

	let res = 0
	for (let j = i; j < arr.length; j++) {
		res += process1(arr, j, rest - arr[j])
	}
	return res	
}

const arr1 = [10, 50, 25];
const aim1 = 100;

console.log(coinsWay1(arr1, aim1))

// const coinsWayDp = (arr, aim) => {
// 	if (!arr || !aim) return 0

// 	let N = arr.length
// 	let Dp = new Array(N)
// 	for (let i = 0; i < N; i++) {
// 		Dp[i] = new Array(aim + 1)
// 		Dp[i].fill(0)
// 	}


// }

// 2022.09.07 上面的方法改不了动态规划
