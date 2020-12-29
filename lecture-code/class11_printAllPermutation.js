// 打印全排列

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const printAllPermutation = (str) => {
    let ans = [];
    if (!str || str.length == 0) return ans; 
    let path = '';
    process(str, path, ans);
    return ans;
}

const process = (str, path, ans) => {
    if (path.length == str.length) {
        ans.push(path);
        return;
    }
    for (let i = 0; i < str.length; i++) {
        if (path.indexOf(str[i]) == -1) {
            process(str, path + str[i], ans);
        }
    }
}

let ans = printAllPermutation('aaa');
console.log(ans);

// !!! 上面的是反例，是不对的，若给定 str 都是重复字母，那就没法继续了

const printAllPermutationUseArr = (str) => {
    let ans = [];
    if (str == null || str.length == 0) {
        return ans;
    }
    let arr = str.split('');
    process1(arr, 0, ans);
    return ans;
}

// 用 swap 就不用再创建新的结构，用原数组就可以
// str[...index-1] 都已经做好决定
// str[index...] 都有机会来到 index 位置
// index 到终止位置，str 当前的样子就是一种结果 -> 放入 ans
const process1 = (arr, index, ans) => {
    if (index == arr.length) {
        ans.push(arr.join(''));
        return;
    }
    for (let j = index; j < arr.length; j++) {
        swap(arr, index, j);
        process1(arr, index + 1, ans);
        swap(arr, index, j);
    }
}

let str1 = 'aaa';
let ans1 = printAllPermutationUseArr(str1);
console.log(ans1);

console.log('============');

/* 分支限界 */
const printAllPermutationNoRepeat = (str) => {
    let ans = [];
    if (str == null || str.length == 0) {
        return ans;
    }
    let arr = str.split('');
    process2(arr, 0, ans);
    return ans;
}

const process2 = (arr, index, ans) => {
    if (index == arr.length) {
        ans.push(arr.join(''));
        return;
    }
    let visit = new Array(26);
    visit.fill(false);
    for (let j = index; j < arr.length; j++) {
        if (!visit[arr[j].charCodeAt() - 97]) {
            visit[arr[j].charCodeAt() - 97] = true;
            swap(arr, index, j);
            process2(arr, index + 1, ans);
            swap(arr, index ,j);
        }
    }
}

let str2 = 'aaa';
let ans2 = printAllPermutationNoRepeat(str2);
console.log(ans2);
