/* 两个字符串的最长公共子序列问题 */

const longestCommonSubsequenceLength = (str1, str2) => {
    if (str1 == null || str1.length == 0 || str2 == null || str2.length == 0) {
        return 0;
    }
    let ls1 = str1.length;
    let ls2 = str2.length;
    let dp = new Array(ls1);
    for (let i = 0; i < ls1; i++) {
        let col = new Array(ls2);
        col.fill(0);
        dp[i] = col;
    }
    dp[0][0] = str1[0] == str2[0] ? 1 : 0;
    for (let i = 1; i < ls1; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], str1[i] == str2[0] ? 1 : 0);
    }
    for (let j = 1; j < ls2; j++) {
        dp[0][j] = Math.max(dp[0][j - 1], str1[0] == str2[j] ? 1 : 0);
    }
    for (let i = 1; i < ls1; i++) {
        for (let j = 1; j < ls2; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            if (str1[i] == str2[j]) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
            }
        }
    }
    console.log(dp);
    return dp[ls1 - 1][ls2 - 1];
}

let str1 = 'ab1cabc3d';
let str2 = '1abd';
console.log(longestCommonSubsequenceLength(str1, str2));

/* 最长重复子数组 */

var findLength = function(A, B) {
    let lenA = A.length;
    let lenB = B.length; 
    if (lenA === 0 || lenB === 0) return 0;
    let max = 0;
    let dp = new Array(lenA + 1);
    for (let i = 0; i < dp.length; i++) {
        let col = new Array(lenB + 1);
        col.fill(0);
        dp[i] = col;
    }
    for (let i = lenA - 1; i >= 0; i--) {
        for (let j = lenB - 1; j >= 0; j--) {
            dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : 0;
            max = Math.max(dp[i][j], max);
        }
    }
    return max;
};

let arr1 = [1, 2, 3, 'd']
let arr2 = [2, 3, 'd', 1, 2]
console.log(findLength(arr1, arr2))

/** 2022.09.15 正常的思路应该是从前往后的吧…… */
const longestCommonSubArrayLength = (arr1, arr2) => {
	if (!arr1 || !arr2) return 0

	const Dp = new Array(arr1.length)
	for (let i = 0; i < arr1.length; i++) {
		Dp[i] = new Array(arr2.length)
		Dp[i].fill(0)
	}

	let max = 0
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] == arr2[j]) {
				Dp[i][j] =  Dp[i - 1] && Dp[i - 1][j - 1] ? Dp[i - 1][j - 1] + 1 : 1
			} else {
				Dp[i][j] = 0
			}
			max = Math.max(max, Dp[i][j])
		}
	}
	console.log(Dp)
	return max
}
