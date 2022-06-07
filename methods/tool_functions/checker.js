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
