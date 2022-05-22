const getIndexOf = (str, match) => {
  if (!str || !match) {
    return -1
  }
  let x = 0 // str 中当前比对到的位置
  let y = 0 // match 中当前比对到的位置
  const next = getNextArray(match) // match 中 i 之前的字符串最大相等前后缀
  while (x < str.length && y < match.length) {
    if (str[x] == match[y]) {
      x++
      y++
    } else if (y == 0) {
      x++
    } else {
      y = next[y]
    }
  }
  // y 没有越界，没匹配完，返回 -1
  // y 越界了，匹配完了，找合适的匹配起始点
   return y == match.length ? x - y : -1
}
