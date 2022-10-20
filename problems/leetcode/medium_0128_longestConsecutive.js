// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums || nums.length == 0) return 0

  let numsSet = new UnionSet(nums)

  for (let i = 0; i < nums.length; i++) {
    let neighborSmallVal = nums[i] - 1
    let neighborSmallNode = numsSet.nodes.get(neighborSmallVal)
    if (neighborSmallNode) {
      numsSet.union(nums[i], neighborSmallVal)
    }

    let neighborBigVal = nums[i] + 1
    let neighborBigNode = numsSet.nodes.get(neighborBigVal)
    if (neighborBigNode) {
      numsSet.union(nums[i], neighborBigVal)
    }
  }

  let max = 0
  for (let i of numsSet.sizeMap.values()) {
    max = Math.max(max, i)
  }
  return max
}

class Node {
  constructor(val) {
    this.value = val
  }
}

class UnionSet {
  constructor(arr) {
    this.nodes = new Map()
    this.parents = new Map()
    this.sizeMap = new Map()

    for (let i = 0; i < arr.length; i++) {
      let node = new Node(arr[i])
      this.nodes.set(arr[i], node)
      this.parents.set(node, node)
      this.sizeMap.set(node, 1)
    }
  }

  findParent(cur) {
    if (!this.parents.has(cur)) return null

    let path = []
    while (cur != this.parents.get(cur)) {
      // 当它不是自己的代表点
      path.push(cur)
      cur = this.parents.get(cur)
    }

    while (path.length > 0) {
      this.parents.set(path.pop(), cur)
    }

    return cur
  }

  isSameSet(valA, valB) {
    let nodeA = this.nodes.get(valA)
    let nodeB = this.nodes.get(valB)
    if (!this.parents.has(nodeA) || !this.parents.has(nodeB)) return false
    return this.parents.get(nodeA) == this.parents.get(nodeB)
  }

  union(valA, valB) {
    if (this.isSameSet(valA, valB)) return
    let parentA = this.findParent(this.nodes.get(valA))
    let parentB = this.findParent(this.nodes.get(valB))
    if (parentA != parentB) {
      let bigBoss = this.sizeMap.get(parentA) > this.sizeMap.get(parentB) ? parentA : parentB
      let cuteBro = bigBoss == parentA ? parentB : parentA
      this.parents.set(cuteBro, bigBoss)
      this.sizeMap.set(bigBoss, this.sizeMap.get(bigBoss) + this.sizeMap.get(cuteBro))
      this.sizeMap.delete(cuteBro)
    }
  }
}

const nums1 = [100, 4, 200, 1, 3, 2]
// let union = new UnionSet(nums1)
// console.log(union.nodes)
// console.log(union.isSameSet(2, 4))
// union.union(2, 4)
// console.log(union.isSameSet(2, 4))
// console.log(union.sizeMap)

console.log(longestConsecutive(nums1))
