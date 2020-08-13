/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */

// 最简单的方式是遍历转为数组，比较数组是否回文
// 如果要求使用 O(1) 的空间复杂度呢
// 临时改链表为双向链表，比较后还原链表
var isPalindrome = function(head) {
  const arr1 = []
  let current = head
  while (current) {
    arr1.push(current.val)
    current = current.next
  }
  return arr1.join('') === arr1.reverse().join('')
};
// @lc code=end

