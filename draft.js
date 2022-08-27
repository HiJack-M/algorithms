// 堆排序复习
const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const heapInsert = (arr, i) => {
  while (arr[i] > arr[Math.floor(((i - 1) / 2))]) {
    swap(arr, i, Math.floor((i - 1) / 2))
    i = Math.floor((i - 1) / 2)
  }
}

const heapify = (arr, i, end) => {
  let left = i * 2 + 1
  while (left <= end) {
    let biggest = (left + 1 <= end) && arr[left + 1] > arr[left] ? left + 1 : left
    biggest = arr[biggest] > arr[i] ? biggest : i
    if (biggest == i) break
    swap(arr, biggest, i)
    i = biggest
    left = i * 2 + 1
  }
}

const heapSort = (arr) => {
  if (!arr || arr.length < 2) return

  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i)
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, 0, i - 1)
  }
}

const arr1 = [5, 3, 0, 3, 1, 7, 5, 9, 8, 2, 7, 9, 6, 4, 1];
heapSort(arr1);
console.log(arr1);


// 堆结构复习
// class PriorityQueue {
//   constructor() {
//     this.queue = []
//   }

//   // API
// }

class PriorityQueue {
  constructor() {
      this.queue = [];
  }

  add(value) {
      this.queue.unshift(value);  // 如果只用 heapify 操作，那加入的时候，就一定要从下标 0 开始！！！
      this.heapify();
  }

  swap(i, j) {
      let temp = this.queue[i];
      this.queue[i] = this.queue[j];
      this.queue[j] = temp;
  }

  heapify() {
      if (this.queue.length <= 1) {
          return;
      }
      let index = 0;
      let left = index * 2 + 1;
      while (left < this.queue.length) {
          let smallest = left + 1 < this.queue.length && this.queue[left + 1] < this.queue[left] ? left + 1 : left;
          smallest = this.queue[smallest] < this.queue[index] ? smallest : index;
          if (smallest == index) {
              break;
          }
          this.swap(index, smallest);
          index = smallest;
          left = index * 2 + 1;
      }
  }

  poll() {
      if (this.queue.length == 0) {
          throw Error('queue is empty!');
      }
      let value = this.queue.shift();
      if (this.queue.length > 1) {
          this.heapify();
      }
      return value; 
  }
}

const test = (arr) => {
  console.log('arr: ', arr)
  let queue = new PriorityQueue();
  for (let i = 0; i < arr.length; i++) {
      queue.add(arr[i]);
  }
  console.log('queue: ', queue.queue)
  let poll1 = queue.poll()
  console.log('poll1 : ', poll1)
  console.log('queue middle: ', queue.queue)
  let poll2 = queue.poll()
  console.log('poll1 : ', poll1, ', poll2: ', poll2)
  console.log('queue after: ', queue.queue)
}

const arr11 = [0, 1, 5, 2, 8, 7, 6, 7]
test(arr11)
