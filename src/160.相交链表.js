/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 双指针
// 终止条件，p q 同时走到链表结尾
var getIntersectionNode = function(headA, headB) {
  let p = headA
  let q = headB
  while (p || q) {
    if (p === q) return p
    p = p === null ? headB : p.next
    q = q === null ? headA : q.next
  }
  return null
}


// 提示超时
// var getIntersectionNode = function(headA, headB) {
//   let [p, q] = [headA, headB]

//   while (p || q) {
//     if (p === q) return p
//     [p, q] = [p ? p.next : headB, q ? q.next : headA]
//   }
//   return null
// };
// @lc code=end

