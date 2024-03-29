// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// 大顶堆
class FrequencyHeap {
  constructor() {
    this.heap = [] // item: {key, value}
  }

  // 弹出
  poll() {
    this.swap(0, this.heap.length - 1)
    let res = this.heap.pop()
    this.heapify(0)

    return res
  }

  // 从末尾插入
  heapInsert(item) {
    this.heap.push(item)
    let index = this.heap.length - 1

    while (index > 0) {
      let parentI = parseInt((index - 1) / 2)
      if (this.heap[index].value > this.heap[parentI].value) {
        this.swap(index, parentI)
      }
      index = parentI
    }
  }

  // 向下对比
  heapify(index) {
    let left = index * 2 + 1
    while (index < this.heap.length && left < this.heap.length) {
      let big = this.heap[index].value >= this.heap[left].value ? index : left
      if (left + 1 < this.heap.length) {
        big = this.heap[big].value >= this.heap[left + 1].value ? big : left + 1
      }

      if (big == index) break

      this.swap(index, big)
      index = big
      left = index * 2 + 1
    }
  }

  swap(i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

// 📢📢📢 小顶堆的思路更省时省空间

// 建立一个小顶堆，然后遍历「出现次数数组」：

// a. 如果堆的元素个数小于 k，就可以直接插入堆中。
// b. 如果堆的元素个数等于 k，则检查堆顶与当前出现次数的大小。如果堆顶更大，说明至少有 k 个数字的出现次数比当前值大，故舍弃当前值；否则，就弹出堆顶，并将当前值插入堆中。

// 遍历完成后，堆中的元素就代表了「出现次数数组」中前 k 大的值。

// 懒得改了，反正能改出来

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let ans = []
  if (!nums || nums.length === 0 || k === 0) return ans

  let frequencyMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap.has(nums[i])) {
      frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1)
    } else {
      frequencyMap.set(nums[i], 1)
    }
  }

  let frequencyHeap = new FrequencyHeap()
  for (let [key, value] of frequencyMap) {
    frequencyHeap.heapInsert({ key, value })
  }

  console.log(frequencyHeap.heap)

  for (let i = 0; i < k; i++) {
    ans.push(frequencyHeap.poll().key)
  }

  return ans
}

const nums1 = [1, 1, 1, 2, 2, 3]
let k1 = 2
console.log(topKFrequent(nums1, k1))
