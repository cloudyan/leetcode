/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = []
  this._miniStack = [Infinity]
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._stack.push(x)
  this._miniStack.push(Math.min(this._miniStack[this._miniStack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._miniStack.pop()
  return this._stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._stack[this._stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._miniStack[this._miniStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

