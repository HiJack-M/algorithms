/* 已知一个几乎有序的数组。
 * 几乎有序是指，如果把数组排好顺序的话，每个元素移动的距离一定不超过k，并且k相对于数组长度来说是比较小的。
 * 请选择一个合适的排序策略，对这个数组进行排序。 */

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const heapInsertMin = (arr, start, end) => {
    // 从最后一个新进的往上找父节点，大的往下沉
    let parent = (end - 1) >> 1;
    while (parent >= start) {
        let bigI = arr[end] > arr[parent] ? end : parent;
        if (end === bigI) {
            break;
        }
        swap(arr, end, bigI);
        end = bigI;
        parent = Math.floor((end - 1) / 2);
    }
}

const sortArrayDistanceLessK = (arr, k) => {
    let result = [];
    while (arr.length > 0) {
        for (let i = 0; i < Math.min(arr.length, k); i++) {
            heapInsertMin(arr, 0, i);
            console.log(arr);
        }
        result.push(arr.shift(0));
    }
    for (let i = 0; i < result.length; i++) {
        arr[i] = result[i];
    }
}

const arr1 = [1, 3, 2, 0, 6, 5, 4, 8, 7];
sortArrayDistanceLessK(arr1, 4);
console.log(arr1);

// 本想不用 result（help），用滑动窗口，但这样在 insert 时下标就会逐个增大，找 parents 不便（6 会找 2，超出）
