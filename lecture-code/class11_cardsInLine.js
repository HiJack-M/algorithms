/* 给定一个整型数组arr，代表数值不同的纸牌排成一条线，
 * 玩家A和玩家B依次拿走每张纸牌，
 * 规定玩家A先拿，玩家B后拿，
 * 但是每个玩家每次只能拿走最左或最右的纸牌，
 * 玩家A和玩家B都绝顶聪明。请返回最后获胜者的分数。 */

const winCards1 = (arr) => {
    if (arr == null || arr.length == 0) {
        return 0;
    }
    return Math.max(f(arr, 0, arr.length - 1), s(arr, 0, arr.length - 1));
}

// 在 (l, r) 范围中先拿牌的人，就在 (l+1, r) 或 (l, r-1) 上后拿(取决于你刚刚先拿的是 l 或 r)
// 那先拿的人肯定要最大者
const f = (arr, l, r) => {
    if (l == r) {
        return arr[l];
    }
    return Math.max(arr[l] + s(arr, l + 1, r), arr[r] + s(arr, l, r - 1));
}

// 在某个范围上后拿的人是没有这个范围上的决定权的
// 先拿的人不会把大的留给后者，所以后者肯定在一个较差的范围上进行先拿选择(都是正数，你差他就好)
const s = (arr, l, r) => {
    if (l == r) {
        return 0;
    }
    return Math.min(f(arr, l + 1, r), f(arr, l, r - 1));
}

let arr1 = [4, 7, 9, 5];
console.log(winCards1(arr1));

const winCardsDp = (arr) => {
    if (arr == null || arr.length == 0) {
        return 0;
    }
    let N = arr.length;
    // 初始化两个二维数组
    let f = [];
    let s = [];
    for (let i = 0; i < N; i++) {
        let fCol = new Array(N);
        let sCol = new Array(N);
        fCol.fill(0);
        sCol.fill(0);
        f[i] = fCol;
        s[i] = sCol;
    }

    // 填值
    for (let i = 0; i < N; i++) {
        f[i][i] = arr[i];
    }
    // 填对角线的各个值，不懂看印象笔记
    for (let i = 1; i < N; i++) {
        L = 0;
        R = i;
        while (L < N && R < N) {
            f[L][R] = Math.max((arr[L] + s[L + 1][R]), (arr[R] + s[L][R - 1]));
            s[L][R] = Math.min(f[L + 1][R], f[L][R - 1]);
            L++;
            R++;
        }
    }
    return Math.max(f[0][N - 1], s[0][N - 1]);
}

console.log(winCardsDp(arr1));
