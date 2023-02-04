/*检查字符串（第一个参数 str）是否以给定的目标字符串（第二个参数 target）结束。

这个挑战 可以 用 ES2015 引入的 .endsWith() 方法来解决。但在这个挑战中，
请使用 JavaScript 的字符串子串方法。*/



function confirmEnding(str, target) {
  
    return str.slice(str.length-target.length)===target;
  }
  
  confirmEnding("Bastian", "n");

