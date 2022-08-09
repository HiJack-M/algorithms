const radixSort = (arr) => {
    if (arr === null || arr.length < 2) {
        return;
    }

    radixSortProcess(arr, 0, arr.length - 1, maxBits(arr));
}

// 获取 arr 中最大值的位数
const maxBits = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = arr[i] > max ? arr[i] : max;
    }
    return max.toString().length;
}

// 获取某个数的某个位上的数
const getDigit = (x, d) => {
    return Math.floor(x / Math.pow(10, d - 1)) % 10;
}

const radixSortProcess = (arr, l, r, digit) => {
    let help = [];
    let radix = 10;
    // 位 从低到高（最后排权重最大的）
    for (let d = 1; d <= digit; d++) {
        let count = new Array(radix);
        count.fill(0);
        for (let i = l; i <= r; i++) {
            let j = getDigit(arr[i], d);
            count[j]++;
        }
        // !!! 神马玩意儿，我搞不定这种高端思路，请直接翻到下方的 primary 版本
        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }
        for (let i = r; i >= l; i--) {
            let j = getDigit(arr[i], d);
            help[count[j] - 1] = arr[i];
            count[j]--;
        }
        for (let i = 0; i < help.length; i++) {
            arr[l + i] = help[i];
        }
    }
}

const arr1 = [123, 224, 12, 9, 87, 233, 66, 3];
radixSort(arr1);
console.log(arr1);

const primaryRadixSort = (arr) => {
    if (arr == null || arr.length < 2) {
        return;
    }
    primaryRadixProcess(arr, maxBits(arr));
}

const getDigit1 = (x, d) => {
    return parseInt(x / Math.pow(10, d - 1)) % 10;
}

const primaryRadixProcess = (arr, size) => {
    // 准备 radix 个数的篮子
    let bucket = new Array(10);
    // 初始化每个篮子，用来装当下位数的值匹配的数
    for (let i = 0; i < bucket.length; i++) {
        bucket[i] = [];
    }
    // 位 从低到高（最后排权重最大的）
    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < arr.length; j++) {
            let item = getDigit1(arr[j], i);
            bucket[item].push(arr[j]);
        }
        let index = 0;
        for (let j = 0; j < bucket.length; j++) {
            while (bucket[j].length > 0) {
                arr[index++] = bucket[j].shift();
            }
        }
    }
}

const arr2 = [123, 224, 12, 9, 87, 233, 66, 3];
primaryRadixSort(arr2);
console.log(arr2);
