/*返回一个给定整数的阶乘计算结果。

对于整数 n，n 的阶乘就是所有小于等于 n 的正整数的乘积。

阶乘通常用符号 n! 来表示。

例如：5! = 1 * 2 * 3 * 4 * 5 = 120

在这个挑战中，只有非负整数会作为参数传入函数。*/



function factorialize(num) {
    let n=1;
    for(let i=2; i<=num;i++){
      n*=i;
      }
      return n;
    
    
  }
  
  factorialize(5);