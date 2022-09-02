// 假设有排成一行的 N 个位置，记为 1~N ，N 一定大于或等于 2
// 开始时机器人在其中的 M 位置上(M 一定是 1~N 中的一个)
// 如果机器人来到 1 位置，那么下一步只能往右来到 2 位置；
// 如果机器人来到 N 位置，那么下一步只能往左来到 N-1 位置；
// 如果机器人来到中间位置，那么下一步可以往左走或者往右走；
// 规定机器人必须走 K 步，最终能来到 P 位置(P 也是 1~N 中的一个)的方法有多少种
// 给定四个参数 N、M、K、P，返回方法数。

const robotWalkRecursion = (N, M, K, P) => {
	if (N < 2 || M < 1 || M > N || K < 0 || P < 1 || P > N) return 0
	return processRecursion(N, M, K, P)
}

const processRecursion = (N, cur, rest, P) => {
	if (rest == 0) {
		return cur == P ? 1 : 0
	}
	if (cur == 1) {
		return processRecursion(N, cur + 1, rest - 1, P)
	}
	if (cur == N) {
		return processRecursion(N, cur - 1, rest - 1, P)
	}
	return processRecursion(N, cur - 1, rest - 1, P) + processRecursion(N, cur + 1, rest - 1, P)
}

console.log('recursion: ', robotWalkRecursion(7, 3, 3, 2))
