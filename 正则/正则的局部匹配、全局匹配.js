//忽略大小写字母的搜索
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

//提取匹配项
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let thing = extractStr.match(codingRegex);

//全局匹配
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; //忽略大小全局搜索 
let some  = twinkleStar.match(starRegex); 

/*用通配符匹配任何内容, 通配符也叫 dot 或 period。 可以像使用正则表达式中任何其他字符一样使用通配符。 例如，如果想匹配
 hug、huh、hut 和 hum，可以使用正则表达式 /hu./
  匹配以上四个单词。*/
    let humStr = "I'll hum a song";
    let hugStr = "Bear hug";
    let huRegex = /hu./;
    huRegex.test(humStr);
    huRegex.test(hugStr);


    let exampleStr = "Let's have fun with regular expressions!";
    let unRegex = /.un/; // 修改这一行
    let one = unRegex.test(exampleStr);

//匹配字母表中的数字和字母,使用连字符（-）匹配字符范围并不仅限于字母。 它还可以匹配一系列数字。
    let quoteSample = "Blueberry 3.141592653s are delicious.";
    let myRegex = /[h-s2-6]/gi;
    let  two= quoteSample.match(myRegex); 


