// N皇后问题是指在 N*N 的棋盘上要摆 N 个皇后，要求任何两个皇后不同行、不同列， 也不在同一条斜线上。给定一个整数 n，返回 n 皇后的摆法有多少种。

const NQueens = (N) =>{
	if (!N || N <= 0) return 0
	const arrPut = [] // 缓存已经放好的点
	return process(N, 0, arrPut)
}

// 在第 i 行做决定
const process = (n, i, arrPut) => {
	// base case
	if (i == n) return 1

	let result = 0
	for (let j = 0; j < n; j++) {
		if (isOkToPutHere(i, j, arrPut)) {
			arrPut.push(j)
			result += process(n, i + 1, arrPut)
			arrPut.pop()
		}
	}
	return result
}

// 第 i 行摆在第 j 位置行不行
const isOkToPutHere = (i, j, arrPut) => {
	// arrPut.length 已经摆了多少行
	// arrPut[i] -> j: 第 i 行摆在第 j 个位置
	for (let k = 0; k < arrPut.length; k++) {
		if (arrPut[k] == j) return false // 同列
		if (Math.abs(k - i) == Math.abs(arrPut[k] - j)) return false
	}
	return true
}

console.log(NQueens(7))
