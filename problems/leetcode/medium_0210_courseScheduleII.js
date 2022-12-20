// 210. Course Schedule II

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// - For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

class Node {
  constructor(value) {
    this.value = value
    this.in = 0
    this.nexts = []
  }
}

class Graph {
  constructor() {
    this.nodes = new Map() // key: node.value, value: node
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  if (numCourses == 0 || !prerequisites) return []
  if (numCourses !== 0 && prerequisites?.length == 0) {
    let res = []
    for (let i = 0; i < numCourses; i++) {
      res.push(i)
    }
    return res
  }

  let graph = new Graph()
  for (let [to, from] of prerequisites) {
    if (!graph.nodes.has(from)) {
      graph.nodes.set(from, new Node(from))
    }
    if (!graph.nodes.has(to)) {
      graph.nodes.set(to, new Node(to))
    }
    let nodeF = graph.nodes.get(from)
    let nodeT = graph.nodes.get(to)
    nodeF.nexts.push(nodeT)
    nodeT.in++
  }

  let count = graph.nodes.size
  let zeroInQueue = []
  let result = []
  for (let node of graph.nodes.values()) {
    if (node.in == 0) {
      zeroInQueue.push(node)
    }
  }

  while (zeroInQueue.length > 0) {
    let node = zeroInQueue.shift()
    result.push(node.value)
    for (let next of node.nexts) {
      next.in--
      if (next.in == 0) {
        zeroInQueue.push(next)
      }
    }
  }

  if (result.length == count) {
    for (let i = 0; i < numCourses; i++) {
      if (result.indexOf(i) == -1) {
        result.push(i)
      }
    }
    return result
  } else {
    return []
  }
}

let numCourses1 = 2
const prerequisites1 = [[1, 0]]
console.log(findOrder(numCourses1, prerequisites1))

let numCourses2 = 4
const prerequisites2 = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]
console.log(findOrder(numCourses2, prerequisites2))

let numCourses3 = 1
const prerequisites3 = []
console.log(findOrder(numCourses3, prerequisites3))
