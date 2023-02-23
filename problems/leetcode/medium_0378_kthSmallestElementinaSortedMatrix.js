// 378. Kth Smallest Element in a Sorted Matrix

// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

class MinHeap {
  constructor(arr) {
    this.heap = arr
  }

  // since rows is sorted in ascending order in this problem, I don't have to heapInsert at the beginning
  // heapInsert(item) {
  //   this.heap.push(item)
  //   let index = this.heap.length - 1
  //   while (index > 0) {
  //     let parentI = parseInt((index - 1) / 2)
  //     if (this.heap[index][0] < this.heap[parentI][0]) {
  //       swap(this.heap, index, parentI)
  //       index = parentI
  //     } else {
  //       break
  //     }
  //   }
  // }

  swap(i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  pop() {
    let item = this.heap[0].shift()
    if (this.heap[0].length == 0) {
      this.heap[0].push(Infinity) // 某一列没有元素了，就添加一个最大数进去，用来沉底
    }
    this.heapify(0)
    return item
  }

  heapify(index) {
    let end = this.heap.length - 1
    let leftChildI

    while (index < end) {
      leftChildI = index * 2 + 1
      if (leftChildI > end) break

      // 与左孩子对比
      let smallest = this.heap[index][0] < this.heap[leftChildI][0] ? index : leftChildI
      // 与右孩子对比
      if (leftChildI + 1 <= end) {
        smallest = this.heap[smallest][0] < this.heap[leftChildI + 1][0] ? smallest : leftChildI + 1
      }
      if (smallest == index) break
      this.swap(index, smallest)
      index = smallest
    }
  }
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  if (!matrix | (matrix.length == 0) || matrix[0].length == 0) return null

  let n = matrix.length
  if (n * n < k) return null

  let heap = new MinHeap(matrix)
  let i = 1
  let res
  while (i <= k) {
    res = heap.pop()
    i++
  }
  return res
}

const matrix1 = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
]
console.log(kthSmallest(matrix1, 8))

const matrix2 = [[-5]]
console.log(kthSmallest(matrix2, 1))

const matrix3 = [
  [2, 3, 8, 11, 15],
  [4, 8, 12, 15, 18],
  [5, 8, 17, 20, 22],
  [6, 12, 18, 20, 25],
  [9, 14, 21, 24, 25],
]
console.log(kthSmallest(matrix3, 16))
