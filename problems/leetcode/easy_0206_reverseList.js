// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return head
  let temp = head.next
  head.next = null
  let next
  while (temp) {
    next = temp.next
    temp.next = head
    head = temp
    temp = next
  }
  return head
};

var reverseListStandard = function(head) {
  let pre = null
  let next = null
  while (head) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}

// pre: 抓住新头部
// next: 每次先去找下一个需要处理的节点
