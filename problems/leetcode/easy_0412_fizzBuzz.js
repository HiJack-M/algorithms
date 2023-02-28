// 412. Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  if (n <= 0) return []

  let ans = []

  for (let i = 1; i <= n; i++) {
    let curAns = []
    if (i % 3 == 0) {
      curAns.push('Fizz')
    }
    if (i % 5 == 0) {
      curAns.push('Buzz')
    }
    if (curAns.length == 0) {
      curAns.push(i)
    }
    ans.push(curAns.join(''))
  }

  return ans
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz_whyWouldIConsiderSoMuch = function (n) {
  if (n <= 0) return []

  let ans = new Array(n + 1)

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      let j = 0
      let curNum = i + j * 3
      while (curNum <= n) {
        if (!ans[curNum]) {
          ans[curNum] = 1
        } else if (ans[curNum] == 2) {
          ans[curNum] = 3
        } else if (ans[curNum] == 3) {
          break
        }
        j++
        curNum = i + j * 3
      }
    } else if (i % 5 == 0) {
      let k = 0
      let curNum = i + k * 5
      while (curNum <= n) {
        if (!ans[curNum]) {
          ans[curNum] = 2
        } else if (ans[curNum] == 1) {
          ans[curNum] = 3
        } else if (ans[curNum] == 3) {
          break
        }
        k++
        curNum = i + k * 5
      }
    } else {
      ans[i] = i.toString()
    }
  }

  ans.shift()
  for (let i = 0; i < ans.length; i++) {
    if (typeof ans[i] == 'number') {
      switch (ans[i]) {
        case 1:
          ans[i] = 'Fizz'
          break
        case 2:
          ans[i] = 'Buzz'
          break
        case 3:
          ans[i] = 'FizzBuzz'
          break
        default:
          break
      }
    }
  }
  return ans
}
