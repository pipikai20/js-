/*在之前的挑战中，使用字符集中前插入符号（^）来创建一个否定字符集，
形如 [^thingsThatWillNotBeMatched]。 除了在字符集中使用之外，
插入符号（^）用于匹配文本是否在字符串的开始位置*/

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // 修改这一行
let one = calRegex.test(rickyAndCal);


//可以使用正则表达式的美元符号 $ 来搜寻字符串的结尾。

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // 修改这一行
let result = lastRegex.test(caboose);