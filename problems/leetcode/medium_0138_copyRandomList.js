// 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
//
// 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
//
// 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。
//
// 返回复制链表的头节点。
//
// 链接：https://leetcode.cn/problems/copy-list-with-random-pointer

// Definition for a Node.
function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head == null) return null
  const map = new Map()
  let cur = head
  while (cur) {
    map.set(cur, new Node(cur.val))
    cur = cur.next
  }
  cur = head
  while (cur) {
    map.get(cur).next = cur.next ? map.get(cur.next) : null
    map.get(cur).random = cur.random ? map.get(cur.random) : null
    cur = cur.next
  }
  return map.get(head)
};
