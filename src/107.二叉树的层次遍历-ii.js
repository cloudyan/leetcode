/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// BFS 广度优先遍历
// BFS 是按层层推进的方式，遍历每一层的节点。
// BFS 需要用队列作为辅助结构，我们先将根节点放到队列中，然后不断遍历队列。
var levelOrderBottom = function(root) {
  if(!root) return []
  let res = []
  const queue = [root]
  while(queue.length) {
    const currentLayer = [];
    const length = queue.length;
    for (let i = 0; i < length; ++i) {
      const current = queue.shift();
      currentLayer.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    if (currentLayer.length) res.unshift(currentLayer);
  }
  return res
};

// DFS 深度优先遍历
// var levelOrderBottom = function(root) {
//   const res = []
//   var dep = function (node, depth){
//     if(!node) return
//     res[depth] = res[depth] || []
//     res[depth].push(node.val)
//     dep(node.left, depth + 1)
//     dep(node.right, depth + 1)
//   }
//   dep(root, 0)
//   return res.reverse()
// };
// @lc code=end

