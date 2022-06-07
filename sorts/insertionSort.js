const swap = (arr, i, j) => {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

const insertionSort = (arr) => {
  if (arr == null || arr.length < 2) return
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      } else {
        break
      }
    }
  }
}

const arr1 = [3,5,4,7,6,1,9,8,2]

// insertionSort(arr1)
// console.log(arr1)

const insertionSortV2 = (arr) => {
  if (arr == null || arr.length < 2) return
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1)
    }
  }
}

insertionSortV2(arr1)
console.log(arr1)

// 插入排序就是，从左到右遍历手中的牌，每遍历到一张，就拿它跟它左边的牌（从近到远）一一对比
// 如果当前选中的牌比左边的小则交换，一直到当前的牌大于左边的牌
