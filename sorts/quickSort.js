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
const netherlandsFlag = (arr, num) => {
  if (!arr || arr.length < 2) return
  let smallI = -1
  let bigI = arr.length - 1
  let i = 0
  while (i <= bigI) {
    if (arr[i] < num) {
      swap(arr, ++smallI, i++)
    } else if (arr[i] > num) {
      swap(arr, i, bigI--)
    } else {
      i++
    }
  }
  return [smallI+1, bigI]
}
const arr2 = [3, 5, 4, 0, 4, 6, 7, 2]
const equalPart = netherlandsFlag(arr2, 4)
console.log(arr2, equalPart)
