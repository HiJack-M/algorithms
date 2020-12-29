/* 【在一个数组中，一个数左边比它小的数的总和，叫数的小和，所有数的小和累加起来，叫数组小和。求数组小和。】
 * 例子： [1,3,4,2,5]
 * 1左边比1小的数：没有
 * 3左边比3小的数：1
 * 4左边比4小的数：1、3
 * 2左边比2小的数：1
 * 5左边比5小的数：1、3、4、 2
 * 所以数组的小和为1+1+3+1+1+3+4+2=16 */

const smallSum = (arr) => {
    if (arr == null || arr.length < 2) {
        return 0;
    }
    return process(arr, 0, arr.length - 1);
}

const process = (arr, l, r) => {
    if (l === r) {
        return 0;
    }
    let m = l + ((r - l) >> 1);
    return process(arr, l, m) + process(arr, m + 1, r) + merge(arr, l, m, r);
}

const merge = (arr, l, m, r) => {
    let help = [];
    let p1 = l;
    let p2 = m + 1;
    let res = 0;
    while (p1 <= m && p2 <= r) {
        res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
        help.push(arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]);
    }
    while (p1 <= m) {
        help.push(arr[p1++]);
    }
    while (p2 <= r) {
        help.push(arr[p2++]);
    }
    for (let i = 0; i < help.length; i++) {
        arr[l + i] = help[i];
    }
    return res;
}

const arr1 = [3, 1, 4, 2, 5];
console.log(smallSum(arr1));
