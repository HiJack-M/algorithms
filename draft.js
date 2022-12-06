/* 一块金条切成两半，是需要花费和长度数值一样的铜板的。
 * 比如长度为20的金条，不管怎么切，都要花费20个铜板。
 * 一群人想整分整块金条，怎么分最省铜板?
 *
 * 例如,给定数组{10,20,30}，代表一共三个人，整块金条长度为60，金条要分成10，20，30三个部分。
 * 如果先把长度60的金条分成10和50，花费60; 再把长度50的金条分成20和30，花费50;一共花费110铜板。
 * 但如果先把长度60的金条分成30和30，花费60;再把长度30金条分成10和20， 花费30;一共花费90铜板。
 *
 * 输入一个数组，返回分割的最小代价。 */

class MinHeap {
  constructor(arr) {
    this.heap = []
    if (arr && arr.length > 0) {
      for (let item of arr) {
        this.heapInsert(item, this.heap.length)
      }
    }
  }

  swap(i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  heapInsert(val, index) {
    this.heap.push(val)
    while (this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
      this.swap(index, Math.floor((index - 1) / 2))
      index = Math.floor((index - 1) / 2)
    }
  }

  heapify(index, end) {
    let left = index * 2 + 1
    while (left <= end) {
      let smallestI = this.heap[index] < this.heap[left] ? index : left
      if (left + 1 <= end) {
        smallestI = this.heap[smallestI] < this.heap[left + 1] ? smallestI : left + 1
      }
      if (smallestI == index) break

      this.swap(smallestI, index)
      index = smallestI
      left = index * 2 + 1
    }
  }

  poll() {
    this.swap(0, this.heap.length - 1)
    let res = this.heap.pop()
    this.heapify(0, this.heap.length - 1)
    return res
  }
}

const lessMoney = (arr) => {
  if (arr == null || arr.length < 2) {
    return 0
  }

  let coinHeap = new MinHeap(arr)
  let ans = 0
  while (coinHeap.heap.length > 1) {
    let a = coinHeap.poll()
    let b = coinHeap.poll()
    let newVal = a + b
    ans += newVal
    coinHeap.heapInsert(newVal)
  }

  return ans
}

const arr1 = [26, 40, 33, 34, 45, 45, 41, 29, 40]
console.log(lessMoney(arr1))
