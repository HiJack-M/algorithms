/* 给定一个由字符串组成的数组strs，
 * 必须把所有的字符串拼接起来，
 * 返回所有可能的拼接结果中，字典序最小的结果 */

// 暴力递归出结果
const lowestString1 = (strs) => {
    if (strs == null || strs.length == 0) return null;
    const all = [];
    let use = new Set();
    process(strs, use, '', all);
    let lowest = all[0];
    for (let i = 1; i < all.length; i++) {
        if (all[i] < lowest) {
            lowest = all[i];
        }
    }
    return lowest;
}

// strs 里放着所有字符串
// 已经使用过的字符串下标，在 use 里登记了，不要再使用了
// 之前使用过的字符串，拼接成了 -> path
// 用 all 收集所有可能的拼接结果
const process = (strs, use, path, all) => {
    if (use.size == strs.length) {
        all.push(path);
    } else {
        for (let i = 0; i < strs.length; i++) {
            if (!use.has(i)) {
                use.add(i);
                process(strs, use, path + strs[i], all);
                use.delete(i);
            }
        }
    }
}

/* const strs = ['x', 'ldrwc', 'xha']; */

/* console.log(lowestString1(strs)); */

const compare = (a, b) => {
    return a + b > b + a;
}

const lowestString2 = (strs) => {
    if (strs == null || strs.length == 0) {
        return null;
    }

    strs.sort(compare);
    let res = strs.join('');

    return res;
}

/* const strs2 = ['x', 'ldrwc', 'xha']; */
/* console.log(lowestString2(strs2)); */

// for test

const generateRandomString = (len) => {
    let strArr = new Array(parseInt(len * Math.random()) + 1);
    for (let i = 0; i < strArr.length; i++) {
        let val = parseInt(Math.random() * 26);
        strArr[i] = String.fromCharCode(97 + val);
    }
    return strArr.join('');
}

const generateRandomStringArray = (arrLen, strLen) => {
    let ans = new Array(parseInt(arrLen * Math.random()) + 1);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = generateRandomString(strLen);
    }
    return ans;
}

/* console.log(generateRandomStringArray(5, 5)); */

const testMachine = (arrLen, strLen, maxTime) => {
    for (let i = 1; i < maxTime; i++) {
        let strs1 = generateRandomStringArray(arrLen, strLen);
        let strs2 = [...strs1];
        let lowest1 = lowestString1(strs1);
        let lowest2 = lowestString2(strs2);
        if (lowest1 != lowest2) {
            console.log('Oops!');
            return;
        }
    }
    console.log('Finished!');
}

testMachine(5, 5, 100);
