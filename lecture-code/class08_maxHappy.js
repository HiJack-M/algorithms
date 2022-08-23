class Employee {
    constructor(happy) {
        this.happy = happy;
        this.nexts = [];
    }
}

const maxHappy = (boss) => {
    if (boss == null) {
        return 0;
    }
    let all = process(boss);
    return Math.max(all.yes, all.no);
}

class Info {
    constructor(yes, no) {
      this.yes = yes; // 取当前节点的情况
      this.no = no; // 不取当前节点的情况
    }
}

const process = (node) => {
    if (node.nexts.length == 0) {
        return new Info(node.happy, 0);
    }
    let yes = node.happy;
    let no = 0;
    if (node.nexts.length > 0) {
        for (let i = 0; i < node.nexts.length; i++) {
            let nextInfo = process(node.nexts[i]);
            yes += nextInfo.no;
            no += Math.max(nextInfo.yes, nextInfo.no);
        }
    }

    return new Info(yes, no);
}

let boss = new Employee(1);
let emp1 = new Employee(10);
let emp11 = new Employee(1);
let emp12 = new Employee(2);
let emp2 = new Employee(20);
let emp21 = new Employee(3);
let emp22 = new Employee(4);
boss.nexts = [emp1, emp2];
emp1.nexts = [emp11, emp12];
emp2.nexts = [emp21, emp22];

console.log(maxHappy(boss));
