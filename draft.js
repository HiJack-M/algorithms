// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target  的那 两个 整数，并返回它们的【数组下标】。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

var twoSum = function(nums, target) {
	if (!nums || !target) return null
	let map = {}
	for (let i = 0; i < nums.length; i++) {
		let matchNum = target - nums[i]
		if (map[matchNum] != undefined) {
			return [i, map[matchNum]]
		} else {
			map[nums[i]] = i
		}
	}
	return null
}
