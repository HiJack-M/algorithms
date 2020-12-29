// 打印全部子序列【回溯算法】
const allSubsquences = (str) => {
    let path = '';
    let ans = [];
    process(str, 0, ans, path);
    return ans;
}

const process = (str, index, ans, path) => {
    if (index == str.length) {
        ans.push(path);
        return;
    }
    let no = path;
    process(str, index + 1, ans, no);
    let yes = path + str[index];
    process(str, index + 1, ans, yes);
}

let str1 = 'abc';
console.log(allSubsquences(str1));

// 要不重复的话，ans 换成 Set
