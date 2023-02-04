/*查找数字字符的缩写是 \d，注意是小写的 d。 
这等同于元字符 [0-9]，它查找 0 到 9 之间任意数字的单个字符*/

let movie = "2001: A Space Odyssey";
let numRegex = /\d/g; // 修改这一行
let one = movieName.match(numRegex).length;


/*查找非数字字符的缩写是 \D。 这等同于字符串 [^0-9]，
它查找不是 0 - 9 之间数字的单个字符。*/
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // 修改这一行
let result = movieName.match(noNumRegex).length;

/*可以使用 \s 搜寻空格，其中 s 是小写。 此匹配模式将匹配空格、回车符、制表符、换页符和换行符。*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

//可以用\S 搜寻非空格，其中S是大写。
let white = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;