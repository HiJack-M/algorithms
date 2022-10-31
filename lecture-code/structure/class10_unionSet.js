// class10_UnionFind

class Node {
  constructor(value) {
    this.value = value
  }
}

class UnionSet {
  constructor(arr) {
    this.nodes = new Map() // value -> Node
    this.parents = new Map() // Node -> ParentNode
    this.sizeMap = new Map() // ParentNode -> Size

    for (let i = 0; i < arr.length; i++) {
      let node = new Node(arr[i])
      this.nodes.set(arr[i], node)
      this.parents.set(node, node)
      this.sizeMap.set(node, 1)
    }
  }

  findParent(node) {
    if (!this.parents.has(node)) return null

    let path = []

    while (node != this.parents.get(node)) {
      path.push(node)
      node = this.parents.get(node)
    }

    while (path.length > 0) {
      this.parents.set(path.shift(), node)
    }

    return node
  }

  isSameSet(valA, valB) {
    if (!this.nodes.has(valA) || !this.nodes.has(valB)) return false
    return this.findParent(this.nodes.get(valA)) == this.findParent(this.nodes.get(valB))
  }

  union(valA, valB) {
    if (!this.nodes.has(valA) || !this.nodes.has(valB)) return

    let headA = this.findParent(this.nodes.get(valA))
    let headB = this.findParent(this.nodes.get(valB))

    if (headA != headB) {
      let big = this.sizeMap.get(headA) >= this.sizeMap.get(headB) ? headA : headB
      let small = big == headA ? headB : headA
      this.parents.set(small, big)
      this.sizeMap.set(big, this.sizeMap.get(big) + this.sizeMap.get(small))
      this.sizeMap.delete(small)
    }
  }
}

// const arr1 = [1, 2, 3, 4, 5]
// let union = new UnionSet(arr1)
// console.log(union.nodes)
// console.log(union.isSameSet(2, 4))
// union.union(2, 4)
// console.log(union.isSameSet(2, 4))

const mergeUsers = (arr) => {
  if (!arr || arr.length == 0) return

  let unionSet = new UnionSet(arr)
  let nameMap = new Map() // arr[i].name, i
  let cellMap = new Map()
  let groupMap = new Map()

  for (let i = 0; i < arr.length; i++) {
    if (!nameMap.has(arr[i].name)) {
      nameMap.set(arr[i].name, i)
    } else {
      let index = nameMap.get(arr[i].name)
      unionSet.union(arr[index], arr[i])
    }

    if (!cellMap.has(arr[i].cell)) {
      cellMap.set(arr[i].cell, i)
    } else {
      let index = cellMap.get(arr[i].cell)
      unionSet.union(arr[index], arr[i])
    }

    if (!groupMap.has(arr[i].group)) {
      groupMap.set(arr[i].group, i)
    } else {
      let index = groupMap.get(arr[i].group)
      unionSet.union(arr[index], arr[i])
    }
  }

  return unionSet.sizeMap.size
}

const arrUsers = [
  { name: 'jack', cell: 123, group: 'apple' },
  { name: 'jovi', cell: 124, group: 'orange' },
  { name: 'jocker', cell: 233, group: 'apple' },
  { name: 'kitty', cell: 124, group: 'lemon' },
  { name: 'aaron', cell: 123, group: 'mango' },
]

console.log(mergeUsers(arrUsers))
