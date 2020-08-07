/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let preHead = new ListNode(0);
  let prev = preHead;
  let current = head

  preHead.next = head;
  // 要特别处理 head 和 tail
  while (current !== null) {
    if (current.val == val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return preHead.next
};
// @lc code=end

