/* 打印n层汉诺塔从最左边移动到最右边的全部过程 */

const hanoi1 = (n) => {
    leftToRight(n);
}

const leftToRight = (n) => {
    if (n == 1) {
        console.log("move 1 from left to right.");
        return;
    } else {
        leftToMid(n - 1);
        console.log(`move ${n} from left to right.`);
        midToRight(n - 1);
    }
}

const leftToMid = (n) => {
    if (n == 1) {
        console.log("move 1 from left to mid.");
        return;
    } else {
        leftToRight(n - 1);
        console.log(`move ${n} from left to mid.`);
        rightToMid(n - 1);
    }
}

const midToRight = (n) => {
    if (n == 1) {
        console.log("move 1 from mid to right.");
        return;
    } else {
        midToLeft(n - 1);
        console.log(`move ${n} from mid to right.`);
        leftToRight(n - 1);
    }
}

const midToLeft = (n) => {
    if (n == 1) {
        console.log("move 1 from mid to left.");
        return;
    } else {
        midToRight(n - 1);
        console.log(`move ${n} from mid to left.`);
        rightToLeft(n - 1);
    }
}

const rightToMid = (n) => {
    if (n == 1) {
        console.log("move 1 from right to mid.");
        return;
    } else {
        rightToLeft(n - 1);
        console.log(`move ${n} from right to mid.`);
        leftToMid(n - 1);
    }
}

const rightToLeft = (n) => {
    if (n == 1) {
        console.log("move 1 from right to left.");
        return;
    } else {
        rightToMid(n - 1);
        console.log(`move ${n} from right to left.`);
        midToLeft(n - 1);
    }
}

hanoi1(3);

console.log("=======");

const hanoi2 = (n) => {
    process(n, 'left', 'right', 'mid');
}

const process = (n, from, to, other) => {
    if (n == 1) {
        console.log(`move 1 from ${from} to ${to}`);
        return;
    } else {
        process(n - 1, from, other, to);
        console.log(`move ${n} from ${from} to ${to}`);
        process(n - 1, other, to, from);
    }
}

/* hanoi2(5); */
