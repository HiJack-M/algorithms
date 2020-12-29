const getMax = (arr) => {
    return process(arr, 0, arr.length - 1);
}

const process = (arr, l, r) => {
    if (l == r) {
        return arr[l];
    }
    /* let mid = parseInt(l + (r - l) / 2); */
    let mid = l + ((r - l) >> 1);
    let left = process(arr, l, mid);
    let right = process(arr, mid + 1, r);
    return Math.max(left, right);
}

const arr1 = [1, 9, 3, 6, 2, 5, 7];
let max = getMax(arr1);
console.log(max);
