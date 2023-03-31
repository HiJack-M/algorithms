// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

class Node {
  constructor(value, freq) {
    this.value = value
    this.freq = freq
  }
}

class MaxPriorityQueue {
  constructor() {
    this.heap = []
  }

  swap(i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  insert(node) {
    this.heap.push(node)
    let index = this.heap.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)

      if (this.heap[index].freq <= this.heap[parentIndex].freq) break

      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  heapify(index) {
    if (index >= this.heap.length - 1) return
    let leftIndex = index * 2 + 1

    while (leftIndex < this.heap.length) {
      let big = this.heap[index].freq > this.heap[leftIndex].freq ? index : leftIndex
      if (leftIndex + 1 < this.heap.length) {
        big = this.heap[big].freq > this.heap[leftIndex + 1].freq ? big : leftIndex + 1
      }
      if (big == index) break

      this.swap(index, big)
      index = big
      leftIndex = index * 2 + 1
    }
  }

  pop() {
    if (this.heap.length > 0) {
      this.swap(0, this.heap.length - 1)
      let res = this.heap.pop()
      this.heapify(0)
      return res
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (!nums || nums.length < k) return null

  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], new Node(nums[i], 1))
    } else {
      let node = map.get(nums[i])
      node.freq = node.freq + 1
    }
  }

  let queue = new MaxPriorityQueue()
  for (let value of map.values()) {
    queue.insert(value)
  }

  let ans = []

  for (let i = 1; i <= k; i++) {
    ans.push(queue.pop().value)
  }

  return ans
}

const nums1 = [1, 1, 1, 2, 2, 3]
let k1 = 2
console.log(topKFrequent(nums1, k1))
