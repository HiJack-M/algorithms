class Node {
  constructor(value) {
    this.value = value
    this.in = 0
    this.out = 0
    this.nexts = []
    this.edges = []
  }
}

class Edge {
  constructor(weight, from, to) {
    this.weight = weight
    this.from = from
    this.to = to
  }
}

class Graph {
  constructor() {
    this.nodes = new Map() // (int, node) 键值对：value, node
    this.edges = new Set()
  }
}

// 给到的题中的结构，自己写接口转成自己熟悉的图结构

const topology = (graph) => {
  if (!graph) return null
  let result = []

  let inMap = new Map() // key: node, value: 该节点剩余入度
  let zeroInQueue = []
  for (let node of graph.nodes.values()) {
    inMap.set(node, node.in)
    if (node.in == 0) {
      zeroInQueue.push(node)
    }
  }

  while (zeroInQueue.length > 0) {
    let cur = zeroInQueue.shift()
    result.push(cur)
    for (let i = 0; i < cur.nexts.length; i++) {
      let newIn = inMap.get(cur.nexts[i]) - 1
      inMap.set(cur.nexts[i], newIn)
      if (newIn == 0) {
        zeroInQueue.push(cur.nexts[i])
      }
    }
  }

  return result
}
