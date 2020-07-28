/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
// 最不经常使用原则
// 在 LRU 基础上修改
var LFUCache = function(capacity) {
  this._len = 0
  this._maxLen = capacity
  this._cache = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  key = 'a' + key.toString()
  const cur = this._cache[key]
  if (typeof cur === 'undefined') return -1

  delete this._cache[key]
  this._cache[key] = {
    key: cur.key,
    value: cur.value,
    num: cur.num+1,
  }
  return cur.value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this._maxLen == 0) return
  key = 'a' + key.toString()
  const cur = this._cache[key]
  if (typeof cur !== 'undefined') {
    delete this._cache[key]
    this._cache[key] = {
      key,
      value,
      num: cur.num+1,
    }
  } else {
    if (this._len < this._maxLen) {
      this._cache[key] = {
        key,
        value,
        num: 0,
      }
      this._len++
    } else {
      // 找出最不经常使用的
      let arr = []
      let num = Number.MAX_VALUE
      for (let k in this._cache) {
        if (this._cache.hasOwnProperty(k)) {
          const temp = this._cache[k]
          if (temp.num < num) {
            num = temp.num
            arr = []
            arr.push(temp)
          } else if (temp.num == num) {
            arr.push(temp)
          }
        }
      }
      console.log(arr)
      const drop = arr.shift()
      delete this._cache[drop.key]
      this._cache[key] = {
        key,
        value,
        num: 0,
      }
    }
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

