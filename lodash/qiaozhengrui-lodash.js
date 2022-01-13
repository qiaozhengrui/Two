var qiaozhengrui = {
  /**
   * @将数组 （array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
   * @如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
   *
   *@Example (例子)
   *
   *@_.chunk(['a', 'b', 'c', 'd'], 2);
   *@// => [['a', 'b'], ['c', 'd']]
   *
   *@_.chunk(['a', 'b', 'c', 'd'], 3);
   *@// => [['a', 'b', 'c'], ['d']]
   *
   */
  chunk: function (array, num = 1) {
    let res = [], tmp = []

    if (num == 0) {//如果num为0 则返回空数组
      return res
    }
    if (num == array.length) {//如果num是原数组长度，则返回原数组
      return array
    }

    for (let i = 0; i < array.length; i++) {
      tmp.push(array[i])
      if (tmp.length == num) {
        res.push(tmp)
        tmp = []
      }
    }
    if (tmp[0]) {
      res.push(tmp)
    }
    return res
  },

  /**
   * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
   * and/or values.
   *
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(array);
   * => [1]
   *
   * _.compact([0, 1, false, 2, '', 3]);
   * => [1, 2, 3]
   */
  compact: function (array) {
    let res = []

    for (let i = 0; i < array.length; i++) {
      if (!!array[i] == true) {// 遍历数组array,对遍历到的元素i强制转换成布尔值,将布尔值为true的push到结果中
        res.push(array[i])
      }
    }
    return res
    return array.filter(i => !!i == true)

  /**
   * 方法二
   *let res = []
   *
   *for (let i = 0; i < array.length; i++) {
   *  if (array[i]) {
   *    res.push(array[i])
   * }
   *}
   *return res
   */
  },

 /**
 * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 *
 _.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
 */

  drop: function (array, n = 1) {
    if (n > array.length) {
      return []
    }

    let res = []
    for (let i = n; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  },


/**
  * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）.
  *
  *
  * _.dropRight([1, 2, 3]);
  * // => [1, 2]
  *
  * _.dropRight([1, 2, 3], 2);
  * // => [1]
  *
  * _.dropRight([1, 2, 3], 5);
  * // => []
  *
  * _.dropRight([1, 2, 3], 0);
  * // => [1, 2, 3]
  */

  dropRight: function (array, n = 1) {
    if (n > array.length) {
      return []
    }

    let res = []
    for (let i = 0; i < array.length - n; i++) {
      res.push(array[i])
    }
    return res
  }

 /**
  * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
  *
  * **Note:** 这个方法会改变 array（注：不是创建新数组）.
  *
  *
  * 参数
  * @array (Array): 要填充改变的数组。
  * @value (*): 填充给 array 的值。
  * @[start=0] (number): 开始位置（默认0）。
  * @[end=array.length] (number):结束位置（默认array.length）。
  *
  * var array = [1, 2, 3];
  *
  * _.fill(array, 'a');
  * console.log(array);
  * // => ['a', 'a', 'a']
  *
  * _.fill(Array(3), 2);
  * // => [2, 2, 2]
  *
  * _.fill([4, 6, 8, 10], '*', 1, 3);
  * // => [4, '*', '*', 10]
  */

  










































}

