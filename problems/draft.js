const mergeSort = (arr) => {
  if (!arr || arr.length < 2) return
  process(arr, 0, arr.length - 1)
}

const process = (arr, l, r) => {
  if (l == r) return

  let mid = l + ((r - l) >> 1)
  process(arr, l, mid)
  process(arr, mid + 1, r)
  merge(arr, l, mid, r)
}

const merge = (arr, l, m, r) => {
  let lp = l
  let rp = m + 1
  let temp = []
  while (lp <= m && rp <= r) {
    if (arr[lp] <= arr[rp]) {
      temp.push(arr[lp++])
    } else {
      temp.push(arr[rp++])
    }
  }
  while (lp <= m) {
    temp.push(arr[lp++])
  }
  while (rp <= r) {
    temp.push(arr[rp++])
  }
  let i = l
  while (temp.length > 0) {
    arr[i++] = temp.shift()
  }
}

const arr1 = [2, 9, 3, 8, 5, 4, 7, 1, 6];
mergeSort(arr1);
console.log(arr1);
