// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let head1 = new ListNode(0)
let head2 = new ListNode(1)
let head3 = new ListNode(4)
let head4 = new ListNode(2)
let head5 = new ListNode(3)

let arr1 = [head1, head2, head3, head4, head5]

// 小顶堆
class HeapForLists {
  constructor(lists) {
    this.heap = [] // 装排成堆序列的链表表头
    for (let i = 0; i < lists.length; i++) {
      if (lists[i]) {
        // ⚠️ 一开始用 heapify 会有问题………………！！！
        // this.heap.unshift(lists[i])
        // this.heapify(0)
        this.heap.push(lists[i])
        this.heapInsert(this.heap.length - 1)
      }
    }
  }

  poll() {
    let top = this.heap.shift()
    console.log(top)
    let newTop = null
    if (top.next != null) {
      newTop = top.next
    } else if (this.heap.length > 0) {
      newTop = this.heap.pop() // 若当下节点无后续，则从 heap 最尾端取一个来填补 top
    } // else 就是彻底没了

    top.next = null
    if (newTop != null) {
      this.heap.unshift(newTop)
      this.heapify(0)
    }
    return top
  }

  // 从最后子节点开始往上爬
  heapInsert(index) {
    while (index > 0 && this.heap[index].val < this.heap[parseInt((index - 1) / 2)].val) {
      swap(this.heap, index, parseInt((index - 1) / 2))
      index = parseInt((index - 1) / 2)
    }
  }

  // 从某节点开始往下沉
  heapify(index) {
    while (index < this.heap.length - 1 && index * 2 + 1 < this.heap.length) {
      let left = index * 2 + 1
      let small = this.heap[index].val < this.heap[left].val ? index : left
      if (left + 1 < this.heap.length) {
        small = this.heap[small].val < this.heap[left + 1].val ? small : left + 1
      }
      if (small == index) break
      swap(this.heap, index, small)
      index = small
    }
  }
}

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length == 0) return null
  let heapList = new HeapForLists(lists)
  console.log('list: ', heapList.heap)
  let dummyHead = new ListNode(0)
  let p = dummyHead
  while (heapList.heap.length > 0) {
    p.next = heapList.poll()
    p = p.next
  }
  return dummyHead.next
}

mergeKLists(arr1)
