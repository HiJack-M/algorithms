const generateRandomArray = (maxSize, maxValue) => {
    const arr = new Array(parseInt(maxSize * Math.random()));
    for (let i = 0; i < arr.length; i++) {
        // 为了能产生负数
        arr[i] = parseInt((maxValue + 1) * Math.random()) - parseInt(maxValue * Math.random());
    }
    return arr;
}

// Math.random() returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
// parseInt() ~~ Math.floor
