/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
// 示例输入值 pos，仅仅为了造测试数据，跟算法无关
var hasCycle = function(head) {
  const map = new Map()

  while (head !== null) {
    if (map.has(head)) {
      return true
    }
    map.set(head, true)
    head = head.next
  }
  return false
};
// @lc code=end

