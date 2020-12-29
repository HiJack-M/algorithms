/* 题目
 * 数组arr代表每一个咖啡机冲一杯咖啡的时间，每个咖啡机只能串行的制造咖啡。
 * 现在有n个人需要喝咖啡，只能用咖啡机来制造咖啡。
 * 认为每个人喝咖啡的时间非常短，冲好的时间即是喝完的时间。
 * 每个人喝完之后咖啡杯可以选择洗或者自然挥发干净，只有一台洗咖啡杯的机器，只能串行的洗咖啡杯。
 * 洗杯子的机器洗完一个杯子时间为a，任何一个杯子自然挥发干净的时间为b。
 * 四个参数：arr, n, a, b
 * 假设时间点从0开始，返回所有人喝完咖啡并洗完咖啡杯的全部过程结束后，至少来到什么时间点。 */

class Machine {
    constructor(timePoint, workTime) {
        this.timePoint = timePoint;
        this.workTime = workTime;
        this.timeSum = timePoint + workTime;
    }
}

class PriorityQueue {
    constructor(comparetor) {
        this.heap = [];
        this.comparetor = comparetor;
    }
    add(item) {
        this.heap.push(item);
        if (this.heap.length > 1) {
            this.heapInsert();
        }
    }
    poll() {
        if (this.heap.length == 0) {
            throw Error('heap is empty.');
        }
        this.swap(0, this.heap.length - 1);
        let item = this.heap.pop();
        if (this.heap.length > 1) {
            this.heapify();
        }
        return item;
    }
    heapInsert() {
        let index = this.heap.length - 1;
        let parent = parseInt((index - 1) / 2);
        while (parent >= 0 && this.heap[index][this.comparetor] < this.heap[parent][this.comparetor]) {
            this.swap(index, parent);
            index = parent;
            parent = parseInt((index - 1) / 2);
        }
    }
    heapify() {
        let index = 0;
        let left = index * 2 + 1;
        while (left < this.heap.length) {
            let smallest = left + 1 < this.heap.length
                && this.heap[left + 1][this.comparetor] < this.heap[left][this.comparetor]
                    ? left + 1 : left;
            smallest = this.heap[smallest][this.comparetor] < this.heap[index][this.comparetor]
                ? smallest : index;
            if (smallest == index) {
                break;
            }
            this.swap(index, smallest);
            index = smallest;
            left = index * 2 + 1;
        }
    }
    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

const minCoffeeTime = (arr, n, a, b) => {
    let heap = new PriorityQueue('timeSum');
    for (let i = 0; i < arr.length; i++) {
        heap.add(new Machine(0, arr[i]));
    }
    let drinks = [];     // 最快让每个人喝完咖啡的情况下，每个人喝完的时间点
    for (let i = 0; i < n; i++) {
        let item = heap.poll();
        item.timePoint += item.workTime;
        drinks[i] = item.timePoint;
        heap.add(item);
    }
    return process(drinks, a, b, 0, 0);
}

// a 洗一杯咖啡的时间 固定变量
// b 挥发干净的时间 固定变量
// drinks[0...index-1] 都已经干净了，不用再操心
// drinks[index...] 都需要弄干净，现在该操心的，washLine 表示洗咖啡机何时可用
// 返回：drinks[index...] 变干净需要的最少时间
const process = (drinks, a, b, index, washLine) => {
    // 最后一杯
    if (index == drinks.length - 1) {
        return Math.min(Math.max(drinks[index], washLine) + a, drinks[index] + b);
    }

    // 剩不止一杯，关注 index 这一杯
    let wash = Math.max(drinks[index], washLine) + a;
    let next1 = process(drinks, a, b, index + 1, wash);
    let p1 = Math.max(wash, next1);
    let dry = drinks[index] + b;
    let next2 = process(drinks, a, b, index + 1, washLine);
    let p2 = Math.max(dry, next2);
    return Math.min(p1, p2);
}

const minCoffeeTimeDp = (arr, n, a, b) => {
    let heap = new PriorityQueue('timeSum');
    for (let i = 0; i < arr.length; i++) {
        heap.add(new Machine(0, arr[i]));
    }
    let drinks = [];     // 最快让每个人喝完咖啡的情况下，每个人喝完的时间点
    for (let i = 0; i < n; i++) {
        let item = heap.poll();
        item.timePoint += item.workTime;
        drinks[i] = item.timePoint;
        heap.add(item);
    }

    let limit = 0;  // 若全用机洗，最后洗完时间
    for (let i = 0; i < n; i++) {
        limit = Math.max(drinks[i], limit) + a;
    }
    let dp = new Array(n);
    for (let i = 0; i < dp.length; i++) {
        let col = new Array(limit + 1);
        col.fill(0);
        dp[i] = col;
    }

    for (let washLine = 0; washLine <= limit; washLine++) {
        dp[n - 1][washLine] = Math.min(Math.max(drinks[n - 1], washLine) + a, drinks[n - 1] + b);
    }
    for (let index = n - 2; index >= 0; index--) {
        for (let washLine = 0; washLine <= limit; washLine++) {
            let p1 = Infinity;
            let wash = Math.max(drinks[index], washLine) + a;
            if (wash < limit) {
                p1 = Math.max(wash, dp[index + 1][wash]);
            }
            let dry = drinks[index] + b;
            let p2 = Math.max(dry, dp[index + 1][washLine]);
            dp[index][washLine] = Math.min(p1, p2);
        }
    }
    return dp[0][0];
}

const coffeeMachineTime = [5, 3, 7];
const time = minCoffeeTime(coffeeMachineTime, 5, 3, 10);
const time2 = minCoffeeTimeDp(coffeeMachineTime, 5, 3, 10);
console.log(time, time2);


