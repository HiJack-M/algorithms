// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let ans = []
  if (!intervals || intervals.length === 0) return ans
  if (intervals.length == 1) return intervals

  intervals.sort((a, b) => a[0] - b[0])

  while (intervals.length > 0) {
    let item1 = intervals.shift()
    if (intervals.length > 0) {
      let item2 = intervals.shift()
      if (item1[1] >= item2[0]) {
        // overlapping, should be dealt with next one
        intervals.unshift([item1[0], item1[1] >= item2[1] ? item1[1] : item2[1]])
      } else {
        // non-overlapping
        ans.push(item1)
        intervals.unshift(item2)
      }
    } else {
      ans.push(item1)
    }
  }

  return ans
}

const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
] // [[1,6],[8,10],[15,18]]
console.log(merge(intervals1))

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge_think_bak = function (intervals) {
  let ans = []
  if (!intervals || intervals.length === 0) return ans
  if (intervals.length == 1) return intervals

  intervals.sort((a, b) => a[0] - b[0])

  let i = 1
  ans.push(intervals[0])
  while (i < intervals.length) {
    let first = ans.pop() // 每次拿出 ans 里的最后一个来与下一个 merge
    let second = intervals[i]
    if (first[1] < second[0]) {
      ans.push(first) // 保持原样扔进 ans
      ans.push(second)
    } else if (first[1] < second[1]) {
      first[1] = second[1]
      ans.push(first)
    } else {
      ans.push(first)
    }
    i++
  }

  return ans
}
