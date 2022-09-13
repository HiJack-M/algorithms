// 给定数组arr，arr中所有的值都为正数且不重复，每个值代表一种面值的货币，每种面值的货币可以使用任意张。
// 再给定一个整数 aim，代表要找的钱数。
// 求组成 aim 的方法数。

const coinsWay = (arr, aim) => {
	if (!arr || !aim) return 0
	return process(arr, 0, aim)
}

const process = (arr, index, rest) => {
	if (index == arr.length) {
		return rest == 0 ? 1 : 0
	}

	let ways = 0
	for (let count = 0; arr[index] * count <= rest; count++) {
		ways += process(arr, index + 1, rest - arr[index] * count)
	}
	return ways
}

const arr1 = [2, 3, 1];
const aim1 = 5;

console.log(coinsWay(arr1, aim1));

const coinsWayCache = (arr, aim) => {
	if (!arr || !aim) return 0
	
	let Dp = new Array(arr.length + 1)
	for (let i = 0; i < Dp.length; i++) {
		Dp[i] = new Array(aim + 1)
		Dp[i].fill(-1)
	}
	return processCache(arr, 0, aim, Dp)
}

const processCache = (arr, index, rest, Dp) => {
	if (Dp[index][rest] != -1) return Dp[index][rest]

	if (index == arr.length) {
		Dp[index][rest] = rest == 0 ? 1 : 0
		return Dp[index][rest]
	}

	let ways = 0
	for (let count = 0; arr[index] * count <= rest; count++) {
		ways += processCache(arr, index + 1, rest - arr[index] * count, Dp)
	}
	Dp[index][rest] = ways
	return ways
}

console.log(coinsWayCache(arr1, aim1));

const coinsWayDp = (arr, aim) => {
	if (!arr || !aim) return 0
	
	let N = arr.length
	let Dp = new Array(N + 1)  
	for (let i = 0; i < Dp.length; i++) {
		Dp[i] = new Array(aim + 1)
		Dp[i].fill(0)
	}
	Dp[N][0] = 1

	for (let index = N - 1; index >= 0; index--) {
		for (let rest = 0; rest <= aim; rest++) {
			let ways = 0
			for (let count = 0; arr[index] * count <= rest; count++) {
				ways += Dp[index + 1][rest - arr[index] * count]
			}
			Dp[index][rest] = ways
		}
	}
	return Dp[0][aim]
}

console.log(coinsWayDp(arr1, aim1));

const coinsWayDpPro = (arr, aim) => {
	if (!arr || !aim) return 0
	
	let N = arr.length
	let Dp = new Array(N + 1)  
	for (let i = 0; i < Dp.length; i++) {
		Dp[i] = new Array(aim + 1)
		Dp[i].fill(0)
	}
	Dp[N][0] = 1

	for (let index = N - 1; index >= 0; index--) {
		for (let rest = 0; rest <= aim; rest++) {
			Dp[index][rest] = Dp[index + 1][rest]
			if (rest >= arr[index]) {
				Dp[index][rest] += Dp[index][rest - arr[index]]
			}
		}
	}
	return Dp[0][aim]
}

console.log(coinsWayDpPro(arr1, aim1));
