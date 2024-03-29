/* 给定数组arr，arr中所有的值都为正数且不重复
 * 每个值代表一种面值的货币，每种面值的货币可以使用任意张
 * 再给定一个整数 aim，代表要找的钱数
 * 求组成 aim 的方法数 */

const coinsWay1 = (arr, aim) => {
  if (arr == null || arr.length == 0 || aim < 0) {
    return 0
  }
  return process1(arr, 0, aim)
}

// 如果自由使用 arr[index...] 的面值，组成rest这么多钱，返回方法数
// 可以自由使用 arr[index] 所有的面值，每一种面值都可以使用任意张
const process1 = (arr, index, rest) => {
  // 其实这里单独判断 rest 是否为 0 也不会错，但没有包含底层返回的所有 base case，要判断走到最后 index 的时候
  if (index == arr.length) {
    // 没有货币可以选择了
    return rest == 0 ? 1 : 0
  }
  // 有面值的时候
  let ways = 0
  // arr[index] 当前面值
  for (let i = 0; arr[index] * i <= rest; i++) {
    ways += process1(arr, index + 1, rest - arr[index] * i)
  }
  return ways
}

// 自己尝试过全排列（以arr每一个元素为根深度遍历，这样不行，因为面值组合会有重复，只是使用顺序不同）

// 记忆化搜索
const coinsWay2 = (arr, aim) => {
  if (arr == null || arr.length == 0 || aim < 0) {
    return 0
  }
  let dp = new Array(arr.length + 1)
  for (let i = 0; i < dp.length; i++) {
    let row = new Array(aim + 1)
    row.fill(-1)
    dp[i] = row
  }
  return process2(arr, 0, aim, dp)
}

const process2 = (arr, index, rest, dp) => {
  if (dp[index][rest] != -1) {
    return dp[index][rest]
  }
  if (index == arr.length) {
    dp[index][rest] = rest == 0 ? 1 : 0
    return dp[index][rest]
  }
  let ways = 0
  for (let i = 0; arr[index] * i <= rest; i++) {
    ways += process2(arr, index + 1, rest - arr[index] * i, dp)
  }
  dp[index][rest] = ways
  return ways
}
// 记忆化搜索每次还是去跑递归，只是把重复解的值存起来直接取用，不再进行重复计算

const coinsWayDp = (arr, aim) => {
  let N = arr.length
  let dp = new Array(N + 1)
  for (let i = 0; i < dp.length; i++) {
    let row = new Array(aim + 1)
    row.fill(0)
    dp[i] = row
  }
  dp[N][0] = 1

  for (let index = N - 1; index >= 0; index--) {
    for (let rest = 0; rest <= aim; rest++) {
      let ways = 0
      for (let i = 0; arr[index] * i <= rest; i++) {
        ways += dp[index + 1][rest - arr[index] * i]
      }
      dp[index][rest] = ways
    }
  }

  return dp[0][aim]
}

const coinsWayDpPro = (arr, aim) => {
  let N = arr.length
  let dp = new Array(N + 1)
  for (let i = 0; i < dp.length; i++) {
    let row = new Array(aim + 1)
    row.fill(0)
    dp[i] = row
  }
  dp[N][0] = 1

  for (let index = N - 1; index >= 0; index--) {
    for (let rest = 0; rest <= aim; rest++) {
      dp[index][rest] = dp[index + 1][rest]
      if (rest - arr[index] >= 0) {
        // 没有越界
        dp[index][rest] += dp[index][rest - arr[index]]
      }
    }
  }

  return dp[0][aim]
}

const arr1 = [2, 3, 1]
const aim1 = 5

/* const arr1 = [7, 100, 3, 50];
 * const aim1 = 1000; */
// const arr1 = [10, 50, 25];
// const aim1 = 100;
console.log(coinsWay1(arr1, aim1))
console.log(coinsWay2(arr1, aim1))
console.log(coinsWayDp(arr1, aim1))
console.log(coinsWayDpPro(arr1, aim1))

/** 2022.09.07 */

const coinsWay0907 = (arr, aim) => {
  if (!arr || aim < 0) return 0
  return process0907(arr, 0, aim)
}

// 从 i 开始，i的下一面值可选：i 或 i 之后的面值
// 还需要凑的钱
const process0907 = (arr, i, rest) => {
  // base case
  if (rest < 0) return 0
  if (rest == 0) return 1

  let res = 0
  for (let j = i; j < arr.length; j++) {
    res += process0907(arr, j, rest - arr[j])
  }
  return res
}

console.log(coinsWay0907(arr1, aim1))

const coinsWayCache0907 = (arr, aim) => {
  if (!arr || !aim) return 0

  let N = arr.length
  let Dp = new Array(N)
  for (let i = 0; i < N; i++) {
    Dp[i] = new Array(aim + 1)
    Dp[i].fill(-1)
  }
  for (let i = 0; i < N; i++) {
    Dp[i][0] = 1
  }
  return processCache0907(arr, 0, aim, Dp)
}

const processCache0907 = (arr, i, rest, Dp) => {
  if (rest < 0) return 0
  if (Dp[i][rest] != -1) return Dp[i][rest]

  let res = 0
  for (let j = i; j < arr.length; j++) {
    res += processCache0907(arr, j, rest - arr[j], Dp)
  }
  Dp[i][rest] = res
  return res
}
// 这个思路不适用于改成动态规划，Dp 表中可变参数的先后依赖关系不明朗
