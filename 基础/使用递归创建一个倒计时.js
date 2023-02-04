/**
如果想写一个递归函数，返回一个数字 1 到 n 的连续数组。
 这个函数需要接收一个参数 n 代表最终数字。 然后会持
 续的调用自身，传入一个比 n 更小的值一直到传入的值是
  1 为止。
 函数如下：
 */
 function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));

  /*已经定义了一个函数 countdown，函数有一个参数（n）。
   函数应该基于参数 n 递归调用返回 n 到 1 的连续数字的数组。
    如果函数以小于 1 的参数调用，函数应该返回空数组。 比如，
    用 n = 5 调用函数应该返回数组 [5, 4, 3, 2, 1]。 函数必
    需使用递归函数调用自身，不能使用任何形式的循环。
  */ 


    function countdown(n){
        if(n<1){
          return [];
        }else{
          const countArray = countdown(n-1);
           countArray.unshift(n);
           return countArray;
        }
       }
       console.log(countdown(5));