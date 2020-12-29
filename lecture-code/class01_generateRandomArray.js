const generateRandomArray = (maxSize, maxValue) => {
    const arr = new Array(parseInt(maxSize * Math.random()));
    for (let i = 0; i < arr.length; i++) {
        // 为了能产生负数
        arr[i] = parseInt((maxValue + 1) * Math.random()) - parseInt(maxValue * Math.random());
    }
    return arr;
}

const isEqual = (arr1, arr2) => {
    if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
        return false;
    }
    if (arr1 === null && arr2 === null) {
        return true;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// 二分法
const exist = (arr, num) => {
    if (arr === null || arr.length === 0) {
        return false;
    }
    let L = 0;
    let R = arr.length - 1;
    let mid = 0;
    while (L < R) {
        mid = L + ((R - L) >> 1);
        if (arr[mid] === num) {
            return true;
        } else if (arr[mid] > num) {
            R = mid - 1;
        } else {
            L = mid + 1;
        }
    }
    return arr[L] === num;
}

// 在 arr 上，找满足 >= value 的最左侧的位置
const nearestIndex = (arr ,value) => {
    let l = 0;
    let r = arr.length - 1;
    let index = -1;
    let mid;
    while (l <= r) {
        mid = l + ((r - l) >> 1);  
        if (arr[mid] >= value) {
            index = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return index;
}
