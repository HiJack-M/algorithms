/* 给定一个字符串str，只由‘X’和‘.’两种字符构成。
 * ‘X’表示墙，不能放灯，也不需要点亮
 * ‘.’表示居民点，可以放灯，需要点亮
 * 如果灯放在i位置，可以让i-1，i和i+1三个位置被点亮
 * 返回如果点亮str中所有需要点亮的位置，至少需要几盏灯 */

const lights1 = (road) => {
    if (road == null || road.length == 0) {
        return 0;
    }
    let lights = new Set();     // 集合，里面存放放灯的下标
    return process(road, 0, lights);
}

// str[index...]位置，自由选择放不放灯
// str[0..index-1]位置呢？已经做完决定了，那些放了灯的位置，存在 lights 里
// 要求选出能照亮所有 . 的方案，并且在这些有效的方案中，返回最少需要几个灯
const process = (str, index, lights) => {
    if (index == str.length) {   // 结束的时候
        if (lights.size == 0 && str.indexOf('.') != -1) return Infinity // 全都不放灯的 base case 不能漏
        for (let i = 0; i < str.length; i++) {
        if (str[i] == '.') {
            if (!lights.has(i) && !lights.has(i - 1) && !lights.has(i + 1)) { // 超过两边界也没关系，反正 set 里面没有
            return Infinity
            }
        }
        }
        return lights.size
    } else {    // 还没结束
        let no = process(str, index + 1, lights);    // X 和 . 都可选择不放灯
        let yes = Infinity;
        if (str[index] == '.') {
            lights.add(index);
            yes = process(str, index + 1, lights);
            lights.delete(index);
        }
        return Math.min(yes, no);
    }
}

/* const road = 'XX..XXX.X...XX..X.XX';
 * console.log(lights1(road)); */

// 贪心算法
const lights2 = (str) => {
    if (str == null || str.length == 0) {
        return 0;
    }
    let index = 0;  // 当前要做决定的点
    let lights = 0;
    while (index < str.length) {
        if (str[index] == 'X') {    // X 则不放灯，直接跳过
            index++;
        } else {    // 当前位置是 .
            // 此处考虑 i 及 i 之后一两个位置处的点，然后决定下一个需要做决定的点
                // 若 i + 1 为 X，则 i 放灯, i -> i + 2
                // 若 i + 1 为 .，看 i + 2
                    // i + 2 为 X，则 i + 1 放灯，i -> i + 3
                    // i + 2 为 .，则 i + 1 放灯，i -> i + 3
                // 总结为 i + 1 为 . 时，结果一样
            // 总结，只要 i 为 .，都会放一盏灯，就看下一个 i 在哪
            lights++;
            if (str[index + 1] == 'X') {
                index += 2;
            } else {
                index += 3;
            }
        }
    } 
    return lights;
}

/* console.log(lights2(road)); */

const generateRandomRoad = (len) => {
    const arr = new Array(parseInt(Math.random() * len) + 1);
    for (let i = 0; i < arr.length; i++) {
        let val = Math.random();
        if (val < 0.5) {
            arr[i] = '.';
        } else {
            arr[i] = 'X';
        }
    }
    return arr.join('');
} 

const testMachine = (strLen, maxTime) => {
    for (let i = 1; i < maxTime; i++) {
        let str = generateRandomRoad(strLen);
        if (lights1(str) != lights2(str)) {
            console.log('Oops!');
            return;
        }
    }
    console.log('Finished!');
}

testMachine(20, 100);
