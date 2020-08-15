/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let preHead = new ListNode(0)

  let tempNode = preHead
  let current = head
  while (current !== null) {
    const temp1 = tempNode.next
    tempNode.next = current;
    const temp2 = current.next;
    current.next = temp1;
    current = temp2;
  }

  return preHead.next;
};
// @lc code=end

