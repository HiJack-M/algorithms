const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// arr[i] 刚来的数，往上
const heapInsert = (arr, i) => {
    while (arr[i] > arr[Math.floor((i - 1) / 2)]) {
        swap(arr, i, Math.floor((i - 1) / 2));
        i = Math.floor((i - 1) / 2);
    }
}

// arr[index]位置的数，能否往下移动
const heapify = (arr, index, end) => {
    let left = index * 2 + 1; // 左孩子的下标
    while (left <= end) { // 下方还有孩子的时候
        // 两个孩子中，谁的值大，把下标给largest
        // 1）只有左孩子，left -> largest
        // 2) 同时有左孩子和右孩子，右孩子的值<= 左孩子的值，left -> largest
        // 3) 同时有左孩子和右孩子并且右孩子的值> 左孩子的值， right -> largest
        let largest = (left + 1 <= end) && arr[left + 1] > arr[left] ? left + 1 : left;
        largest = arr[index] > arr[largest] ? index : largest;
        // !!! 应该判断当前 index 是最大时，就停止跳出
        // 如果去判断 index 不是最大时就继续的话，line 27 的 index 永远都够不到 end
        if (largest === index) {
            break;
        };
        swap(arr, index, largest);
        index = largest;
        left = index * 2 + 1;
    }
}

const heapSort = (arr) => {
    if (arr == null || arr.length < 2) {
        return;
    }
    // 构建大根堆
    for (let i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
    }
    // 每次取堆顶，交换到数组最后，交换到下标 0 处的点做 heapify
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, i - 1);
    }
}

const arr1 = [5, 3, 0, 3, 1, 7, 5, 9, 8, 2, 7, 9, 6, 4, 1];
heapSort(arr1);
console.log(arr1);
