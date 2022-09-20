// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
	if (!l1 || !l2) return null
	let carryBit = 0
	let p1 = l1
	let p2 = l2
	let pRes = new ListNode(0)
	const dummyHead = pRes
	while (p1 || p2) {
		let v1 = p1 ? p1.val : 0
		let v2 = p2 ? p2.val : 0
		let item = v1 + v2 + carryBit
		pRes.next = new ListNode(item % 10)
		pRes = pRes.next
		carryBit = Math.floor(item / 10)
		p1 = p1 ? p1.next : null
		p2 = p2 ? p2.next : null
	}
	if (carryBit != 0) {
		pRes.next = new ListNode(carryBit)
	}
	return dummyHead.next
};
