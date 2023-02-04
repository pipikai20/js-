/*使用加号 + 查找一个或多个字符，使用星号 * 查找零个或多个字符。 这些都很方便，但有时需要匹配一定范围的匹配模式。

可以使用数量说明符（quantity specifiers）指定匹配模式的上下限。 数量说明符与花括号（{ 和 }）一起使用。 
可以在花括号之间放两个数字，这两个数字代表匹配模式的上限和下限。

例如，要匹配出现 3 到 5 次字母 a 的在字符串 ah，正则表达式应为/a{3,5}h/。*/


//指定匹配模式的上下限
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

//使用加号 + 查找一个或多个字符，使用星号 * 查找零个或多个字符。

//限制下线，则在第一个数字后面跟一个逗号即可。
//要匹配至少出现 3 次字母 a 的字符串 hah，正则表达式应该是 /ha{3,}h/。

let A3 = "haaaah";
let A1 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleB = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);