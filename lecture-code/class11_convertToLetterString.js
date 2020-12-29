/* 规定1和A对应、2和B对应、3和C对应…
 * 那么一个数字字符串比如"111”就可以转化为: "AAA"、"KA"和”AK"
 * 给定一个只有数字字符组成的字符串str，返回有多少种转化结果 */

const convertToLetterString = (numStr) => {
    if (numStr == null || numStr.length == 0) {
        return 0;
    }
    return process(numStr, 0);
}

// i 之前的位置已经做过转化了，不用再关心
// i... 有多少种转化的结果
const process = (str, i) => {
    // base case
    if (i == str.length) {
        return 1;
    }

    // i 没有到终止位置
    
    // 0 不会单独构成转化，只有 10 和 20 的情况
    // i 位置单独出现 0，说明前面决定的路错了，此路不通（分支限界）
    if (str[i] == '0') {
        return 0;
    }
    if (str[i] == '1') {
        let res = process(str, i + 1);
        if (i + 1 < str.length) {
            res += process(str, i + 2);
        }
        return res;
    }
    if (str[i] == '2') {
        let res = process(str, i + 1);
        if (i + 1 < str.length && (str[i + 1] >= '0' && str[i + 1] <= '6')) {
            res += process(str, i + 2);
        }
    }
    // i 位置是 3 ~ 9，只有一种情况，i 位置单独转化
    return process(str, i + 1);
}

let numStr = '01111';
let ans = convertToLetterString(numStr);
console.log(ans);

const convertToLetterStringDp = (numStr) => {
    if (numStr == null || numStr.length == 0) {
        return 0;
    }
    let N = numStr.length;
    let dp = new Array(N + 1);
    dp[N] = 1;
    for (let i = N - 1; i >= 0; i--) {
        if (numStr[i] == '0') {
            dp[i] = 0;
        } else if (numStr[i] == '1') {
            let res = dp[i + 1];
            if (i + 1 < numStr.length) {
                res += dp[i + 2];
            }
            dp[i] = res;
        } else if (numStr[i] == '2') {
            let res = dp[i + 1];
            if (i + 1 < numStr.length && (numStr[i + 1] >= '0' && numStr[i + 1] <= '6')) {
                res += dp[i + 2];
            }
        } else {
            dp[i] = dp[i + 1];
        }
    }
    return dp[0];
}
let ansDp = convertToLetterStringDp(numStr);
console.log(ansDp);
