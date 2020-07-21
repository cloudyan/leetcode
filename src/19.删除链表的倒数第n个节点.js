/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 简单实现可以遍历两次实现
// 如果想遍历一次实现，可以设置双指针间隔 n，同时移动到末尾
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  let first = dummy
  let second = dummy

  for (let i = 0; i <= n; i++) {
    first = first.next
  }

  while(first !== null) {
    first = first.next
    second = second.next
  }

  second.next = second.next.next
  return dummy.next
};
// @lc code=end

