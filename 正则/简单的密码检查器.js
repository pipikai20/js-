/*
 正向先行断言的用法是 (?=...)，其中 ... 就是需要存在.

负向先行断言的用法是 (?!...)，其中 ... 是希望不存在的匹配模式。
 


/*先行断言的更实际用途是检查一个字符串中的两个或更多匹配模式。
 这里有一个简单的密码检查器，密码规则是 3 到 6 个字符且至少包含一个数字：*/


 let password = "abc123";
 let checkPass = /(?=\w{3,6})(?=\D*\d)/;
 checkPass.test(password);


//正则表达式 pwRegex 中使用先行断言以匹配大于 5 个字符且有两个连续数字的密码。

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2,})/g; // 修改这一行
let result = pwRegex.test(sampleWord);
