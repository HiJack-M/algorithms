// 【题】折纸游戏
//
// 请把一段纸条竖着放在桌子上，然后从纸条的下边向上方对折1次，压出折痕后展开。
// 此时折痕是凹下去的，即折痕突起的方向指向纸条的背面。
// 如果从纸条的下边向上方连续对折2次，压出折痕后展开，此时有三条折痕，从上到下依次是下折痕、下折痕和上折痕。
// 给定一个输入参数N，代表纸条都从下边向上方连续对折N次。
// 请从上到下打印所有折痕的方向。  例如:N=1时，打印: down N=2时，打印: down down up

const printPaperFold = (N) => {
    if (N == 0) {
        return null;
    }
    printProcess(1, N, true);
}

const printProcess = (cur, all, down) => {
    if (cur > all) {
        return;
    }
    printProcess(cur + 1, all, true);
    console.log(down ? 'down' : 'up');
    printProcess(cur + 1, all, false);
}

printPaperFold(3);

// 压平整颗二叉树
// 【左根右】打印
// 分析每层左右孩子是 down 还是 up
