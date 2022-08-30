const hanoi = (n) => {
  if (n == 0) return
  process(n, 'left', 'right', 'middle')
}

const process = (n, from, to, other) => {
  // base case
  if (n == 1) {
    console.log(`Move 1 from ${from} to ${to}`)
    return
  }

  process(n - 1, from, other, to)
  console.log(`Move ${n} from ${from} to ${to}`)
  process(n - 1, other, to, from)
}

// hanoi(5)

const printAllSubsequences = (str) => {
  let ans = []
  if (str) processSub(str, 0, '', ans)
  return ans
}

const processSub = (str, index, path, ans) => {
  if (index == str.length) {
    ans.push(path)
    return
  }

  let yes = path + str[index]
  let no = path
  processSub(str, index + 1, yes, ans)
  processSub(str, index + 1, no, ans)
}

console.log('printAllSubsequences: ', printAllSubsequences('abc'))


// const printAllPermutation = (str) => {
//   let ans = []
//   if (!str) return ans
  
//   for (let i = 0; i < str.length; i++) {
//     let base = str[i]
//     ans.push(base)
//     for (let j = i + 1; j < str.length; j++) {
//       base += str[j]
//       ans.push(base)
//     }
//   }
//   return ans
// }

// console.log(printAllPermutation('abc'))
// console.log(printAllPermutation('aaa'))
