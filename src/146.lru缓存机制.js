/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this._cache = {}
  this._len = 0
  this._maxLen = capacity
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  key = 'c' + key
  const cur = this._cache[key]
  if (typeof cur !== 'undefined') {
    // 使用则更新使用的排序
    delete this._cache[key]
    this._cache[key] = cur
    return cur
  }
  return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  key = 'c' + key
  const len = this._len
  const maxLen = this._maxLen

  const cur = this._cache[key]
  if (typeof cur !== 'undefined') {
    delete this._cache[key]
    this._cache[key] = value
  } else {
    if (len < maxLen) {
      this._cache[key] = value
      this._len = len + 1
    } else if (len >= maxLen) {
      const dropKey = Object.keys(this._cache).shift()
      delete this._cache[dropKey]
      this._cache[key] = value
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

