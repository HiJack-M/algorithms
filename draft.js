// 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

class Node {
  constructor(val) {
    this.value = val
    this.in = 0
    this.next = []
  }
}

class Graph {
  constructor() {
    this.nodes = new Map() // key: val, value: node
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (!prerequisites || prerequisites.length < 2) return true

  const courseGraph = new Graph()
  for (let i = 0; i < prerequisites.length; i++) {
    let item = prerequisites[i]

    let inNode
    if (courseGraph.nodes.has(item[1])) {
      inNode = courseGraph.nodes.get(item[1])
    } else {
      inNode = new Node(item[1])
      courseGraph.nodes.set(item[1], inNode)
    }

    let nextNode
    if (courseGraph.nodes.has(item[0])) {
      nextNode = courseGraph.nodes.get(item[0])
    } else {
      nextNode = new Node(item[0])
      courseGraph.nodes.set(item[0], nextNode)
    }

    inNode.next.push(nextNode)
    nextNode.in++
  }

  let needPrerequisites = courseGraph.nodes.size

  let zeroInNode = []
  for (let node of courseGraph.nodes.values()) {
    if (node.in === 0) {
      zeroInNode.push(node)
    }
  }

  let count = 0

  while (zeroInNode.length > 0) {
    let inNode = zeroInNode.shift()
    count++

    for (let i = 0; i < inNode.next.length; i++) {
      let nextNode = inNode.next[i]
      nextNode.in--

      if (nextNode.in === 0) {
        zeroInNode.push(nextNode)
      }
    }
  }

  return needPrerequisites === count
}

let numCourses1 = 2
const prerequisites1 = [[1, 0]]
console.log(canFinish(numCourses1, prerequisites1))

let numCourses2 = 2
const prerequisites2 = [
  [1, 0],
  [0, 1],
]
console.log(canFinish(numCourses2, prerequisites2))
