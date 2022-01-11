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

    
  }















}

