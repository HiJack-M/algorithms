// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
// 题目数据 保证 整个链式结构中不存在环。

// https://leetcode.cn/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode-solutio-a8jn/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  let cur1 = headA
  let cur2 = headB
  let n = 0
  while (cur1) {
    cur1 = cur1.next
    n++
  }
  while (cur2) {
    cur2 = cur2.next
    n--
  }
  cur1 = n > 0 ? headA : headB
  cur2 = n > 0 ? headB : headA
  n = Math.abs(n)
  while (n > 0) {
    cur1 = cur1.next
    n--
  }
  while (cur1 != cur2) {
    cur1 = cur1.next
    cur2 = cur2.next
  }
  return cur1
};

// 总结方法1
// 1. 用 n 记录差值
// 2. 找到长度相同起始点（长的那条先走 n 步）
// 3. next 往下走，一一对比是否相同



/*** pref 方法 ***/
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};

// 解释方法2
// 1. 若相交，设 headA 与 headB 不同部分分别为 a 和 b，相交部分为 c，a + c 走完继续走 b，b + c 走完继续走 a
// a + c + b == b + c + a，走过长度相同，会在此处汇合。
// 2. 若不相交，设链表 headA 和 headB 的长度分别是 m 和 n，若 m == n，则同时走到 tail，返回 tail；若 m != n, m + n 次相当于每个指针都走完了两个链表，返回末值 null
