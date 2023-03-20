// 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

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
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (!prerequisites || prerequisites.length < 2) return true

  let courseGraph = new Graph()
  for (let [to, from] of prerequisites) {
    if (!courseGraph.nodes.has(to)) {
      courseGraph.nodes.set(to, new Node(to))
    }
    if (!courseGraph.nodes.has(from)) {
      courseGraph.nodes.set(from, new Node(from))
    }
    let fromN = courseGraph.nodes.get(from)
    let toN = courseGraph.nodes.get(to)
    fromN.nexts.push(toN)
    toN.in++
  }

  let needPrerequisites = courseGraph.nodes.size

  let zeroInQueue = []
  for (let node of courseGraph.nodes.values()) {
    if (node.in == 0) {
      zeroInQueue.push(node)
    }
  }

  let count = 0

  // 若有循环，该循环一开始就找不到入度为 0 的点，不会进入 while
  while (zeroInQueue.length > 0) {
    let cur = zeroInQueue.shift()
    count++
    for (let i = 0; i < cur.nexts.length; i++) {
      let curNext = cur.nexts[i]
      curNext.in--
      if (curNext.in == 0) {
        zeroInQueue.push(curNext)
      }
    }
  }

  return count == needPrerequisites
}
