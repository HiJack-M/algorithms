// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
	if (!list1 || !list2) return list1 || list2 || null

	let dummyHead = new ListNode(0)
	let p0 = dummyHead
	let p1 = list1
	let p2 = list2

	while (p1 || p2) {
		let v1 = p1 ? p1.val : Infinity
		let v2 = p2 ? p2.val : Infinity
		if (v1 <= v2) {
			p0.next = new ListNode(v1)
			p1 = p1.next
		} else {
			p0.next = new ListNode(v2)
			p2 = p2.next
		}
		p0 = p0.next
	}
	return dummyHead.next
 }
