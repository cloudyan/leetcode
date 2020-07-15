/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 方法二：迭代
// 时间复杂度 O(n+m)
// 空间复杂度 O(1)
var mergeTwoLists = function(l1, l2) {
  const prehead = new ListNode(-1)

  let pred = prehead
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      pred.next = l1
      l1 = l1.next;
    } else {
      pred.next = l2
      l2 = l2.next;
    }
    pred = pred.next
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  pred.next = l1 === null ? l2 : l1
  return prehead.next
};

// var mergeTwoArray = function(l1, l2) {
//   const result = []
//   let index = 0
//   let k = 0
//   const len = l2.length
//   for (let i = 0; i < l1.length; i++) {
//     while(l2[k] <= l1[i] && k < len) {
//       result.push(l2[k])
//       k++
//     }
//     result.push(l1[i])
//   }
//   return result
// };
// @lc code=end

// 方法一：递归

