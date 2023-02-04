/*编写一个正则表达式并使用适当的字符串方法删除字符串开头和结尾的空格。

注意： String.prototype.trim() 方法在这里也可以实现同样的效果，*/


//使用捕获器抓取空白、.replace（）是代替。
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line


