const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 给定一个数组arr，和一个整数num。请把小于等于num的数放在数组的左边，大于num的数放在数组的右边。 要求额外空间复杂度O(1)，时间复杂度O(N)
// 返回值：小于等于 num 的最右值的下标
const partition = (arr, num) => {
  if (!arr || arr.length < 2) return
  let smallI = -1
  let bigI = arr.length - 1
  let i = 0
  while (i <= bigI) {
    if (arr[i] <= num) {
      swap(arr, ++smallI, i++)
    } else {
      swap(arr, i, bigI--)
    }
  }
  return i-1
}

const arr1 = [5, 3, 7, 2, 4, 1, 3]
const pivot =  partition(arr1, 3)
console.log(arr1, pivot)

// 给定一个数组arr，和一个整数num。请把小于num的数放在数组的左边，等于num的数放在中间，大于num的数放在数组的右边。 要求额外空间复杂度O(1)，时间复杂度O(N)
const netherlandsFlag = (arr, l, r, num) => {
  if (l > r) return [-1, -1]
  if (l == r) return [l, r]

  let pivot = arr[num]
  let smallI = l - 1
  let bigI = r + 1
  let i = l
  while (i < bigI) {
    if (arr[i] < pivot) {
      swap(arr, ++smallI, i++)
    } else if (arr[i] > pivot) {
      swap(arr, i, --bigI)
    } else {
      i++
    }
  }
  return [smallI + 1, bigI - 1]
}

// const arr2 = [3, 5, 4, 0, 4, 6, 7, 2]
// const equalPart = netherlandsFlag(arr2, 0, 7, 2)
// console.log(arr2, equalPart)
//
// const arr3 = [3, 5, 4, 0, 4, 6, 7, 2, 8, 3, 5, 0, 9, 1]
// let num = Math.round(Math.random() * (13 - 0 + 1))
// console.log('num: ', num)
// const equalPart1 = netherlandsFlag(arr3, 0, arr3.length - 1, num)
// console.log(arr3, equalPart1)

const quickSort = (arr) => {
  if (!arr || arr.length < 2) return
  process(arr, 0, arr.length - 1)
}

const process = (arr, l, r) => {
  if (l >= r) return
  let equalArea = netherlandsFlag(arr, l, r, r)
  console.log('equalArea: ', equalArea)
  process(arr, l, equalArea[0] - 1)
  process(arr, equalArea[1] + 1, r)
}

const arr2 = [3, 5, 4, 0, 4, 6, 7, 2]
quickSort(arr2)
console.log(arr2)

// const arr3 = [3, 5, 4, 0, 4, 6, 7, 2, 8, 3, 5, 0, 9, 1]
// quickSort(arr3)
// console.log(arr3)
