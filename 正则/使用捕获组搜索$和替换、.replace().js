/*可以在字符串上使用 .replace() 方法来搜索并替换字符串中的文本。
 .replace() 的输入首先是想要搜索的正则表达式匹配模式。 第二个参数是用于替换匹配的字符串或用于执行某些操作的函数。*/
 
 
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");


//捕获器、你还可以使用美元符号（$）访问替换字符串中的捕获组

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');


/*使用三个捕获组编写一个正则表达式 fixRegex，这三个捕获组将搜索字符串 one two three 中的每个单词。 
然后更新 replaceText 变量，以字符串 three two one 替换 one two three，并将结果分配给 result 变量。 
确保使用美元符号（$）语法在替换字符串中使用捕获组。*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; //三个捕获器
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);