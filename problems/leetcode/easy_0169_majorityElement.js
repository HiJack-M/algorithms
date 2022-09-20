// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 哈希表方法
// 时间复杂度：O(n) 空间复杂度：O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
	if (!nums) return null
	let map = {}

	for (let i = 0; i< nums.length; i++) {
		if (!map[nums[i]]) {
			map[nums[i]] = 1
		} else {
			map[nums[i]]++
		}
		if (map[nums[i]] > nums.length / 2) {
			return nums[i]
		}
	}
};

