/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 1. 输入链表长度不一定相同
// 2. 输入逆序存储的，相加溢出要进位
// 3. 要返回新的链表

// 1. 可以转为数字相加，取结果再转为链表
// 2. 可以直接相加，同时记录进位参与下一次计算
// 如果链表中的数字不是按逆序存储的呢？
var addTwoNumbers = function(l1, l2) {
  const tempHead = new ListNode(0)
  let current = tempHead
  let carry = 0
  let p = l1
  let q = l2
  while (p !== null || q !== null) {
    const x = p ? p.val : 0
    const y = q ? q.val : 0
    const sum = carry + x + y
    carry = parseInt(sum/10, 10)
    current.next = new ListNode(sum % 10)
    current = current.next

    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }
  return tempHead.next
};
// @lc code=end

