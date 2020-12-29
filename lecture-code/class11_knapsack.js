/* 给定两个长度都为N的数组weights和values，
 * weights[i]和values[i]分别代表 i号物品的重量和价值。
 * 给定一个正数bag，表示一个载重bag的袋子，你装的物品不能超过这个重量。
 * 返回你能装下最多的价值是多少? */

const getMaxValue1 = (weights, values, bag) => {
    return process1(weights, values, 0, 0, bag);
}

// index 和之后选择的货物的价值，前面的不管
// 0...index-1上做了货物的选择，alreadyW 只记录前面决定的总价值
// 若返回 -1，则认为没有方案
// 若不返回 -1，则返回的是真实价值
const process1 = (w, v, index, alreadyW, bag) => {
    if (alreadyW > bag) {
        return -1;
    }
    // 重量没超
    // 来到结束点，该点无货物无价值
    if (index == w.length) {
        return 0;
    }
    // 不要当前货，接下来的货物产生的价值
    let p1 = process1(w, v, index + 1, alreadyW, bag);
    // 要当前货，后面的货物能产生的最大价值
    let p2Next = process1(w, v, index + 1, alreadyW + w[index], bag);
    let p2 = -1;
    // 要了当前的货，后面的货的方案是可行的（不为-1）
    if (p2Next != -1) {
        p2 = v[index] + p2Next;
    }
    return Math.max(p1, p2);
}

const getMaxValue2 = (weights, values, bag) => {
    return process2(weights, values, 0, bag);
}

// 只剩 rest 的空间了
// index... 货物自由选择，但不能超过 rest 空间
// 返回能够获得的最大价值
const process2 = (w, v, index, rest) => {
    // base case 1
    if (rest <= 0) {
        return 0;
    }
    // rest >= 0
    if (index == w.length) {
        return 0;
    }
    // 有货也有空间
    let p1 = process2(w, v, index + 1, rest);
    let p2 = -Infinity;
    if (rest >= w[index]) {
        let p2Next = process2(w, v, index + 1, rest - w[index]);
        p2 = p2Next + v[index];
    }
    return Math.max(p1, p2);
}

const weights1 = [3, 2, 4, 7];
const values1 = [5, 6, 3, 19];
let bag1 = 11;
let maxValue1 = getMaxValue1(weights1, values1, bag1);
let maxValue2 = getMaxValue2(weights1, values1, bag1);
console.log(maxValue1, '|', maxValue2);

const getMaxValueDp = (weights, values, bag) => {
    let dp = [];
    let N = weights.length;
    for (let i = 0; i <= N; i++) {
        let row = new Array(bag + 1);
        row.fill(0);
        dp[i] = row;
    }
    for (let i = N - 1; i >= 0; i--) {
        for (let j = 0; j <= bag; j++) {
            let p1 = dp[i + 1][j];
            let p2 = -1;
            if (j >= weights[i]) {
                p2 = dp[i + 1][j - weights[i]] + values[i];
            }
            dp[i][j] = Math.max(p1, p2);
        }
    }
    return dp[0][bag];
}

let maxValue3 = getMaxValueDp(weights1, values1, bag1);
console.log(maxValue3);
