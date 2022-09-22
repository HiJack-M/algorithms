class MyMaxHeap {
  constructor(limit) {
    this.limit = limit
    this.heapSize = 0
    this.heap = []
  }

  getHeap() {
    return this.heap.slice(0, this.heapSize)
  }

  isEmpty() {
    return this.heapSize === 0 ? true : false
  }

  isFull() {
    return this.heapSize === this.limit ? true : false
  }

  push(value) {
    if (this.isFull()) {
      throw Error('the heap is full.')
    }
    this.heap[this.heapSize] = value
    this.heapInsert(this.heap, this.heapSize++)
  }

  pop() {
    if (this.isEmpty()) {
      throw Error('the heap is empty.')
    }
    let result = this.heap[0]
    this.swap(this.heap, 0, --this.heapSize)
    this.heapify(this.heap, 0, this.heapSize)
    return result
  }

  heapInsert(arr, i) {
    // 要注意 js 对数组下标的处理，自己要处理成整数
    while (arr[i] > arr[Math.floor((i - 1) / 2)]) {
      this.swap(arr, i, Math.floor((i - 1) / 2))
      i = Math.floor((i - 1) / 2)
    }
  }

  heapify(arr, index, heapSize) {
    let left = index * 2 + 1
    while (left < heapSize) {
      let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
      largest = arr[largest] > arr[index] ? largest : index
      if (largest === index) {
        break
      }
      this.swap(arr, index, largest)
      index = largest
      left = index * 2 + 1
    }
  }

  swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

let myHeap = new MyMaxHeap(10)
const arr1 = [5, 8, 2, 1, 7, 0, 4, 6, 3, 9]
for (let i = 0; i < arr1.length; i++) {
  myHeap.push(arr1[i])
}
/* myHeap.push(10); */
console.log(myHeap.getHeap())
console.log(myHeap.pop())
console.log(myHeap.getHeap())
console.log(myHeap.pop())
console.log(myHeap.getHeap())
console.log(myHeap.pop())
console.log(myHeap.getHeap())

// 简化版小根堆

// 建立一个小顶堆
class PriorityQueue {
  constructor() {
    this.queue = []
  }

  add(value) {
    this.queue.unshift(value) // 如果只用 heapify 操作，那加入的时候，就一定要从下标 0 开始！！！
    this.heapify()
  }

  swap(i, j) {
    let temp = this.queue[i]
    this.queue[i] = this.queue[j]
    this.queue[j] = temp
  }

  // 默认从下标 0 开始
  heapify() {
    if (this.queue.length <= 1) {
      return
    }
    let index = 0
    let left = index * 2 + 1
    while (left < this.queue.length) {
      let smallest =
        left + 1 < this.queue.length && this.queue[left + 1] < this.queue[left] ? left + 1 : left
      smallest = this.queue[smallest] < this.queue[index] ? smallest : index
      if (smallest == index) {
        break
      }
      this.swap(index, smallest)
      index = smallest
      left = index * 2 + 1
    }
  }

  poll() {
    if (this.queue.length == 0) {
      throw Error('queue is empty!')
    }
    let value = this.queue.shift()
    if (this.queue.length > 1) {
      this.heapify()
    }
    return value
  }
}
