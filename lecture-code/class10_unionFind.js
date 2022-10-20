class Node {
  constructor(value) {
    this.value = value
  }
}

class UnionSet {
  constructor(arr) {
    // 所有节点的集合 key: node.value  value: node
    this.nodes = new Map()
    // 某 node 所在集的代表点
    this.parents = new Map()
    // 当一个点是代表点时，才会有记录(只会记录代表点和 size)
    this.sizeMap = new Map()

    for (let i = 0; i < arr.length; i++) {
      let node = new Node(arr[i])
      this.nodes.set(arr[i], node)
      this.parents.set(node, node)
      this.sizeMap.set(node, 1)
    }
  }

  // 找到该集合的代表点，传参 node
  findFather(cur) {
    // 若没有该点的代表点
    if (!this.parents.has(cur)) {
      return null
    }
    const path = []
    // 从 cur 开始，一直往上找，找到不能再往上的代表点，返回
    while (cur != this.parents.get(cur)) {
      path.push(cur)
      cur = this.parents.get(cur)
    }

    // cur头节点
    // 扁平化过程
    while (path.length > 0) {
      this.parents.set(path.pop(), cur)
    }
    return cur
  }

  isSameSet(a, b) {
    if (!this.nodes.has(a) || !this.nodes.has(b)) {
      return false
    }
    return this.findFather(this.nodes.get(a)) == this.findFather(this.nodes.get(b))
  }

  union(a, b) {
    if (!this.nodes.has(a) || !this.nodes.has(b)) {
      return
    }
    let aHead = this.findFather(this.nodes.get(a))
    let bHead = this.findFather(this.nodes.get(b))
    if (aHead != bHead) {
      let big = this.sizeMap.get(aHead) >= this.sizeMap.get(bHead) ? aHead : bHead
      let small = big == aHead ? bHead : aHead

      this.parents.set(small, big)
      this.sizeMap.set(big, this.sizeMap.get(big) + this.sizeMap.get(small))
      this.sizeMap.delete(small)
    }
  }
}

/* const arr1 = [1, 2, 3, 4, 5];
 * let union = new UnionSet(arr1);
 * console.log(union.nodes);
 * console.log(union.isSameSet(2, 4));
 * union.union(2, 4);
 * console.log(union.isSameSet(2, 4)); */

// arr -> item: name, cell, group
const mergeUsers = (arr) => {
  if (arr == null || arr.length == 0) {
    return 0
  }
  let usersSet = new UnionSet(arr)
  let nameMap = new Map()
  let cellMap = new Map()
  let groupMap = new Map()

  for (let i = 0; i < arr.length; i++) {
    if (!nameMap.has(arr[i].name)) {
      nameMap.set(arr[i].name, i)
    } else {
      let index = nameMap.get(arr[i].name)
      usersSet.union(arr[index], arr[i])
    }

    if (!cellMap.has(arr[i].cell)) {
      cellMap.set(arr[i].cell, i)
    } else {
      let index = cellMap.get(arr[i].cell)
      usersSet.union(arr[index], arr[i])
    }

    if (!groupMap.has(arr[i].group)) {
      groupMap.set(arr[i].group, i)
    } else {
      let index = groupMap.get(arr[i].group)
      usersSet.union(arr[index], arr[i])
    }
  }
  return usersSet.sizeMap.size
}

const arrUsers = [
  { name: 'jack', cell: 123, group: 'apple' },
  { name: 'jovi', cell: 124, group: 'orange' },
  { name: 'jocker', cell: 233, group: 'apple' },
  { name: 'kitty', cell: 124, group: 'lemon' },
  { name: 'aaron', cell: 123, group: 'mango' },
]

console.log(mergeUsers(arrUsers))
