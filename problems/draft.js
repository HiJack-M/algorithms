/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    if (!candidates) return ans;
    let combine = [];
    process(candidates, combine, 0, target, ans);
    return ans;
};

var process = function(candidates, combine, index, rest, ans) {
    if (rest < 0 || index >= candidates.length) return;
    if (rest == 0) {
        ans.push(combine);
        return;
    }
    if (candidates[index] <= rest) {
        process(candidates, [...combine, candidates[index]], index + 1, rest - candidates[index], ans);
    }
    process(candidates, combine, index + 1, rest, ans);
}

const condi = [2, 3, 6, 7];
let ans = combinationSum(condi, 7);
console.log(ans);
