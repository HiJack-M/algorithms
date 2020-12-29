const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const partition = (arr, l, r) => {
    if (l > r) return -1;
    if (l === r) return l;
    let smallParI = l - 1;
    let num = arr[r];
    for (let i = l; i <= r; i++) {
        if (arr[i] <= num) {
            swap(arr, i, ++smallParI);
        }
    }
    return smallParI;
}

const arr1 = [5, 3, 7, 2, 4, 1, 3];
console.log('partition: ', partition(arr1, 0, 6));

const netherlandsFlag = (arr, l, r, num) => {
    // 但凡进来的参数记得先比较过滤
    if (l > r) return [-1, -1];
    if (l === r) return [l, r];

    // 大哥，arr[num] 这个值在你排序过程中是会变的，先保存一个初始值
    let pivot = arr[num];
    let smallParI = l - 1;
    let bigParI = r + 1;
    let i = l;
    while (i < bigParI) {
        if (arr[i] < pivot) {
            swap(arr, i++, ++smallParI);
        } else if (arr[i] > pivot) {
            swap(arr, i, --bigParI);
        } else {
            i++;
        }
    }

    return [smallParI + 1, bigParI - 1];
}

const arr2 = [3, 5, 4, 0, 4, 6, 7, 2];
console.log('netherlandsFlag: ', netherlandsFlag(arr2, 0, 7, 2));

/* 快速排序 */
const quickSort = (arr) => {
    if (arr == null || arr.length < 2) return;
    process3(arr, 0, arr.length - 1);
}

const process = (arr, l, r) => {
    if (l >= r) return;
    let M = partition(arr, l, r);
    // M 下标处的值就放这里不用动了，也不用递归传进去了，传左右两边
    process(arr, l, M - 1);
    process(arr, M + 1, r);
}

const process3 = (arr, l, r) => {
    if (l >= r) return;

    let num = Math.round(Math.random() * (r - l + 1));
    let equalArea = netherlandsFlag(arr, l, r, arr[num]);
    console.log('equalArea: ', equalArea);
    process3(arr, l, equalArea[0] - 1);
    process3(arr, equalArea[1] + 1, r);
}

const arr3 = [3, 5, 4, 0, 4, 6, 7, 2, 8, 3, 5, 0, 9, 1];
quickSort(arr3);
console.log(arr3);
