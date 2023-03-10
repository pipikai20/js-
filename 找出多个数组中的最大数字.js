/*请返回一个数组，该数组由参数中每个子数组中的最大数字组成。 为简单起见，给出的数组总会包含 4 个子数组。

别忘了，你可以通过 for 循环遍历一个数组，并用 arr[i] 的写法来访问数组中的元素。*/


function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);