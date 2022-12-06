/* 一块金条切成两半，是需要花费和长度数值一样的铜板的。
 * 比如长度为20的金条，不管怎么切，都要花费20个铜板。
 * 一群人想整分整块金条，怎么分最省铜板?
 *
 * 例如,给定数组{10,20,30}，代表一共三个人，整块金条长度为60，金条要分成10，20，30三个部分。
 * 如果先把长度60的金条分成10和50，花费60; 再把长度50的金条分成20和30，花费50;一共花费110铜板。
 * 但如果先把长度60的金条分成30和30，花费60;再把长度30金条分成10和20， 花费30;一共花费90铜板。
 *
 * 输入一个数组，返回分割的最小代价。 */

const lessMoney1 = (arr) => {
  if (arr == null || arr.length == 0) {
    return 0
  }
  return process(arr, 0)
}

// arr 还要分成多少长度的数组
// 之前已经花费的铜板
const process = (arr, pre) => {
  if (arr.length == 1) {
    return pre
  }
  let cost = Infinity
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      cost = Math.min(cost, process(copyAndMerge(arr, i, j), pre + arr[i] + arr[j]))
    }
  }
  return cost
}

// 除下标 i 和 j 之外的数，全部直接拷入新数组，i + j 合并再放入新数组
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

/* const arr1 = [ 26, 40, 33, 34, 45, 45, 41, 29, 40 ];
 * console.log(lessMoney1(arr1)); */

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

// 贪心算法解
const lessMoney2 = (arr) => {
  if (arr == null || arr.length == 0) {
    return 0
  }
  // 哈夫曼树：
  // 1. 建出小根堆
  // 2. 弹出两个，相加，相加值 val 累加到 sum (每个非叶子结点相加)
  // 3. val 再入堆，再循环2
  // 直到堆中只剩一个数时，返回 sum
  let queue = new PriorityQueue()
  for (let i = 0; i < arr.length; i++) {
    queue.add(arr[i])
  }
  let sum = 0
  while (queue.queue.length > 1) {
    let val = queue.poll() + queue.poll()
    sum += val
    queue.add(val)
  }
  return sum
}

/* const arr2 = [ 26, 40, 33, 34, 45, 45, 41, 29, 40 ];
 * console.log(lessMoney2(arr2)); */

const generateRandomArr = (maxLen, maxValue) => {
  let arr = new Array(parseInt((maxLen + 1) * Math.random()))
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(maxValue * Math.random() + 1)
  }
  return arr
}

const testMachine = (maxLen, maxValue, maxTime) => {
  for (let i = 1; i < maxTime; i++) {
    let arr = generateRandomArr(maxLen, maxValue)
    let arrCopy = [...arr]
    if (lessMoney1(arr) != lessMoney2(arrCopy)) {
      console.log('arr error: ', arr)
      console.log(i)
      console.log('Oops!')
      return
    }
  }
  console.log('Finished!')
}

testMachine(5, 50, 100)
// 数组长度超过5，lessMoney1 就能明显看到延迟
