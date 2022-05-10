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
  let dummyHead = new ListNode(0)
  let point = dummyHead
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      point.next = list1
      list1 = list1.next
    } else {
      point.next = list2
      list2 = list2.next
    }
    point = point.next
  }
  point.next = list1 || list2
  return dummyHead.next
};
