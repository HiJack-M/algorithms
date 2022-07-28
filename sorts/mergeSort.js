const mergeSort = (arr) => {
  if (arr == null || arr.length < 2) {
    return;
  }
  process(arr, 0, arr.length - 1);
}

// process 就是用来处理递归的
const process = (arr, L, R) => {
  // base case
  if (L === R) {
    return;
  }
  let m = L + ((R - L) >> 1);
  process(arr, L, m);
  process(arr, m + 1, R);
  merge(arr, L, m, R);
}
const merge = (arr, L, m, R) => {
  let help = [];
  let p1 = L;
  let p2 = m + 1;
  while (p1 <= m && p2 <= R) {
    help.push(arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]);
  }
  while (p1 <= m) {
    help.push(arr[p1++]);
  }
  while (p2 <= R) {
    help.push(arr[p2++]);
  }
  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }
}

/* const arr1 = [2, 9, 3, 8, 5, 4, 7, 1, 6];
 * mergeSort(arr1);
 * console.log(arr1); */

const mergeSortNoRecursion = (arr) => {
    if (arr == null || arr.length < 2) {
        return;
    }
    let N = arr.length;
    let mergeSize = 1;
    while (mergeSize < N) { // 迭代外层，用当前 mergeSize 大小来归并
        let L = 0;
        while (L < N) { // 迭代内层，每一次归并
            let M = L + mergeSize - 1;
            if (M >= N) {
                break;
            }
            let R = Math.min(M + mergeSize, N - 1);
            merge(arr, L, M, R);
            L = R + 1;
        }
        if (mergeSize > (N >> 1)) {
            break;
        }
        mergeSize <<= 1;
    }
}
const arr1 = [2, 9, 3, 8, 5, 4, 7, 1, 6];
mergeSortNoRecursion(arr1);
console.log(arr1);

// 归并排序复杂度：
//
// T(N) = 2*T(N/2) + O(N^1)*
//
// *根据master可知时间复杂度为O(N*logN)
//
// merge过程需要辅助数组，所以额外空间复杂度为O(N)
//
// 归并排序的实质是 把比较行为变成了有序信息并传递，比O(N^2)的排序快
