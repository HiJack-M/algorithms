const getBottom = (stack) => {
    let result = stack.pop();   // 用一个变量记录当前递归拿到的值
    if (stack.length == 0) {
        return result;  // 只有弹出的是最底，才返回自己
    } else {
        let last = getBottom(stack);
        stack.push(result);
        return last;
    }
}

const reverse = (stack) => {
    if (stack.length == 0) {
        return;
    } 
    let result = getBottom(stack);
    reverse(stack);
    stack.push(result);
}

const arr1 = [1, 2, 3];
reverse(arr1);
console.log(arr1);
