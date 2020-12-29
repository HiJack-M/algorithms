/* 【在一个数组中，求降序对（只要有一对数，前者比后者大的，就是一个降序对，不必相邻）】 */

const descendPair = (arr) => {
    if (arr == null || arr.length < 2) {
        return [];
    }
    return process(arr, 0, arr.length - 1);
}

const process = (arr, l, r) => {
    if (l === r) {
        return [];
    }
    let m = l + ((r - l) >> 1);
    return process(arr, l, m).concat(process(arr, m + 1, r)).concat(merge(arr, l, m, r));
}

const merge = (arr, l, m, r) => {
    let help = [];
    let result = [];
    // ! 注意这里是从右边开始
    // 若从小比起，那小的放进 help 后就没法再取之后比较的更大数构成降序对了
    let p1 = m;
    let p2 = r;
    while (p1 >= l && p2 >= m + 1) {
        if (arr[p1] >= arr[p2]) {   // p1 > p2 说明当前 p1 比 p2 及右半部分 p2 之前的数都要大
            for (let j = p2; arr[p1] > arr[j]; j--) {
                result.push([arr[p1], arr[j]]);
            }
            help.unshift(arr[p1--]);
        } else {
            help.unshift(arr[p2--]);
        }
    }
    while (p1 >= l) {
        help.unshift(arr[p1--]);
    }
    while (p2 >= m + 1) {
        help.unshift(arr[p2--]);
    }

    for (let i = 0; i < help.length; i++) {
        arr[l + i] = help[i];
    }
    return result;
}

/* const arr1 = [1, 1, 2, 2, 3, 1, 1, 1, 4, 4, 4]; */
const arr1 = [3, 1, 4, 2, 5];
const res = descendPair(arr1);
console.log(arr1);
console.log(res);
