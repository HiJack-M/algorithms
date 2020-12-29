/* 给定一个字符串str，给定一个字符串类型的数组arr。
 * arr里的每一个字符串，代表一张贴纸，你可以把单个字符剪开使用，目的是拼出str来。
 * 返回需要至少多少张贴纸可以完成这个任务。
 * 例子：str= "babac"，arr = {"ba","c","abcd”}
 * 至少需要两张贴纸"ba"和"abcd"，因为使用这两张贴纸，把每一个字符单独剪开，含有2个a、2个b、1个c。是可以拼出str的。所以返回2。 */

const minStickers = (arr, str) => {
    let N = arr.length;
    let map = new Array(N);   // 每一个 sticker 转换成 26 字母词频数组
    for (let i = 0; i < N; i++) {
        let row = new Array(26);
        row.fill(0);
        map[i] = row;

        for (let j = 0; j < arr[i].length; j++) {
            let index = arr[i][j].charCodeAt() - 'a'.charCodeAt();
            map[i][index]++;
        }
    }
    let dp = new Map();
    dp.set('', 0);
    return process1(map, str, dp);
}

// dp 傻缓存，如果restStr已经算过了，直接返回dp中的值
// restStr 剩余的目标
// 0..N每一个字符串所含字符的词频统计
// 若返回值 -1，表示 map 中的贴纸是没办法拼出 rest 的
const process1 = (map, restStr, dp) => {
    if (dp.has(restStr)) {
        return dp.get(restStr);
    }
    let ans = Infinity;    // 搞定 rest 要使用的最少的贴纸数量
    let sMap = new Array(26);
    sMap.fill(0);   // restStr 的词频统计
    for (let i = 0; i < restStr.length; i++) {
        let index = restStr.charCodeAt(i) - 'a'.charCodeAt();
        sMap[index]++;
    }
    for (let i = 0; i < map.length; i++) {     // 一共有 map.length 种贴纸
        // 枚举当前要用的第一张贴纸
        let index = restStr.charCodeAt(0) - 'a'.charCodeAt();
        // 此处先定位到包含 restStr 第一个字符的贴纸（因为目标搞定的顺序不影响答案）
        // 也可判断只要该贴纸包含至少一个 restStr 中的字符，不然每次相减 restStr 不变，会死循环
        if (map[i][index] == 0) {
            continue;
        }
        let rest = '';   // 使用完 i 号贴纸，剩下的字符串
        for (let j = 0; j < 26; j++) {
            // 第 i 种贴纸，j 枚举 26 个字符
            if (sMap[j] > 0) { // j这个字符是restStr需要的
                for (let k = 0; k < Math.max(sMap[j] - map[i][j], 0); k++) {
                    rest += String.fromCharCode(97 + j);
                }
            }
        }
        let ansRest = process1(map, rest, dp);
        if (ansRest != -1) {
            ans = Math.min(ans, ansRest + 1);
        }
    }
    dp.set(restStr, ans == Infinity ? -1: ans);
    return ans;
}

const arr1 = ['ba', 'c', 'abcd'];
let str1 = 'babac';
console.log(minStickers(arr1, str1));
