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

console.log('normal: ', NQueens(5))

// test git reset

// 优化常数项
const NQueensBit = (N) => {
	if (!N || N < 1) return 0
	// limit 不变，最终摆满皇后，N 个 1（玩二进制数）
	let limit = N > 32 ? -1 : (1 << N) - 1
	return processBit(limit, 0, 0, 0)
}

const processBit = (limit, colLim,leftLim, rightLim) => {
	// base case
	if (colLim == limit) return 1

	let res = 0
	// 所有位置中，还不是 1 的位置
	let pos = limit & ~(colLim | leftLim | rightLim)
	// 每次拿最右侧的 1 位置尝试，尝试完去掉，最终尝试完所有的 1，pos 为 0
	while (pos != 0) {
		let mostRightOne = pos & (~pos + 1)
		pos = pos - mostRightOne
		res += processBit(limit, colLim + mostRightOne, (leftLim + mostRightOne) << 1, (rightLim + mostRightOne) >> 1)
	}
	return res
}

console.log('bit: ', NQueensBit(5))
