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
