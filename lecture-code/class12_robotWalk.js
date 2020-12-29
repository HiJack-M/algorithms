/* 假设有排成一行的N个位置，记为1~N，N 一定大于或等于 2
 * 开始时机器人在其中的M位置上(M 一定是 1~N 中的一个)
 * 如果机器人来到1位置，那么下一步只能往右来到2位置；
 * 如果机器人来到N位置，那么下一步只能往左来到 N-1 位置；
 * 如果机器人来到中间位置，那么下一步可以往左走或者往右走；
 * 规定机器人必须走 K 步，最终能来到P位置(P也是1~N中的一个)的方法有多少种
 * 给定四个参数 N、M、K、P，返回方法数。 */

const ways1 = (N, M, K, P) => {
    // 参数无效直接返回0
    if (N < 2 || M < 1 || K < 1 || M > N || P < 1 || P > N) {
        return 0;
    }
    let cacheMap = new Map();
    // 总共 N 个位置，从 M 出发，剩 K 步，到达 P 位置的方法数
    return walk1(N, M, K, P, cacheMap);
}

const walk1 = (N, cur, rest, P, map) => {
    if (map.has(`${cur}_${rest}`)) {
        return map.get(`${cur}_${rest}`);
    }
    if (rest == 0) {
        let res = cur == P ? 1 : 0;
        map.set(`${cur}_${rest}`, res);
        return res;
    }
    if (cur == 1) {
        let res = walk1(N, cur + 1, rest - 1, P, map);
        map.set(`${cur}_${rest}`, res);
        return res;
    } 
    if (cur == N) {
        let res = walk1(N, N - 1, rest - 1, P, map);
        map.set(`${cur}_${rest}`, res);
        return res;
    }
    let res = walk1(N, cur - 1, rest - 1, P, map) + walk1(N, cur + 1, rest - 1, P, map);
    map.set(`${cur}_${rest}`, res);
    return res;
}
let result = ways1(5, 3, 5, 4);
console.log(result);

const walkDp = (N, M, K, P) => {
    // 参数无效直接返回0
    if (N < 2 || M < 1 || K < 1 || M > N || P < 1 || P > N) {
        return 0;
    }
    // 可变参数M(cur), K(rest)
    let dp = new Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = new Array(K + 1);
        dp[i].fill(0);
    }
    dp[P][0] = 1;
    console.log(dp);
    for (let i = 1; i <= K; i++) { // rest
        for (let j = 1; j <= N; j++) { // cur
            if (j == 1) {
                dp[j][i] = dp[j + 1][i - 1];
            }
            if (j == N) {
                dp[j][i] = dp[j - 1][i - 1];
            } else {
                dp[j][i] = dp[j - 1][i - 1] + dp[j + 1][i - 1];
            }
        }
    }
    return dp[M][K];
}

let result1 = walkDp(5, 3, 5, 4);
console.log(result1);
