/* 给定一个字符串str，只由‘X’和‘.’两种字符构成。
 * ‘X’表示墙，不能放灯，也不需要点亮
 * ‘.’表示居民点，可以放灯，需要点亮
 * 如果灯放在i位置，可以让i-1，i和i+1三个位置被点亮
 * 返回如果点亮str中所有需要点亮的位置，至少需要几盏灯 */

const light1 = (road) => {
  if (!road) return 0

  let lights = new Set()
  return process(road, 0, lights)
}

const process = (str, index, lights) => {
  if (index == str.length) {
    if (lights.size == 0 && str.indexOf('.') != -1) return Infinity
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '.') {
        if (!lights.has(i) && !lights.has(i - 1) && !lights.has(i + 1)) {
          return Infinity
        }
      }
    }
    return lights.size
  } else {
    let no = process(str, index + 1, lights)
    let yes = Infinity
    if (str[index] == '.') {
      lights.add(index)
      yes = process(str, index + 1, lights)
      lights.delete(index)
    }
    return Math.min(no, yes)
  }
}

console.log('answer: ', light1('xx..x.xx....'))
