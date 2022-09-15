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


/** 20220914 coding trainning */

const minStickers220914 = (arr, str) => {
	if (!arr || !str) return 0

	// arr 词频表
	const arrCounts = new Array(arr.length)
	for (let i = 0; i < arr.length; i++) {
		arrCounts[i] = new Array(26)
		arrCounts[i].fill(0)
		for (let e in arr[i]) {
			arrCounts[i][arr[i][e].charCodeAt() - 97]++
		}
	}

	// dummy 缓存
	let dpMap = new Map()

	return process2(arrCounts, str, dpMap)
}

// arrCounts: 原始贴纸词频数组
// rest: 要拼的剩余目标的词频数组
const process2 = (arrCounts, rest, dpMap) => {
	if (dpMap.has(rest)) return dpMap.get(rest)

	// 全都已经搞定
	if (rest == '') return 0

	// rest 词频表
	const restStrCount = new Array(26)
	restStrCount.fill(0)
	for (let i in rest) {
		restStrCount[rest[i].charCodeAt() - 97]++
	}

	// 每一轮剩下的目标都拿所有贴纸过一遍
	let ans = Infinity
	for (let i = 0; i < arrCounts.length; i++) {
		// 若某张贴纸不包含剩下目标的第一个字母，那就跳过【防止死循环】（反正顺序不重要）
		// let containFirst = false
		// for (let e in restStrCount) {
		// 	if (restStrCount[e] != 0 && arrCounts[i][e] != 0) {
		// 		containFirst = true
		// 		break
		// 	}
		// }
		// if (!containFirst) continue
		// 既然都带上 rest 字符串玩了，就不用上面的判断方法了，直接拿 rest 第一个字母（重组过后是按照字典序排列的）
		// 为何带上 rest 字符串，因为 Dp 需要用作 key
		let firstLetterIndex = rest[0].charCodeAt() - 97
		if (arrCounts[i][firstLetterIndex] == 0) continue

		let restOfRest = new Array(26)
		for (let j = 0; j < 26; j++ ) {
			restOfRest[j] = Math.max(0, restStrCount[j] - arrCounts[i][j])
		}

		// 重组 rest
		let restStr = ''
		for (let j = 0; j < 26; j++) {
			for (let k = 0; k < restOfRest[j]; k++) {
				restStr += String.fromCharCode(j + 97)
			}
		}

		let next = process2(arrCounts, restStr, dpMap)
		ans = Math.min(ans, next + 1)
	}
	dpMap.set(rest, ans == Infinity ? -1 : ans)
	return ans == Infinity ? -1 : ans
}

console.log(minStickers220914(arr1, str1));
