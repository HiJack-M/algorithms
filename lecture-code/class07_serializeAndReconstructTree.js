class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

let head = new Node(1);
head.right = new Node(2);
head.right.left = new Node(3);

const arrPre = [1, null, 2, 3, null, null, null]
const arrInfix = [null, 1, null, 3, null, 2, null]
const arrLevel = [1, null, 2, 3, null, null, null]

// 前序序列化与反序列化
const preSerial = (head) => {
  const res = []
  if (head) {
    const preSerialProcess = (node, res) => {
      if (!node) {
        res.push(null)
      } else {
        res.push(node.val)
        preSerialProcess(node.left, res)
        preSerialProcess(node.right, res)
      }
    }
    preSerialProcess(head, res)
  }
  return res
}
// console.log(preSerial(head))

const preBuild = (arr) => {
  if (!arr || arr.length == 0) return null
  const preBuildProcess = (arr) => {
    let curVal = arr.shift()
    if (!curVal) {
      return null
    } else {
      let curNode = new Node(curVal)
      curNode.left = preBuildProcess(arr)
      curNode.right = preBuildProcess(arr)
      return curNode
    }
  }
  return preBuildProcess(arr)
}
// console.log(preBuild(arrPre))

// 中序序列化与反序列化
const infixSerial = (head) => {
  const res = []
  if (head) {
    const infixSerialProcess = (node, res) => {
      if (!node) {
        res.push(null)
      } else {
        infixSerialProcess(node.left, res)
        res.push(node.val)
        infixSerialProcess(node.right, res)
      }
    }
    infixSerialProcess(head, res)
  }
  return res
}
// console.log('infix serial: ', infixSerial(head))

// !!! 中序无法反序列化，因为无法确定 root 节点
const infixBuild = (arr) => {
}

// 后序序列化
// 递归序一样的套路

// 后序反序列化
// 将数组逆序，然后用前序的思维进行【根右左】序列化


// 层序序列化与反序列化
// 层序序列化
const levelSerial = (head) => {
  const res = []
  if (head) {
    let queue = []
    queue.push(head)
    res.push(head.val) // 入栈时推入结果
    while (queue.length > 0) {
      let curNode = queue.shift()
      if (curNode.left) {
        queue.push(curNode.left)
        res.push(curNode.left.val)
      } else {
        res.push(null)
      }
      if (curNode.right) {
        queue.push(curNode.right)
        res.push(curNode.right.val)
      } else {
        res.push(null)
      }
    }
  }
  return res
}
// console.log('levelSerial: ', levelSerial(head))

// 层序反序列化
const levelBuild = (arr) => {
  if (!arr || arr.length == 0) return null
  let head = new Node(arr.shift())
  let queue = []
  queue.push(head)
  let curNode
  const generateNode = (val) => {
    return val ? new Node(val) : null
  }
  while (queue.length > 0) {
    curNode = queue.shift()
    curNode.left = generateNode(arr.shift())
    if (curNode.left) {
      queue.push(curNode.left)
    }
    curNode.right = generateNode(arr.shift())
    if (curNode.right) {
      queue.push(curNode.right)
    }
  }
  return head
}
console.log('levelBuild: ', levelBuild(arrLevel))
