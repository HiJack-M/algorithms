const BSExist = (sortedArr, num) => {
    if (!num || !sortedArr || sortedArr.length == 0) return false;
    let l = 0;
    r = sortedArr.length - 1;
    let mid;
    while (l < r) {
        mid = l + ((r - l) >> 1);
        if (sortedArr[mid] === num) {
            return true;
        } else if (sortedArr[mid] > num) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return sortedArr[l] === num;
}

const testArr = [1,2,3,4,5,6,7,8,9];
console.log(BSExist(testArr, 5));

// 找出 sortedArr 中大于等于 num 的最左位置的一个数
const BSNearLeft = (sortedArr, num) => {
    if (!num || !sortedArr || sortedArr.length == 0) return -1;
    let l = 0;
    let r = sortedArr.length - 1;
    let mid;
    let index = -1;
    while (l <= r) {
        mid = l + ((r - l) >> 1);
        if (sortedArr[mid] >= num) {
            index = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return index;
}

const testArr1 = [1,2,3,3,3,4,4,5,5,6];
let ans1 = BSNearLeft(testArr1, 3);
console.log(ans1);

// LeetCode 33
/* 给你一个整数数组 nums ，和一个整数 target 。
 * 该整数数组原本是按升序排列，但输入时在预先未知的某个点上进行了旋转。（例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] ）。
 * 请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。 */

var search = function(nums, target) {
    if (nums.length == 0) return -1;
    if (nums.length == 1) return nums[0] === target ? 0 : -1;
    let l = 0;
    let r = nums.length - 1;
    let mid;
    while (l <= r) {
        mid = l + ((r - l) >> 1);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}

// LeetCode 34
/* 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。 */

const searchRange = (nums, target) => {
    let len = nums.length;
    if (len == 0) return [-1, -1];
    if (len == 1) return nums[0] == target ? [0, 0] : [-1, -1];
    let l = 0;
    let r = len - 1;
    let indexL = -1;
    let indexR = -1;
    let mid;
    while (l <= r) {
        mid = l + ((r - l) >> 1);
        if (nums[mid] == target) {
            indexL = mid;
            indexR = mid;
            while (nums[indexL - 1] == target) {
                indexL--;
            }
            while (nums[indexR + 1] == target) {
                indexR++;
            }
            break;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return [indexL, indexR];
}
