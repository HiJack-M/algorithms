/* 一块金条切成两半，是需要花费和长度数值一样的铜板的。
 * 比如长度为20的金条，不管怎么切，都要花费20个铜板。
 * 一群人想整分整块金条，怎么分最省铜板?
 *
 * 例如,给定数组{10,20,30}，代表一共三个人，整块金条长度为60，金条要分成10，20，30三个部分。
 * 如果先把长度60的金条分成10和50，花费60; 再把长度50的金条分成20和30，花费50;一共花费110铜板。
 * 但如果先把长度60的金条分成30和30，花费60;再把长度30金条分成10和20， 花费30;一共花费90铜板。
 *
 * 输入一个数组，返回分割的最小代价。 */

const splitGold1 = (arr) => {
  if (!arr || arr.length < 2) return 0
  return process(arr, 0)
}

/**
 * @param {*} arr: 剩下要处理的数组（要切分的项）
 * @param {*} pre: 已经花费的铜板
 * @return {*}
 */
const process = (arr, pre) => {
  if (arr.length == 1) return pre

  let cost = Infinity
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      cost = Math.min(cost, process(copyAndMerge(arr, i, j), pre + arr[i] + arr[j]))
    }
  }
  return cost
}

const copyAndMerge = (arr, i, j) => {
  let ans = []
  for (let a = 0; a < arr.length; a++) {
    if (a != i && a != j) {
      ans.push(arr[a])
    }
  }
  ans.push(arr[i] + arr[j])
  return ans
}

// console.log(splitGold1([ 45, 10, 50 ]))
console.log(splitGold1([ 24, 21, 5, 23 ]))
// console.log(sumOf([10, 20 ,30]))
