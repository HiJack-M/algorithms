// 给定一个整型数组arr，代表数值不同的纸牌排成一条线，玩家A和玩家B依次拿走每张纸牌，规定玩家A先拿，玩家B后拿，但是每个玩家每次只能拿走最左或最右的纸牌，玩家A和玩家B都绝顶聪明。请返回最后获胜者的分数。

const cardsGame = (arr) => {
	if (!arr || arr.length == 0) return 0
	return Math.max(first(arr, 0, arr.length - 1), second(arr, 0, arr.length - 1))
}

const first = (arr, l, r) => {
	if (l == r) return arr[l]
	return Math.max(arr[l] + second(arr, l + 1, r), arr[r] + second(arr, l, r - 1))	
}

const second = (arr, l, r) => {
	if (l == r) return 0
	return Math.min(first(arr, l + 1, r), first(arr, l, r - 1))
}

const arr1 = [4, 7, 9, 5]
console.log(cardsGame(arr1))
