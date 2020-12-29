const mergeSort = (arr) => {
    if (arr == null || arr.length < 2) {
        return;
    }
    process(arr, 0, arr.length - 1);
}

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

/* 非递归方式 */
const mergeSort1 = (arr) => {
    if (arr == null || arr.length < 2) {
        return;
    }
    const N = arr.length;
    let mergeSize = 1;  // 当前有序的，左组的长度
    while (mergeSize < N) {
        let L = 0;
        while (L < N) {
            // L..M 左组（mergeSize）
            let M = L + mergeSize - 1;
            if (M >= N) {
                break;
            } 
            // M+1..R 右组 （mergeSize）
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

/* const arr1 = [2, 9, 3, 8, 5, 4, 7, 1, 6];
 * mergeSort1(arr1);
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
