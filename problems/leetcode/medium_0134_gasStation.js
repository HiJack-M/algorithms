// 134. Gas Station

// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
// You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (!gas || gas.length == 0 || !cost || cost.length == 0) return -1

  let n = gas.length
  let i = 0
  while (i < n) {
    let sumOfGas = 0
    let sumOfCost = 0
    let steps = 0

    // 从加油站 x 出发，每经过一个加油站就加一次油（包括起始加油站），最后一个可以到达的加油站是 y
    // 从 x,y 之间的任何一个加油站出发，都无法到达加油站 y 的下一个加油站
    // 首先检查第 0 个加油站，并试图判断能否环绕一周；如果不能，就从第一个无法到达的加油站开始继续检查
    while (steps < n) {
      const j = (i + steps) % n // 当前要走的点
      sumOfCost += cost[j]
      sumOfGas += gas[j]
      if (sumOfCost > sumOfGas) {
        break
      }
      steps++ // 走得到，计步加一
    }

    if (steps == n) {
      return i
    }
    i = i + steps + 1 // 从当前走不到的点开始继续检查
  }

  return -1
}

const gas1 = [1, 2, 3, 4, 5]
const cost1 = [3, 4, 5, 1, 2]
console.log(canCompleteCircuit(gas1, cost1)) // 3

const gas2 = [2, 3, 4]
const cost2 = [3, 4, 3]
console.log(canCompleteCircuit(gas2, cost2)) // -1
