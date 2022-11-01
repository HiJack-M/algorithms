class Node {
  constructor(value) {
    this.value = value // 该点的值
    this.in = 0 // 指向该点的边数
    this.out = 0 // 从该点出发的边数
    this.nexts = [] // 从该点连出去的点, node 数组
    this.edges = [] // 从该点连出去的边, edge 数组
  }
}

class Edge {
  constructor(weight, from, to) {
    // 权重，出发点，到达点
    this.weight = weight
    this.from = from
    this.to = to
  }
}

class Graph {
  constructor() {
    this.nodes = new Map() // (int, node) 键值对：value, node
    this.edges = new Set() // 图包含的边
  }
}

// matrix 所有的边
// N*3 的矩阵
// [weight, from 节点上面的值，to 节点上面的值]
const generateGraph = (matrix) => {
  if (matrix == null || matrix.length == 0) {
    return null
  }

  let graph = new Graph()
  for (let i = 0; i < matrix.length; i++) {
    let weight = matrix[i][0]
    let from = matrix[i][1]
    let to = matrix[i][2]

    if (!graph.nodes.has(from)) {
      graph.nodes.set(from, new Node(from))
    }
    if (!graph.nodes.has(to)) {
      graph.nodes.set(to, new Node(to))
    }
    let fromNode = graph.get(from)
    let toNode = graph.get(to)
    let edge = new Edge(weight, fromNode, toNode)
    fromNode.out++
    fromNode.nexts.push(toNode)
    fromNode.edges.push(edge)
    toNode.in++
    graph.edges.add(edge)
  }
  return graph
}
